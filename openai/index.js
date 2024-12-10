import { openai } from "./openai.js";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "@langchain/openai";

import { GithubRepoLoader } from "@langchain/community/document_loaders/web/github";

const GITHUB_URL = "https://github.com/Gaurav-Dash/basic-nextjs-app";

const errorLogs = `
> Build error occurred
Error: Page "/[...slug]" is missing "generateStaticParams()" so it cannot be used with "output: export" config.
    at /Users/siva.manyam/frontend/projects/basic-nextjs-app/node_modules/next/dist/build/index.js:1297:59
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Span.traceAsyncFn (/Users/siva.manyam/frontend/projects/basic-nextjs-app/node_modules/next/dist/trace/trace.js:154:20)
    at async Promise.all (index 4)
    at async /Users/siva.manyam/frontend/projects/basic-nextjs-app/node_modules/next/dist/build/index.js:1175:17
    at async Span.traceAsyncFn (/Users/siva.manyam/frontend/projects/basic-nextjs-app/node_modules/next/dist/trace/trace.js:154:20)
    at async /Users/siva.manyam/frontend/projects/basic-nextjs-app/node_modules/next/dist/build/index.js:1098:124
    at async Span.traceAsyncFn (/Users/siva.manyam/frontend/projects/basic-nextjs-app/node_modules/next/dist/trace/trace.js:154:20)
    at async build (/Users/siva.manyam/frontend/projects/basic-nextjs-app/node_modules/next/dist/build/index.js:368:9)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

`;

const docsFromGithub = () => {
  const loader = new GithubRepoLoader(GITHUB_URL, {
    branch: "poc/cms-errors",
    recursive: true,
    unknown: "warn",
    accessToken: process.env.GITHUB_ACCESS_TOKEN,
    maxConcurrency: 1, // Defaults to 2
    ignorePaths: [
      "*.md",
      "*.json",
      "*.test.*",
      "*.txt",
      "yarn.lock",
      "openai/*",
    ],
  });

  return loader.load();
};

const createStore = (docs) =>
  MemoryVectorStore.fromDocuments(docs, new OpenAIEmbeddings({}));

const loadStore = async () => {
  const githubDocs = await docsFromGithub();

  return createStore(githubDocs);
};

const functions = {
  cmsErrorHandler: async ({ slug }) => {
    console.log(slug, "slug");
    return `Data related to this page path is here and now identify which field is missing from these data and suggest fix for it 
    {
      contentType: 'page',
      id: '6tAwLPsUACzavQsnjSuMm3',
      name: 'Page A',
      slug: ${slug}
    }
    `;
  },
};

const getCompletion = async (messages) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages,
    functions: [
      {
        name: "cmsErrorHandler",
        description:
          "Handles cases of CMS errors by identifying the page and missing fields.",
        parameters: {
          type: "object",
          properties: {
            slug: {
              type: "string",
              description: "The page path of where the error happened.",
            },
            fields: {
              type: "object",
              description: "The fields missing or broken in CMS.",
            },
          },
          required: ["slug"],
        },
      },
    ],
    temperature: 0,
  });

  return response;
};

const query = async () => {
  const store = await loadStore();

  const results = await store.similaritySearch(errorLogs, 3);

  const messages = [
    {
      role: "assistant",
      content: `

**You are a Build Failure Analysis Bot.**

Your task is to analyze build failures based on logs and categorize errors appropriately. 

### Error Categories:
1. **CMS Errors**: These occur when data fetched from Contentful is missing or invalid. If the error stems from Contentful, it should be categorized as a CMS error. Do not suggest code fixes for CMS errors.
2. **Code Errors**: These arise from issues within the code itself.
3. **Other Errors**: These include infrastructure, environment, or deployment-related issues.

### Context:
You will receive error logs containing details about the failure, and the context will include relevant information about the page content. You must analyze the logs, identify the root cause, and categorize the error accordingly.

**Instructions**:
- If an error is due to missing or invalid data from Contentful, classify it as a CMS error.
- For CMS errors, **do not** suggest code fixes. Instead, recommend investigating the Contentful entries for missing or invalid fields.
- For code errors, suggest potential fixes or checks related to the codebase.
- For other errors, point out possible issues with infrastructure or deployment.

**Context Example**:

  Context: ${results.map((r) => r.pageContent).join("\n")}


  If a CMS error is identified, always invoke the \`cmsErrorHandler\` function which i'm passing as part of the openai.chat.completions.create.
      For this log, you need to analyze the errors and decide if it's a CMS issue. If yes, invoke the function. Don't simply describe it in text..`,
    },
    {
      role: "user",
      content: `Here is the error log\n logs: ${errorLogs}`,
    },
  ];

  let response;

  while (true) {
    response = await getCompletion(messages);

    if (response.choices[0].finish_reason === "stop") {
      console.log(
        `Answer: ${response.choices[0].message.content}\n\nSources: ${results
          .map((r) => r.metadata.source)
          .join(", ")}`
      );
      break;
    } else if (response.choices[0].finish_reason === "function_call") {
      const fnName = response.choices[0].message.function_call.name;
      const args = response.choices[0].message.function_call.arguments;

      console.log(fnName, "fnName", args, "args");

      const functionToCall = functions[fnName];
      const params = JSON.parse(args);

      const result = functionToCall(params);

      messages.push({
        role: "assistant",
        content: null,
        function_call: {
          name: fnName,
          arguments: args,
        },
      });

      messages.push({
        role: "function",
        name: fnName,
        content: JSON.stringify({ result: result }),
      });
    }
  }
};

query();

/**
 *
 * nested components populated from cms
 *
 */

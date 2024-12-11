import { openai } from "./openai.js";
import { fetchPageData } from "./lib/contentful/utils.js";

export const functions = {
  cmsErrorHandler: async ({ slug }) => {
    console.log(slug, "slug");
    const pageData = await fetchPageData({ slug });

    console.log(JSON.stringify(pageData, null, 2));

    const schema = {};

    return `
          Analyze the error logs provided above and
          compare them with the provided pageData. 
          Identify missing or broken fields, and construct the respective CMS links.
          Here is the page data from the cms for this slug: ${slug},
          pageData: ${JSON.stringify(pageData, null, 2)}
          Contentful Model Schema: ${JSON.stringify(schema, null, 2)}
          validate pageData with contentful model schema, if you find issues with pageData 
    `;
  },
};

export const getCompletion = async (messages, retries = 2) => {
  retries--;
  if (retries <= 0) return getCMSCompletion(messages);
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages,
    temperature: 0,
  });
  messages.push({
    role: "user",
    content: `Recheck all the problems provided with ${response.data} with the code contexts, their surroundings and backtracking and verify there are not any other problems. Finaly give best likely possible options of the error occurances, their locations and solution.
     `,
  });

  return getCompletion(messages, retries);
};

export const getCMSCompletion = async (messages) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages,
    functions: [
      {
        name: "cmsErrorHandler",
        description:
          "Handle cases of CMS errors by identifying the page and missing fields.",
        parameters: {
          type: "object",
          properties: {
            slug: {
              type: "string",
              description: "The page path of where the error happened.",
            },
            fields: {
              type: "array",
              description: "list of missing or broken fields in the CMS.",
              items: {
                type: "string",
              },
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

export const extractErrorLogs = async (logs) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are an AI assistant specialized in extracting error logs from CodeBuild logs. just extract errorlogs only where error occurred.",
        },
        {
          role: "user",
          content: `Here are the logs: ${logs}`,
        },
      ],
      temperature: 0,
    });

    const extractedMessage = response?.choices?.[0]?.message?.content;

    return extractedMessage;
  } catch (error) {
    console.error("Error while extracting logs:", error);
  }
};

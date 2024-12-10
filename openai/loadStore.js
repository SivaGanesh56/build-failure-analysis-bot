import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "@langchain/openai";

import { GithubRepoLoader } from "@langchain/community/document_loaders/web/github";

const GITHUB_URL = "https://github.com/Gaurav-Dash/basic-nextjs-app";

const docsFromGithub = () => {
  const loader = new GithubRepoLoader(GITHUB_URL, {
    branch: "poc/sigterm-errors",
    recursive: true,
    unknown: "warn",
    accessToken: process.env.GITHUB_ACCESS_TOKEN,
    maxConcurrency: 1,
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

export const loadStore = async () => {
  const githubDocs = await docsFromGithub();

  return createStore(githubDocs);
};

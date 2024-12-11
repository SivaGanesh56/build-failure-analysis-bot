import { openai } from "./openai.js";
import { CMS_PROMPT_TEXT, SPACE_ID } from "./constants.js";
import { DATA, SCHEMA } from "./cms.js";
import { fetchPageData } from "./lib/contentful/utils.js";
import { validateDataAgainstSchema } from "./utils.js";

export const functions = {
  cmsErrorHandler: async ({ slug }) => {
    const pageData = await fetchPageData({ slug });

    const invalidEntries = validateDataAgainstSchema(pageData, SCHEMA);

    if (!pageData || !invalidEntries) {
      return `No Data Found with this slug: ${slug} in CMS, might not be CMS Error cross check other errors`;
    }

    const brokenLinks = invalidEntries.map(
      (invalidEntry) =>
        `https://app.contentful.com/spaces/${SPACE_ID}/entries/${
          invalidEntry.id
        }?focusedField=${invalidEntry.invalidFields.join(",")}`
    );

    const output = `
       invalid entry links from Contentful:
       ${brokenLinks.join("\n")}
    `;

    return output;
  },
  contentfulLinkGenerator: async ({ entryId, ...rest }) => {
    console.log(entryId, "entryId", rest);
    return `https://app.contentful.com/spaces/${SPACE_ID}/entries/${entryId}`;
  },
};

export const getCompletion = async (messages, retries = 1) => {
  retries--;
  if (retries <= 0) return getCMSCompletion(messages);
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages,
    temperature: 0,
  });
  messages.push({
    role: "user",
    content: `Recheck all the problems provided by ${response.choices[0].message} with the code contexts,
       their surroundings and backtracking to the respective functions calls if required.
        Verify there are not any other problems. 
        Finally give best likely possible options of the error occurrences, their locations and solution`,
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
              description: "The page path where the error happened.",
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
      // {
      //   name: "contentfulLinkGenerator",
      //   description:
      //     "Takes the entry ID of a Contentful entry as input and returns its link",
      //   parameters: {
      //     type: "object",
      //     properties: {
      //       entryId: {
      //         type: "string",
      //         description: "ID of Contentful entry",
      //       },
      //     },
      //     required: ["entryId"],
      //   },
      // },
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

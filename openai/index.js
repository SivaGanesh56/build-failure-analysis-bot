import { CODE_ERROR_NESTED_ERROR } from "./errors.js";
import { ASSISTANT_PROMPT_TEXT } from "./constants.js";
import { loadStore } from "./loadStore.js";
import { functions, getCompletion } from "./helpers.js";
// import { sendNotificationToTeams } from "./sendNotificationToTeams.js";

const errorLogs = CODE_ERROR_NESTED_ERROR;

const query = async () => {
  const store = await loadStore();

  // const results = await store.similaritySearch(errorLogs, 2);

  const results = store.memoryVectors.map((item) => ({
    pageContent: item.content,
    metadata: item.metadata,
  }));

  const messages = [
    {
      role: "assistant",
      content: `
        ${ASSISTANT_PROMPT_TEXT}
        Code Context: ${results.map((r) => r.pageContent).join("\n")}
      `,
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
      const content = `${
        response.choices[0].message.content
      }\n\nSources: ${results.map((r) => r.metadata.source).join(", ")}\n\n`;

      console.log(content);

      // await sendNotificationToTeams(content);

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

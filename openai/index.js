import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { analyzeErrorLogs } from "./analyzeError.js";
import { CODE_ERROR_INCORRECT_PARAMS } from "./errors.js";

const app = express();

app.use(cors());

app.use(bodyParser.json());

const PORT = "8181";

app.listen(PORT, () => {
  console.log(`Server Listening on Port: ${PORT}`);
});

app.get("/health", (_req, res) => {
  res.json({ message: "Server Running Healthy :)" });
});

app.post("/analyze-error-ai", async (req, res) => {
  // const { logs } = req.body;

  // console.log("logs from codebuild:", logs);

  const logs = CODE_ERROR_INCORRECT_PARAMS;

  console.log(`Error Analysis Started...`);

  setTimeout(async () => {
    await analyzeErrorLogs(logs);
  }, 0);

  return res.json({
    message:
      "Your error logs are being analyzed. You will receive a notification in the Teams channel once the analysis is complete.",
  });
});

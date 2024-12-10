import { createClient } from "contentful";

const {
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_HOST,
  CONTENTFUL_ENV,
} = process.env;

export const client = createClient({
  accessToken: CONTENTFUL_ACCESS_TOKEN || "",
  space: CONTENTFUL_SPACE_ID || "",
  environment: CONTENTFUL_ENV,
  host: CONTENTFUL_HOST,
});

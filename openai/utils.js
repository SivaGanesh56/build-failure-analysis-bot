import { SCHEMA } from "./cms.js";

const parseSchema = (schemaString) => JSON.parse(schemaString);

// Main validation function
export const validateDataAgainstSchema = (pageData, schemaString) => {
  const schema = parseSchema(schemaString);
  const errors = [];

  // A helper function to find the schema definition for a given content type
  const findSchemaByContentType = (contentType) => {
    return schema.find((item) => item.sys.id === contentType);
  };

  // Recursive validation function
  const validate = (data, schemaDefinition, parentId = "root") => {
    const invalidFields = [];

    schemaDefinition.fields.forEach((field) => {
      const fieldValue = data[field.id];

      // Handle required fields
      if (field.required && (fieldValue === undefined || fieldValue === null)) {
        invalidFields.push(field.id);
        return;
      }

      // Handle validations
      if (fieldValue !== undefined && field.validations.length > 0) {
        field.validations.forEach((validation) => {
          if (validation.unique && typeof fieldValue === "string") {
            // mock implementation
            if (fieldValue === "not-unique") {
              invalidFields.push(field.id);
            }
          }
          if (
            validation.linkContentType &&
            Array.isArray(validation.linkContentType)
          ) {
            const isValidLinkContentType = validation.linkContentType.some(
              (linkContentType) => fieldValue.contentType === linkContentType
            );
            if (!isValidLinkContentType) {
              invalidFields.push(field.id);
            }
          }
        });
      }

      if (field.type === "Link" && fieldValue && field.linkType === "Entry") {
        const nestedSchema = findSchemaByContentType(fieldValue.contentType);
        if (nestedSchema) {
          validate(fieldValue, nestedSchema, fieldValue.id);
        }
      }

      if (field.type === "Array" && Array.isArray(fieldValue)) {
        fieldValue.forEach((item) => {
          if (item.contentType) {
            const nestedSchema = findSchemaByContentType(item.contentType);
            if (nestedSchema) {
              validate(item, nestedSchema, item.id);
            }
          }
        });
      }
    });

    if (invalidFields.length > 0) {
      errors.push({ id: parentId, invalidFields });
    }
  };

  const rootSchema = findSchemaByContentType(pageData.contentType);
  if (rootSchema && pageData) {
    validate(pageData, rootSchema);
  }

  return errors;
};

// Example usage
const pageData = {
  contentType: "page",
  id: "tx7ditrXycsUoV77cd5MA",
  name: "Page 2",
  slug: "/page/2/",
  content: {
    contentType: "widgetRenderer",
    id: "3ZJCMyvTzFrJxRGTFCa2M4",
    // widgets: [
    //   {
    //     contentType: "widgetA",
    //     id: "jdhdh88383",
    //     title: "Hero Section",
    //     content: "Some Content",
    //   },
    //   {
    //     contentType: "widgetB",
    //     id: "hdsh883hp0",
    //     title: "Carosuel Section",
    //     Slides: [
    //       {
    //         contentType: "Slide",
    //         id: "jdjd838s21",
    //         image: "url1",
    //         data: "somedata1",
    //       },
    //       {
    //         contentType: "Slide",
    //         id: "8288cnuc",
    //         image: "url2",
    //         data: "somedata2",
    //       },
    //     ],
    //   },
    // ],
  },
};

// console.log(validateDataAgainstSchema(pageData, SCHEMA));

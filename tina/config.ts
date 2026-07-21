import { defineConfig } from "tinacms";

// Your hosting provider name of choice
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "511af64a-5b88-4981-81b2-c1143f09d564", // Fixed Client ID
  token: "0e3d32ec34b41d0e9f75611853c26c9a5427a4fb", // Fixed Content Token
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "product",
        label: "Products",
        path: "content/products",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Product Name",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Product Image",
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["Line Array", "Subwoofer", "Active Speaker", "Accessories"],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "object",
            list: true,
            name: "specs",
            label: "Technical Specifications",
            fields: [
              { type: "string", name: "label", label: "Label (e.g. Power)" },
              { type: "string", name: "value", label: "Value (e.g. 1000W)" },
            ],
          },
        ],
      },
      {
        name: "post",
        label: "News & Blog",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});

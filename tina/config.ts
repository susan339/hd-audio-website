import { defineConfig } from "tinacms";

// Your hosting provider name of choice
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // Get this from app.tina.io
  token: process.env.TINA_TOKEN, // Get this from app.tina.io
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

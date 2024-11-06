import { defineConfig } from "tinacms";

const branch = process.env.NEXT_PUBLIC_TINA_BRANCH ;
const clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID ;
const token = process.env.TINA_TOKEN ;

export default defineConfig({
  branch,
  clientId,
  token,
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
        name: "faq",
        label: "質問回答を追加",
        path: "content/faqs",
        format: "md",
        ui: {
          router: ({ document }) => "/faqs",
        },
        fields: [
          {
            type: "object",
            name: "faqs",
            label: "FAQ Items",
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item.question,
              }),
            },
            fields: [
              {
                type: "string",
                name: "question",
                label: "質問",
                required: true,
              },
              {
                type: "string",
                name: "answer",
                label: "回答",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "category",
                label: "カテゴリー",
                required: false,
                options: ["本番", "エントリー", "審査", "表彰", "支払い", "その他"],
              },
            ],
          },
        ],
      },
    ],
  },
});
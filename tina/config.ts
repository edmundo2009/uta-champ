import { defineConfig, defineSchema } from "tinacms";

const schema = defineSchema({
  collections: [
    {
      name: "faq",
      label: "質問回答を追加",
      path: "content/faqs",
      format: "md",
      ui: {
        router: ({ document }) => "/faqs",
      },
      // fields: [
      //   {
      //     type: "object",
      //     name: "faqs",
      //     label: "FAQ Items",
      //     list: true,
      //     ui: {
      //       itemProps: (item) => ({
      //         label: item.question,
      //       }),
      //     },
      //     fields: [
      //       {
      //         type: "string",
      //         name: "question",
      //         label: "Question",
      //         required: true,
      //       },
      //       {
      //         type: "string",
      //         name: "answer",
      //         label: "Answer",
      //         required: true,
      //         ui: {
      //           component: "textarea",
      //         },
      //       },
      //     ],
      //   },
      // ],
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
});

export default defineConfig({
  schema,
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || "master",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "01248537-bed9-4526-8eb2-e7b38f3ad462",
  token: process.env.TINA_TOKEN || "f2dd49bd4cd2dc70eb0ef12feadc783dc472df72",
  build: {
    publicFolder: "public",
    outputFolder: "admin"
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads"
    }
  },
  // Add this section
  webhook: {
    url: process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/revalidate`
      : 'http://localhost:3000/api/revalidate',
    mode: 'data'
  }
});
export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "620219c55b4321566befd393",
                  title: "Sanity Studio",
                  name: "sanity-blog-studio-bfym5yjx",
                  apiId: "560c87ff-8e66-46ef-8f17-5296a41900c3",
                },
                {
                  buildHookId: "620219c5528b1b4ec9911ef6",
                  title: "Blog Website",
                  name: "sanity-blog-web-4s7amtg7",
                  apiId: "f2102df0-e639-4c48-93d9-fd4a1fd673d0",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/axay98/sanity-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-blog-web-4s7amtg7.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

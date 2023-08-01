/*
-- Make sure GRAPHQL_INTROSPECTION=true
-- Create a static token for the authenticated role
-- Make sure to run <npx graphql-codegen --watch> for realtime updates
-- Make sure to add this file to .gitignore
 */

const staticToken = "OySMUHR0yf0g9jz_lIz-UXuEAA1f_J_N";

const config = {
  schema: `http://127.0.0.1:8055/graphql?access_token=${staticToken}`,
  documents: [
    "./pages/**/*.vue",
    "./components/**/*.vue",
    "./composables/**/*.ts",
    "./app.vue",
  ],
  ignoreNoDocuments: true,
  generates: {
    "./gql/": {
      preset: "client",
      config: {
        useTypeImports: true,
      },
    },
  },
};

export default config;

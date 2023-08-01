/*
-- Make sure to install <GraphQL: Language Feature Support> Vscode extension
-- Make sure to restart Vscode after creating this file
-- Make sure GRAPHQL_INTROSPECTION=true
-- Create a static token for the authenticated role
-- Make sure to add this file to .gitignore
 */

const staticToken = "OySMUHR0yf0g9jz_lIz-UXuEAA1f_J_N";

module.exports = {
  projects: {
    app: {
      schema: [`http://127.0.0.1:8055/graphql?access_token=${staticToken}`],
      documents: [
        "./pages/**/*.vue",
        "./components/**/*.vue",
        "./composables/**/*.ts",
        "./app.vue",
      ],
    },
  },
};

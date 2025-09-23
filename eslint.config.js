
import parser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    ignores: [
      "node_modules/",
      "build/",
      "dist/",
      ".cache/",
      "public/",
      "*.log"
    ]
  },
  {
    files: ["src/**/*.{js,jsx,ts,tsx}", "gatsby-*.ts"],
    languageOptions: {
      parser,
      ecmaVersion: "latest",
      sourceType: "module"
    },
    plugins: {
      react: reactPlugin,
      "@typescript-eslint": tsPlugin,
      prettier: prettierPlugin
    },
    rules: {
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off"
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }
];

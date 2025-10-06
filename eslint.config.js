// eslint.config.js

import globals from "globals";

export default [
  {
    // 1. Files/Directories to ignore
    ignores: ["node_modules/", "dist/"], 
  },
  {
    // 2. Configuration for all JavaScript files
    languageOptions: {
      globals: {
        ...globals.browser, // Add browser global variables (e.g., window, document)
        ...globals.node,   // Add Node.js global variables (e.g., require, module)
      },
      sourceType: "module",
      ecmaVersion: 2022
    },
    // 3. Recommended rules
    rules: {
      // Add any specific rules your project needs here
      // For example, to enable the 'recommended' ruleset:
      // ...require('eslint').configs.recommended.rules 
    }
  }
];
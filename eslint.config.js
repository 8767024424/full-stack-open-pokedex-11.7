// eslint.config.js

export default [
  // This configuration includes the ESLint recommended rules
  {
    ignores: ["node_modules/", "dist/"], // Add any folders/files you want to ignore
    rules: {
      // You can add project-specific rules here
      // For example, to ensure semicolons are not required:
      // "semi": ["error", "never"]
    }
  }
];
import js from '@eslint/js';

export default [
  {
    ignores: ['node_modules/', '.next/', '.git/']
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      ...js.configs.recommended.rules
    }
  }
];

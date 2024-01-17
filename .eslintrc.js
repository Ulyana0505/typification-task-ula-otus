module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['jest'],
    rules: {},
    overrides: [
        {
            files: [
                '.eslintrc.js',
                'jest.config.js',
            ],
            env: {
                node: true, // Apply Node environment specifically for ESLint config
            },
        },
    ],
}

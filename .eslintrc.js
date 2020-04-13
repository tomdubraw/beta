module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'standard'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        quotes: ['warn', 'backtick'],
        semi: ['warn', 'always'],
        'space-before-function-paren': ['warn', 'never'],
        'comma-dangle': ['warn', 'always-multiline'],
        "comma-spacing": ['warn', { "before": false, "after": true }],
        indent: ['error', 4]
    }
};

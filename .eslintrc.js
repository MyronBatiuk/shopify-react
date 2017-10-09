module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "jsx-a11y",
        "react"
    ],
    "rules": {
        // Disable eslint warnings for component and React imports
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/react-in-jsx-scope": 2,
        // JS styleguide: https://github.com/airbnb/javascript/tree/master/react
        "react/jsx-pascal-case": 2,
        "react/jsx-closing-bracket-location": 2,
        "react/jsx-closing-tag-location": 2,
        "jsx-quotes": 2,
        "react/jsx-tag-spacing": 2,
        "no-multi-spaces": 2,
        "react/jsx-curly-spacing": 2,
        "react/jsx-boolean-value": 2,
        "jsx-a11y/alt-text": 2,
        "jsx-a11y/img-redundant-alt": 2,
        "jsx-a11y/aria-role": 2,
        "jsx-a11y/no-access-key": 2,
        "react/no-string-refs": 2,
        "react/jsx-wrap-multilines": 2,
        "react/self-closing-comp": 2,
        "react/jsx-closing-bracket-location": 2,
        "react/require-render-return": 2,
        "react/sort-comp": 2,
        // miscellaneous
        "indent": [ "error", 2],
        "linebreak-style": [ "error", "unix"],
        "quotes": [ "error", "single" ],
        "semi": [ "error", "always" ]
    }
};
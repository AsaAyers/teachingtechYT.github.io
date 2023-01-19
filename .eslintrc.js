/**
 * This config has been setup to just check syntax.  This project is using
 * <script> tags to include each file.  Without a module system in place, ESLint
 * can't detect what is used and what isn't.  Every `function myFunction() {}`
 * that looks like it would be in module scope is actually added to the global
 * scope.
 *
 */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
    }
}

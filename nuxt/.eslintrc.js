module.exports = {
    overrides: [
        {
            files: ["**/*.js"],
            plugins: ["jsdoc"],
            rules: {
                "jsdoc/require-description": "error",
                "jsdoc/check-values": "error"
            }
        }
    ]
};

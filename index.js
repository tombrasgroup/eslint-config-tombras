module.exports = {
	parserOptions: {
		parser: "babel-eslint",
	},
	extends: [
		"eslint:recommended",
		"plugin:vue/essential",
		"plugin:prettier/recommended",
	],
	env: {
		"browser": true,
	},
	rules: {
		"no-console": "off",
		"prettier/prettier": [
			"error",
			{
				useTabs: true,
				trailingComma: "all",
			},
		]
	}
};
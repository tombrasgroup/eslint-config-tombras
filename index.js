module.exports = {
	"extends": [
		"airbnb-base",
		"prettier"
	],
	"plugins": [
		"prettier"
	],
	"env": {
		"browser": true,
	},
	"rules": {
		"prettier/prettier": ["error", {
			"useTabs": true,
			"trailingComma": "all"
		}]
	},
};
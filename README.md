# eslint-config-tombras

This package provides Tombras' base JS .eslintrc as an extensible shared config. It extends from airbnb-base and prettier.

#### Install

```sh
npm i -g eslint-config-tombras eslint@4 eslint-plugin-import@2
```

#### Usage

Create a file named `.eslintrc` and add the following

```json
{
	"extends": ["tombras"]
}
```

#### Items Added

- env
  - browser: true
- rules
  - prettier; useTabs: true

# eslint-config-tombras

This package provides Tombras' base JS .eslintrc as an extensible shared config.

#### Install

```sh
npm i -g eslint-config-tombras eslint@3 eslint-plugin-import@2
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
  - indent: errors, tab
  - no-tabs: off
  - import/extensions: errors, always, {js: always}

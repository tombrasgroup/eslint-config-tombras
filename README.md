# eslint-config-tombras

This package provides Tombras' base JS .eslintrc as an extensible shared config. It adds vue and prettier on top of eslint:recommended

#### Install

```sh
npm i eslint-config-tombras eslint-config-recommended eslint-config-prettier babel-eslint eslint-plugin-prettier prettier eslint-plugin-vue eslint@4 eslint-plugin-import@2 --save-dev
```

#### Usage

Create a file named `.eslintrc` and add the following

```json
{
	"extends": ["tombras"]
}
```

#### Format On Save

##### VS Code

`cmd+,` to open settings then add the following

```json
"editor.formatOnSave": true,
"eslint.autoFixOnSave": true,
```

##### IntelliJ

?? not sure...
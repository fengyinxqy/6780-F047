# eslint-plugin-no-multiple-refs

An ESLint plugin to prevent multiple refs being defined in a single line in Vue components.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-no-multiple-refs`:

```sh
npm install eslint-plugin-no-multiple-refs --save-dev
```

## Usage

Add `no-multiple-refs` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-multiple-refs"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-multiple-refs/no-multiple-refs": "error"
    }
}
```

## Supported Rules

* Fill in provided rules here

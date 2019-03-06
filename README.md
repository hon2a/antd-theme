# antd-theme

Variables from Ant Design theme (Less) provided as JavaScript object

## Use

Simply import the package to get the theme variables.

```javascript
import antdTheme from '@hon2a/antd-theme'
import { camelCase, mapKeys } from 'lodash/mapKeys'

// might be a good idea to camel-case the variable names to easily access them as properties
export const myTheme = {
  ...mapKeys(antdTheme, (value, key) => camelCase(key)),
  primaryColor: 'green',
  // ...
}
```

## Development

Just don't. New version should only ever be published when a new version of `antd` is released
and the published version of this package should reflect `antd` version. 
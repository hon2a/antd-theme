#!/usr/bin/env node

const { resolve } = require('path')
const { loadAndResolveLessVars } = require('@hon2a/less-vars-to-js')
const { white, red, green } = require('chalk')
const { outputFileSync } = require('fs-extra')

const log = (...messages) => console.log(white.dim('antd-theme:'), ...messages) // eslint-disable-line no-console

log(`Collecting Ant Design theme variables.`)

loadAndResolveLessVars(resolve(__dirname, '../node_modules/antd/lib/style/themes/default.less'), {
  javascriptEnabled: true,
  math: 'always'
})
  .then(vars => {
    log(`Writing theme variables into a file to be published.`)
    outputFileSync(resolve(__dirname, '../lib/index.js'), `module.exports = ${JSON.stringify(vars, null, 2)}\n`)
    log(green('√ Done.'), `${Object.values(vars).length} theme variables exported.`)
    process.exit(0)
  })
  .catch(error => {
    log(red(error))
    process.exit(1)
  })

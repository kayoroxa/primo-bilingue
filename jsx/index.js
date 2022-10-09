const { builtinModules } = require('module')
const { _require } = require('./_require')

const index = _require('./index.jsx')

console.log(index({ oi: 'beijinho' }))

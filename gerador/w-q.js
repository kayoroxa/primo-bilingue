// const _ = require('lodash')
const { generateSentences } = require('./funcs')
require('typescript-require')
// const { choseVariantes } = require('./choseVariantes.ts')
const { who } = require('./types_blocks/who')
const { where } = require('./types_blocks/where')
const { whyFinal } = require('./types_blocks/why')
const { what, whatPast } = require('./types_blocks/what')
const { when, whenPast } = require('./types_blocks/when')
const { intro, introPast } = require('./types_blocks/intro')
const { action, actionPoss, actionPast } = require('./types_blocks/action')
const { amountPast } = require('./types_blocks/amount')

const dict = {
  who,
  where,
  whyFinal,
  what,
  whatPast,
  when,
  whenPast,
  action,
  actionPoss,
  actionPast,
  intro,
  introPast,
  amountPast,
}

const samples = [
  // ['who', 'what', 'whyFinal'],
  // ['who', 'whatPast', 'whyFinal'],
  // ['who', 'action', 'whyFinal'],
  // ['who', 'actionPast', 'whyFinal'],
  // ['who', 'actionPoss', 'whyFinal'],
  ['who', 'actionPoss', 'amountPast'],

  /*PASSED*/
  ['who', 'what', 'where'],
  ['who', 'actionPast', 'amountPast'],
  ['who', 'whatPast', 'where'],
  ['who', 'action', 'when'],
  ['who', 'actionPast', 'whenPast'],
  ['who', 'action', 'where'],
  ['who', 'actionPast', 'where'],
  ['who', 'actionPoss', 'where'],
  ['intro', 'who', 'action'],
  ['intro', 'who', 'actionPoss'],
  ['introPast', 'who', 'actionPast'],
]

// console.log(choseVariantes(dict))

generateSentences({
  samples,
  dict,
  anki: false,
  lengthOutput: 45,
  fraseLength: 45,
  n: 2,
  // similarity: true,
  showNewsTeach: true,
  printWithVariable: true,
})

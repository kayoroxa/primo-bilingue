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
}

const samples = [
  // ['who', 'what', 'when', 'where', 'why'],
  // ['who', 'what', 'where', 'when', 'why'],
  // ['who', 'whatPast', 'where', 'whenPast', 'why'],
  // ['who', 'what', 'where', 'when'],
  // ['who', 'whatPast', 'where', 'when'],
  // ['who', 'what', 'where'],
  ['who', 'what', 'whyFinal'],
  ['who', 'whatPast', 'whyFinal'],
  ['who', 'action', 'whyFinal'],
  ['who', 'actionPast', 'whyFinal'],
  ['who', 'actionPoss', 'whyFinal'],
  // ['who', 'whatPast', 'why'],
  // ['who', 'what', 'when'],
  // ['who', 'whatPast', 'whenPast'],

  /*PASSED*/
  // ['who', 'what', 'where'],
  // ['who', 'whatPast', 'where'],
  // ['who', 'action', 'when'],
  // ['who', 'actionPast', 'whenPast'],
  // ['who', 'action', 'where'],
  // ['who', 'actionPast', 'where'],
  // ['who', 'actionPoss', 'where'],
  // ['intro', 'who', 'action'],
  // ['intro', 'who', 'actionPoss'],
  // ['introPast', 'who', 'actionPast'],
  // ['introPast', 'who', 'actionPoss'],
]

// console.log(choseVariantes(dict))

generateSentences({
  samples,
  dict,
  anki: false,
  lengthOutput: 55,
  fraseLength: 45,
  n: 3,
  // similarity: true,
  showNewsTeach: true,
  variableName: true,
})

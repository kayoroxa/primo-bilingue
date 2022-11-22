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
const { actionFut, actionIngPos, actionPast } = require('./types_blocks/action')
const { amountPast } = require('./types_blocks/amount')
const { start, middlePast } = require('./types_blocks/testeBlock')

const dict = {
  who,
  where,
  whyFinal,
  what,
  whatPast,
  when,
  whenPast,
  actionFut,
  actionIngPos,
  actionPast,
  intro,
  introPast,
  amountPast,

  /*test*/
  start,
  middlePast,
}

const samples = [
  // ['who', 'what', 'whyFinal'],
  // ['who', 'whatPast', 'whyFinal'],
  // ['who', 'action', 'whyFinal'],
  // ['who', 'actionPast', 'whyFinal'],
  // ['who', 'actionPoss', 'whyFinal'],
  // ['who', 'actionPoss', 'amountPast'],
  // ['who', 'actionPoss', 'amountPast'],

  /*TESTE*/
  ['start', 'who', 'actionFut'],
  ['start', 'who', 'actionIngPos'],
  // ['who', 'middlePast', 'whenPast'],
  // ['who', 'middlePast', 'where'],
  // ['who', 'middlePast', 'amountPast'],
  // ['introPast', 'who', 'middlePast'],

  /*PASSED*/
  // ['who', 'what', 'where'],
  // ['who', 'whatPast', 'where'],
  // ['who', 'actionFut', 'when'],
  // ['who', 'actionFut', 'where'],
  // ['who', 'actionPast', 'whenPast'],
  // ['who', 'actionPast', 'where'],
  // ['who', 'actionPast', 'amountPast'],
  // ['who', 'actionIngPos', 'where'],
  // ['intro', 'who', 'actionFut'],
  // ['intro', 'who', 'actionIngPos'],
  // ['introPast', 'who', 'actionPast'],
]

// console.log(choseVariantes(dict))

generateSentences({
  samples,
  dict,
  anki: false,
  lengthOutput: 25,
  fraseLength: 45,
  n: 2,
  // similarity: true,
  showNewsTeach: true,
  printWithVariable: true,
})

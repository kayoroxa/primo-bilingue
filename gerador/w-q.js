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
const {
  actionFut,
  actionIngPos,
  actionPast,
  actionPres,
  actionIng,
} = require('./types_blocks/action')
const { amountPast } = require('./types_blocks/amount')
const { start, middlePast, startPast } = require('./types_blocks/testeBlock')

const dict = {
  who,
  where,
  whyFinal,
  what,
  whatPast,
  when,
  whenPast,
  actionFut,
  actionIng,
  actionPres,
  actionPast,
  actionIngPos,
  intro,
  introPast,
  amountPast,

  /*test*/
  start,
  middlePast,
  startPast,
}

const samples = [
  /*TESTE*/
  // ['start', 'who', 'actionFut'],
  // ['start', 'who', 'actionIngPos'],
  // ['who', 'middlePast', 'whenPast'],
  // ['who', 'middlePast', 'where'],
  // ['who', 'middlePast', 'amountPast'],
  // ['introPast', 'who', 'middlePast'],
  // ['startPast', 'who', 'actionPast'],
  ['who', 'actionPres'],
  ['who', 'actionPres', 'when'],
  ['who', 'actionPres', 'where'],
  ['who', 'actionIng'],
  ['who', 'actionIng', 'where'],
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

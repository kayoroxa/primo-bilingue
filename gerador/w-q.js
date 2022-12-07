// const _ = require('lodash')
const { generateSentences } = require('./funcs')
require('typescript-require')
// const { choseVariantes } = require('./choseVariantes.ts')
const { who } = require('./types_blocks/who')
const { where } = require('./types_blocks/where')
const { whyFinal } = require('./types_blocks/why')
const { what, whatPast } = require('./types_blocks/what')
const { whenFut, whenPast } = require('./types_blocks/when')
const { intro, introPast, introFut } = require('./types_blocks/intro')
const {
  actionFut,
  actionIngPos,
  actionPast,
  actionPres,
  actionIng,
} = require('./types_blocks/action')
const { amountPast } = require('./types_blocks/amount')
const {
  start,
  middlePast,
  middleFut,
  startPast,
  middlePres,
} = require('./types_blocks/testeBlock')

const dict = {
  who,
  where,
  whyFinal,
  what,
  whatPast,
  whenFut,
  whenPast,
  actionFut,
  actionIng,
  actionPres,
  actionPast,
  actionIngPos,
  intro,
  introPast,
  introFut,
  amountPast,

  /*test*/
  start,
  middlePast,
  middleFut,
  middlePres,
  startPast,
}

const samples = [
  /*TESTE*/
  // ['startFut', 'who', 'actionFut'],
  // ['startPast', 'who', 'actionPast'],
  // ['start', 'who', 'actionPres'],
  // ['start', 'who', 'actionFut'],
  // ['start', 'who', 'actionIng'],
  // ['start', 'who', 'actionIngPos'],
  // ['who', 'middlePast', 'whenPast'],
  // ['who', 'middlePast', 'amountPast'],
  // ['who', 'middlePast', 'where'],
  // ['introPast', 'who', 'middlePast'],
  // ['introFut', 'who', 'middleFut'],
  // ['intro', 'who', 'middleFut'],
  // ['intro', 'who', 'middleIng'],
  // ['intro', 'who', 'middlePres'],
  // ['intro', 'who', 'middleIngPos'],
  // ['who', 'middleFut', 'whenFut'],
  // ['who', 'middleFut', 'where'],
  // ['who', 'middleIng', 'where'],
  // ['who', 'middleIngPos', 'where'],
  // ['who', 'middlePres', 'where'],
  // ['who', 'what', 'where'],
  // ['who', 'whatPast', 'where'],
  /*PASSED*/
  ['who', 'actionFut', 'where'],
  ['who', 'actionFut', 'whenFut'],
  ['who', 'actionPast', 'where'],
  ['who', 'actionPast', 'whenPast'],
  ['who', 'actionPast', 'amountPast'],
  ['who', 'actionIng', 'where'],
  ['who', 'actionIngPos', 'where'],
  ['introPast', 'who', 'actionPast'],
  ['introFut', 'who', 'actionFut'],
  ['intro', 'who', 'actionPres'],
  ['intro', 'who', 'actionIng'],
  ['intro', 'who', 'actionFut'],
  ['intro', 'who', 'actionIngPos'],
]

// console.log(choseVariantes(dict))

generateSentences({
  samples,
  dict,
  anki: false,
  lengthOutput: 10,
  fraseLength: 45,
  n: 2,
  // similarity: true,
  showNewsTeach: true,
  printWithVariable: true,
})

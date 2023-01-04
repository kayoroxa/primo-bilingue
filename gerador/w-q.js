// const _ = require('lodash')
const { generateSentences } = require('./funcs/funcs')
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
}

const samples = [
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
  lengthOutput: 20,
  fraseLength: 45,
  n: 2,
  // similarity: true,
  showNewsTeach: true,
  printWithVariable: true,
})

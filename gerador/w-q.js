const _ = require('lodash')
const { generateSentences } = require('./funcs')
require('typescript-require')
const { choseVariantes } = require('./choseVariantes.ts')
const { who } = require('./types_blocks/who')
const { where } = require('./types_blocks/where')
const { whyFinal } = require('./types_blocks/why')
const { what, whatPast } = require('./types_blocks/what')
const { when, whenPast } = require('./types_blocks/when')
const { intro, introPast, introFuture } = require('./types_blocks/who')
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
  introFuture,
}

const samples = [
  // ['who', 'what', 'when', 'where', 'why'],
  // ['who', 'what', 'where', 'when', 'why'],
  // ['who', 'whatPast', 'where', 'whenPast', 'why'],
  ['who', 'what', 'where'],
  ['who', 'whatPast', 'where'],
  ['who', 'what', 'when'],
  ['who', 'whatPast', 'whenPast'],
  ['who', 'what', 'where', 'when'],
  ['who', 'whatPast', 'where', 'when'],
  ['who', 'what', 'where'],
  ['who', 'what', 'why'],
  ['who', 'whatPast', 'why'],
  ['who', 'what', 'when'],
  ['who', 'whatPast', 'whenPast'],
  ['intro', 'who', 'what'],
  ['intro', 'who', 'whatPast'],
]

// console.log(choseVariantes(dict))

generateSentences({
  samples,
  dict,
  anki: false,
  lengthOutput: 40,
  n: 2,
  // similarity: true,
  showNewsTeach: true,
  phraseLength: 37,
})

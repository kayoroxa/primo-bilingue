const _ = require('lodash')

const dict = {
  intro: ['in my opinion', 'I have to admit'],
  who: [
    //
    'William',
    'ma mère',
    'mon avis',
    'la planète',
    'le restaurant',
  ],
  attribute: [
    'is important',
    'is completely different',
    'is different',
    'is perfect',
    'is my responsibility',
    'is completely important',
  ],
  what: ['is in the hospital', 'is studying', 'is', 'has experience'],
  whatPast: [
    //
    '',
  ],
  with: ['with Emily'],
  whenPast: [''],
  when: [''],
  where: ['in prison', 'at home'],
  why: [''],
}

function generate(dict) {
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
  const selected = _.sample(samples)

  return selected.map(wq => {
    return _.sample(dict[wq])
  })
}

let dictSmall = {}

for (key of Object.keys(dict)) {
  dictSmall[key] = _.sampleSize(dict[key], 3)
}

let frases = new Set()
let teach = new Set()
const meaningLess = require('../sentencesMeaningless.json')

while (frases.size < 60) {
  let newSentence = generate(dictSmall)
  newSentence.forEach(v => teach.add(v))

  if (!meaningLess.includes(newSentence)) {
    frases.add(newSentence)
  }
}

frases = [...frases]
  .map(v => {
    let newSentence = v.join(' ').trim().toLowerCase()
    if (newSentence.includes('por que')) newSentence = newSentence + '?'
    newSentence = newSentence.replace(',?', '?')
    return newSentence
  })
  .join('\n')

// const frases = Array(30)
//   .fill()
//   .map(() => generate(dictSmall))
//   .map(v => v.join(' '))
//   .join('\n')

console.log(frases)
console.log([...teach])

const _ = require('lodash')

const dict = {
  intro: [
    'por que',
    'eu não entendi o porquê que',
    'ninguém sabe o porquê que',
  ],
  who: [
    //
    'ele',
    'William e você',
    'Alice e Joyce',
    'elas',
    'todo mundo',
    'meu pai',
    'meu time',
    'minha família',
  ],
  what: [
    'vai pra festa',
    'vai comer bolo',
    'vai ficar feliz',
    'está perguntando se você vai',
    'vai comprar pizza',
  ],
  whatPast: [
    //
    'conseguiu terminar',
    'não deixou acontecer',
    'ficou doente',
    'estuda inglês',
    'começou a estudar',
  ],
  whenPast: [
    'desde o ano passado',
    'apenas a alguns meses',
    'ontem a noite',
    'faz tempo',
  ],
  when: [
    'as 2 da manhã',
    'amanhã',
    'quase todo dia',
    'quase toda hora',
    'agora mesmo',
    'agora',
    'daqui a pouco',
  ],
  where: [
    'perto de casa',
    'bem longe',
    'na casa dele',
    'no meu trabalho',
    'na praia',
    'no restaurante',
    'perto da praia',
  ],
  why: [
    'porque é necessário',
    'porque alguém quer',
    'já que ninguém fez isso',
    'por curiosidade',
    'para eu me sentir bem',
    'porque está barato',
    'porque só dar hoje',
    'para saber como resolver',
  ],
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
const meaningLess = require('./sentencesMeaningless.json')

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

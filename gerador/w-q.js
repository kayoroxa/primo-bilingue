const _ = require('lodash')
const { generateSentences } = require('./funcs')
require('typescript-require')

const { choseVariantes } = require('./choseVariantes.ts')

const dict = {
  intro: [
    'why',
    "I don't understand why",
    'nobody knows why',
    'I wonder if',
    "even if it's just a lie",
    "i don't care if",
  ],
  who: [
    //
    'he',
    'William and you',
    'Rose and Joyce',
    'they',
    'everyone',
    'my dad',
    'my cousin',
    'the guys',
    'the crowd',
    'my team',
    'my family',
    'everyone',
    'nobody',
    'someone',
  ],
  what: [
    'go to the party',
    'go eat cake',
    'will be happy',
    'is asking if you will',
    'go buy pizza',
    'wants to see you',
    'wants to talk to you',
    'can be here',
    'can see you now',
    'would like to know you',
  ],
  when: [
    'at 2 am',
    'tomorrow',
    'almost every day',
    'almost all the time',
    'right now',
    'now',
    'shortly',
    "it's been a while",
    'since always',
  ],
  whatPast: [
    //
    'managed to finish',
    "didn't let it happen",
    'got sick',
    'study English',
    'tried not to upset you',
    'just wanted to protect you',
  ],
  whenPast: [
    'since last year',
    'just a few months',
    'last night',
    "it's been a while",
  ],

  where: [
    'close to home',
    'far away',
    'at my house',
    'in my work',
    'on the beach',
    'at her house',
    'at the restaurant',
    'near the beach',
  ],
  why: [
    'because it is necessary',
    'because someone wants',
    'since no one did it',
    'for curiosity',
    'for me to feel good',
    "because it's cheap",
    'because it is only possible today',
    'to know how to solve',
    'if you want',
  ],
  with: ['with my son', 'with my family'],
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
})

const { generateSentences } = require('../funcs')

const dict = {
  intro: `
    why
    porque

    hello.
    oi
    
    I don't (understand|leaned|said) why
    Eu não (entendo | inclinou-se | disse) por que

    nobody knows why
    ninguém sabe porque

    I wonder if
    eu me pergunto se

    even if it's just a lie
    mesmo que seja apenas uma mentira

    i don't care if
    eu não me importo se

    good morning
    bom Dia
  `,
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
    'will buy a red car',
    'is asking if you will',
    'go buy pizza',
    'wants to see you',
    'wants to talk to you',
    'can be here',
    'can see you now',
    'would like to know you',
    'talk to me',
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
    'did not go',
    'did not study',
    'smiled',
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
    "because it's good",
    'to know how to solve',
    'if you want',
  ],
  // quantity: [
  //   'because it is necessary',
  //   'because someone wants',
  //   'since no one did it',
  //   'for curiosity',
  //   'for me to feel good',
  //   "because it's good",
  //   'to know how to solve',
  //   'if you want',
  // ],
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

generateSentences({
  dict,
  samples,
  lengthOutput: 40,
  n: 2,
  showNewsTeach: true,
  printWithVariable: true,
  // test: 'whatPast',
})

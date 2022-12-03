const { generateSentences } = require('../funcs')

const dict = {
  intro: [
    // 'why',
    // 'hello.',
    "I don't (understand|say) why",
    'nobody knows why',
    'I wonder if',
    // "even if it's just a lie",
    "i don't care if",
    // 'good morning',
  ],
  who: [
    //
    'he',
    'you and me',
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
    'likes party',
    'eats cake',
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
    // 'tomorrow',
    'almost every day',
    'almost all the time',
    'right now',
    'now',
    // 'shortly',
    // "it's been a while",
    // 'since always',
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
  qCodeWho: ['do (you|i|we)', 'does (he|she|Jack)'],
  qCodeWhoBE: ['is (he|she|Jack|my friend)', 'are (you|they|we)', 'am i'],
  WhoBE: ['(he|she|Jack|my friend) is', '(you|they|we) are', "i'm"],
  whatIng: [
    'playing football',
    'drinking coffee',
    'watching a movie',
    'listening to musics',
    'helping him',
    'cooking beef',
    'happy',
    'telling the police',
    'sad about everything',
    'exhausted',
  ],

  wh: ['why', 'what'],
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
  w: ['?'],
}

const samples = [
  // to be

  // ['qCodeWhoBE', 'whatIng', 'where', 'w'],
  // ['qCodeWhoBE', 'whatIng', 'when', 'w'],
  // ['qCodeWho', 'what', 'where', 'w'],
  // ['qCodeWho', 'what', 'when', 'w'],
  // ['WhoBE', 'whatIng', 'when'],
  // ['WhoBE', 'whatIng', 'where'],
  // ['who', 'what', 'when'],
  // ['who', 'what', 'where'],

  ['intro', 'WhoBE', 'whatIng', 'when'],
  ['intro', 'qCodeWho', 'what', 'where', 'w'],
  ['intro', 'qCodeWho', 'what', 'when', 'w'],
  ['intro', 'who', 'what', 'when'],
  ['intro', 'who', 'what', 'where'],

  // ['who', 'what', 'where'],
  // ['who', 'what', 'when'],
  // ['who', 'what', 'where', 'when'],
  // ['who', 'what', 'where'],
  // ['wh', 'what', 'where'],

  // ['who', 'what', 'when'],
  // ['intro', 'who', 'what'],
]

generateSentences({
  dict,
  samples,
  lengthOutput: 10,
  n: 5,
  // showNewsTeach: true,
  printWithVariable: true,
})

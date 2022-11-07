const { generateSentences } = require('./funcs')

const dict = {
  intro: [
    'in my opinion',
    'I have to admit',
    //
    'But honestly',
    'no matter why',
  ],
  who: [
    'William',
    'my mother',
    // 'my opinion',
    'the planet',
    'the restaurant',
    'the ocean',
    'the message',
    //
    'those people',
    'the dentist',
  ],
  attribute: [
    'is important',
    'is completely different',
    'is different',
    'is perfect',
    'is my responsibility',
    'is completely important',
    'is violent',
    'is strange',
    'is a suspect in the crime',
  ],
  preWhere: ['is'],
  what: [
    'is studying',
    'is studying with Emily',
    'has experience',
    'is disappointed in Emily',
    'is ignoring Jessica',
    //
    "think it's optional",
    'go with me',
    'thinks positively',
  ],
  whatPast: [
    //
    '',
  ],
  whenPast: [''],
  when: [''],
  where: [
    'in prison',
    'at home',
    'in the hospital',
    //
    'anywhere',
    'no matter where',
    'wherever you are',
  ],
  why: [
    //p2
    'when I arrived',
    "because it's necessary",
    "because it's important",
  ],
}

const samples = [
  ['who', 'what', 'where'],
  ['who', 'what', 'why'],
  ['who', 'preWhere', 'where'],
  ['intro', 'who', 'what'],
  ['who', 'attribute'],
  ['intro', 'who', 'attribute'],
]

const teach = `
is
are
I have to admit
those people
is violent
the message
has experience
because it's necessary
in the hospital
is strange
the restaurant
is disappointed in Emily
because it's important
anywhere
But honestly
is my responsibility
is completely important
my mother
at home
is ignoring Jessica
in my opinion
wherever you are
thinks positively
`
  .split('\n')
  .filter(Boolean)

generateSentences({ dict, samples })
/*
my mother is disappointed because those people is violent, but honestly those people is ignoring the law, and in my opinion wherever you are, you can't ignore the law

my mother is in the restaurant but honestly the restaurant is strange, i don't know why but the restaurant has a bad experience, and those people is disappointed, but they have to thinks positively because it's necessary

*/

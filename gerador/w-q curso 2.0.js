const { generateSentences } = require('./funcs')

const dict = {
  intro: [
    'in my opinion',
    'I have to admit',
    //
    'But honestly',
    // #4
    'honestly',

    // //5
    "I can't explain why but",
  ],
  who: [
    'you',
    'William',
    'my mother',
    // 'my opinion',
    'the planet',

    // 'the ocean',
    // 'the message',
    //
    'those people',
    'the dentist',
    // #4
    'nobody',
    'everybody',
  ],
  attribute: [
    'is important',
    'is completely different',
    'is different',
    'is perfect',
    'is my responsibility',
    'is completely important',
    'is violent',
    'is the suspect in the crime',
    // #4
    'has difficulty',
  ],
  preWhere: ['is'],
  what: [
    'is studying',
    'is studying with Emily',
    'has experience',
    'is disappointed with Emily',
    'is ignoring Jessica',
    'like to (read|study english)',
    //
    "think it's optional",
    'go with me',
    'thinks positively',
    // #4
    'is waiting for me',
    'need you stay',
  ],
  mainSentence: [
    "(i|we|you don't|just|do i) have to (go|do|tell)",
    '(i|you) know what (are you doing|happened|is that)',
    '(i|you|he) used to (go|work|run)',
    "(i|you|he) didn't (know|want|see)",
    "it's very common for (people|him) to (have to do this|do this)",
    'did you (see that|hear that|do)',
    '(he|i|she) (wants|need) you to (ask|talk|find)',
  ],
  whatPast: [
    //4
    'went to the restaurant',
    "didn't let me leave",
    'left home',
    'had to go to school',
    'was scared of the dog',
  ],
  whenPast: [''],
  when: ['for a while', 'been a while', 'take a while'],
  where: [
    'in prison',
    'at home',
    'in the hospital',
    //
    'anywhere',
    'no matter where',
    'wherever you are',
    // #4
    'here',
  ],
  why: [
    //p2
    'when I arrived',
    "because it's necessary",
    "because it's important",
    // #4
    'because of you',
    'because i know',
  ],
}

// console.log(
//   []
//     .concat(...Object.values(dict))
//     .filter(Boolean)
//     .join('\n')
// )

const samples = [
  ['who', 'what', 'where'],
  ['who', 'what', 'why'],
  ['who', 'preWhere', 'where'],
  ['intro', 'who', 'what'],
  ['who', 'attribute'],
  ['intro', 'who', 'attribute'],
]

// // const teach = ``.split('\n').filter(Boolean)

generateSentences({
  dict,
  samples,
  lengthOutput: 40,
  n: 2,
  showNewsTeach: true,
})
/*
my mother is disappointed because those people is violent, but honestly those people is ignoring the law, and in my opinion wherever you are, you can't ignore the law

my mother is in the restaurant but honestly the restaurant is strange, i don't know why but the restaurant has a bad experience, and those people is disappointed, but they have to thinks positively because it's necessary

*/

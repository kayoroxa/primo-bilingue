const _ = require('lodash')

function generate(dict, samples, forceTeach) {
  const selected = _.sample(samples)

  if (forceTeach) {
    return selected.map(wq => {
      return _.sample(dict[wq].filter(v => forceTeach.includes(v)))
    })
  }

  return selected.map(wq => {
    return _.sample(dict[wq])
  })
}

function sampleSizeWithProbability(array, size = 2, weight, forceTeach) {
  if (forceTeach) {
    return array.filter(v => forceTeach.includes(v))
  }

  if (!weight) weight = array.map((_, i) => i + 1)

  let sizeResult = []

  for (let c = 0; c <= Math.min(size, array.length); c++) {
    let randomArray = []
    array.forEach((item, index) => {
      var clone = Array(weight[index]).fill(item)
      randomArray.push(...clone)
    })

    const result = randomArray[~~(Math.random() * randomArray.length)]

    sizeResult.push(result)

    array.splice(array.indexOf(result), 1)
  }

  return sizeResult
}

// sampleSizeWithProbability(['cadeira', 'mesa', 'banho'])

function generateSentences({
  dict,
  samples,
  meaningLess = [],
  replaced = [],
  forceTeach,
}) {
  let dictSmall = {}

  for (key of Object.keys(dict)) {
    dictSmall[key] = sampleSizeWithProbability(dict[key], 3, null, forceTeach)
  }

  let frases = new Set()
  let teach = new Set()

  while (frases.size < 60) {
    let newSentence = generate(dictSmall, samples)
    newSentence.forEach(v => teach.add(v))
    newSentence = newSentence.join(' ')

    if (!meaningLess.includes(newSentence)) {
      frases.add(newSentence)
    }
  }

  frases = [...frases]
    .map(v => {
      let newSentence = v.trim().toLowerCase()
      if (newSentence.includes('por que')) newSentence = newSentence + '?'
      newSentence = newSentence.replace(',?', '?')
      return newSentence
    })
    .join('\n')

  console.log(frases)
  console.log('\n')
  console.log([...teach].join('\n'))

  return
}

function replaceFix(sentence) {
  const replaceDict = [
    //
    ['those people is', 'those people are'],
  ]

  // for (let replace of replaceDict) {
  //   sentence = sentence.replace(new RegExp(replace[0], 'gi'), replace[1])
  // }

  return sentence
}

module.exports = { generateSentences, replaceFix }

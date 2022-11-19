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

  if (weight) {
    weight = array.map((_, i) => i + 1)
  } else {
    weight = array?.map(() => 1)
  }

  let sizeResult = []

  for (let c = 0; c <= Math.min(size, array?.length); c++) {
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
  n = 3,
  lengthOutput = 60,
  fraseLength = 39,
  anki = true,
  similarity = false,
  showNewsTeach = false,
}) {
  let dictSmall = {}

  for (key of Object.keys(dict)) {
    dictSmall[key] = sampleSizeWithProbability(dict[key], n, anki, forceTeach)
  }

  let allTeach = [].concat(...Object.values(dictSmall))

  let frases = new Set()
  let teach = new Set()

  let trying = 0
  while (frases.size < lengthOutput && trying <= 400) {
    trying++
    let newSentence = generate(dictSmall, samples)
    newSentence.forEach(v => teach.add(v))
    newSentence = newSentence.join(' ')

    if (
      !meaningLess.includes(newSentence) &&
      newSentence.length <= fraseLength
    ) {
      frases.add(newSentence)
    }
  }

  frases = [...frases].map(v => {
    let newSentence = v.trim().toLowerCase()
    if (newSentence.includes('por que')) newSentence = newSentence + '?'
    newSentence = newSentence.replace(',?', '?')
    return newSentence
  })

  if (similarity) {
    const stringSimilarity = require('string-similarity')
    const oldFrases = frases
    const frasesOrderBySimilarity = []

    while (frasesOrderBySimilarity.length < oldFrases.length) {
      if (frasesOrderBySimilarity.length === 0) {
        frasesOrderBySimilarity.push(oldFrases[0])
      } else {
        frasesOrderBySimilarity.push(
          oldFrases[frasesOrderBySimilarity.length - 1]
        )
      }

      const lastOldFrase = oldFrases[oldFrases.length - 1]

      try {
        frasesOrderBySimilarity.push(
          stringSimilarity.findBestMatch(
            lastOldFrase,
            oldFrases.filter(o => !frasesOrderBySimilarity.includes(o))
          ).bestMatch.target
        )
      } catch (error) {
        console.log('erro')
      }
    }

    frases = frasesOrderBySimilarity
  }

  if (showNewsTeach) {
    let sentencesWithNewsTeach = frases.reduce((acc, cur) => {
      const newTeach = _.shuffle(
        allTeach?.filter(t => !acc.join(' ').includes(t) && cur.includes(t))
      ).map(v => '' + v)

      if (newTeach) return [...acc, ...newTeach, cur]
      else return [...acc]
    }, [])

    frases = sentencesWithNewsTeach
  }

  frases = frases.join('\n')

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

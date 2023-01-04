const _ = require('lodash')
const { alternativeChoose } = require('./alternativesChoose.Js')

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
  // replaced = [],
  forceTeach,
  n = 3,
  lengthOutput = 60,
  fraseLength = 39,
  anki = true,
  similarity = false,
  showNewsTeach = false,
  printWithVariable = false,
}) {
  dict = alternativeChoose(dict) //remove (x|y|z)

  // SELECT ON CATEGORY THE X OPTIONS
  let dictSmall = {}

  for (let key of Object.keys(dict)) {
    dictSmall[key] = sampleSizeWithProbability(dict[key], n, anki, forceTeach)
  }

  // SET THINGS
  let allTeach = [].concat(...Object.values(dictSmall))

  let frasesStr = new Set()
  let teach = new Set()

  let trying = 0

  //FIND ALL X SENTENCES
  while (frasesStr.size < lengthOutput && trying <= 400) {
    trying++
    let newSentence = generate(dictSmall, samples)
    newSentence.forEach(v => teach.add(v))
    newSentence = newSentence.join(' ')

    if (
      !meaningLess.includes(newSentence) &&
      newSentence.length <= fraseLength
    ) {
      frasesStr.add(newSentence)
    }
  }

  // SANITIZE AND CORE REPLACES
  frasesStr = [...frasesStr].map(v => {
    let newSentence = v.trim().toLowerCase()
    if (newSentence.includes('porque')) newSentence = newSentence + '?'
    if (newSentence.includes('and why')) newSentence = newSentence + '?'
    if (newSentence.includes('did you know')) newSentence = newSentence + '?'
    newSentence = newSentence.replace(',?', '?')
    return newSentence
  })

  //SHOW NEWS TEACH IN SCRIPT
  if (showNewsTeach) {
    let sentencesWithNewsTeach = frasesStr.reduce((acc, cur) => {
      const newTeach = _.shuffle(
        allTeach?.filter(t => !acc.join(' ').includes(t) && cur.includes(t))
      ).map(v => '' + v)

      if (newTeach) return [...acc, ...newTeach, cur]
      else return [...acc]
    }, [])

    frasesStr = sentencesWithNewsTeach
  }

  // CONSOLE SENTENCES AND TEACH
  frasesStr = frasesStr.join('\n')

  if (printWithVariable) console.log('export const rawScript = `')
  console.log(frasesStr)
  if (printWithVariable) console.log('`')
  console.log('\n')
  if (printWithVariable) console.log('export const teach = `')

  const teachFiltered = [...teach].filter(t =>
    frasesStr.toLowerCase().includes(t?.toLowerCase())
  )

  console.log(teachFiltered.join('\n'))

  if (printWithVariable) console.log('`')

  return
}

function replaceFix(sentence) {
  // const replaceDict = [
  //   //
  //   ['those people is', 'those people are'],
  // ]

  // for (let replace of replaceDict) {
  //   sentence = sentence.replace(new RegExp(replace[0], 'gi'), replace[1])
  // }

  return sentence
}

module.exports = { generateSentences, replaceFix }

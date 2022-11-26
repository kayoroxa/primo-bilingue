import { generate, sampleSizeWithProbability } from '../funcs'

function core({
  dict,
  n,
  anki,
  forceTeach,
  lengthOutput,
  samples,
  meaningLess,
  fraseLength,
}) {
  let allTeach = []
  let frasesStr = new Set()
  let teach = new Set()
  let trying = 0
  let dictSmall = {}

  function selectOptionsOnCategory() {
    for (let key of Object.keys(dict)) {
      dictSmall[key] = sampleSizeWithProbability(dict[key], n, anki, forceTeach)
    }

    allTeach = [].concat(...Object.values(dictSmall))
  }

  function findAllSentencesPossible() {
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
  }

  function putNewsTeachOnSCript() {
    let sentencesWithNewsTeach = frasesStr.reduce((acc, cur) => {
      const newTeach = _.shuffle(
        allTeach?.filter(t => !acc.join(' ').includes(t) && cur.includes(t))
      ).map(v => '' + v)

      if (newTeach) return [...acc, ...newTeach, cur]
      else return [...acc]
    }, [])

    frasesStr = sentencesWithNewsTeach
  }

  function sanitizeSentences() {
    frasesStr = [...frasesStr].map(v => {
      let newSentence = v.trim().toLowerCase()
      if (newSentence.includes('por que')) newSentence = newSentence + '?'
      if (newSentence.includes('e como')) newSentence = newSentence + '?'
      newSentence = newSentence.replace(',?', '?')
      return newSentence
    })
  }
  function consoleAll({ printWithVariable }) {
    frasesStr = frasesStr.join('\n')

    if (printWithVariable) console.log('export const rawScript = `')
    console.log(frasesStr)
    if (printWithVariable) console.log('`')
    console.log('\n')
    if (printWithVariable) console.log('export const teach = `')

    const teachFiltered = [...teach].filter(t =>
      frasesStr.toLowerCase().includes(t.toLowerCase())
    )

    console.log(teachFiltered.join('\n'))

    if (printWithVariable) console.log('`')
  }

  return {
    selectOptionsOnCategory,
    findAllSentencesPossible,
    sanitizeSentences,
    putNewsTeachOnSCript,
    consoleAll,
  }
}

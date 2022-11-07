function putVocabularyInHtml(vocabulary) {
  const vocabularyElem = document.querySelector('#vocabulary')
  const part1 = vocabulary.slice(0, vocabulary.length / 2)

  const part2 = vocabulary.slice(vocabulary.length / 2)

  const html = `
    <section>${part1
      .map(v => `<div class="elem">${v}</div>`)
      .join('')}</section>
    <section>${part2
      .map(v => `<div class="elem">${v}</div>`)
      .join('')}</section>
  `

  vocabularyElem.innerHTML = html
}

export default function Vocabulary(vocabulary) {
  vocabulary = vocabulary.filter(Boolean)

  return {
    show: () => {
      putVocabularyInHtml(vocabulary)
      document.querySelector('#vocabulary').classList.remove('hide')
    },
    hide: () => {
      document.querySelector('#vocabulary').innerHTML = ''
      document.querySelector('#vocabulary').classList.add('hide')
    },
  }
}

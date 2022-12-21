import { _script } from './script.js'

function SentenceApp(script) {
  const app = document.querySelector('#app')
  const ptElem = app?.querySelector('#pt')
  const enElem = app?.querySelector('#en')
  const sectionSentenceElem = app?.querySelector('section.sentences')
  const backgroundElem = app?.querySelector('#img')
  let indexSentence = localStorage.getItem('index') || 0
  let isShowing = false
  sanitizar()

  function sanitizar() {
    script = script.map(([en, pt]) => [
      en.replace('|', '<br />'),
      pt.replace('|', '<br />'),
    ])
  }

  function showCurrentSentence() {
    if (ptElem && enElem) {
      const currentSentence = script[indexSentence]
      enElem.innerHTML = currentSentence[0]
      ptElem.innerHTML = currentSentence[1]
      isShowing = true
    }
  }

  function hide() {
    sectionSentenceElem.style.opacity = 0
    isShowing = false
  }
  function show() {
    sectionSentenceElem.style.opacity = 1
    isShowing = true
  }

  function toggleShow() {
    // if (isShowing) hide()
    show()
  }

  function nextSentence() {
    hide()
    if (indexSentence >= script.length - 1) return
    indexSentence++
    localStorage.setItem('index', indexSentence)
    showCurrentSentence()
  }

  function prevSentence() {
    show()
    if (indexSentence <= 0) return
    indexSentence--
    localStorage.setItem('index', indexSentence)
    showCurrentSentence()
  }

  function setBackground(src) {
    if (backgroundElem) {
      backgroundElem.src = src
    }
  }

  return {
    showCurrentSentence,
    nextSentence,
    prevSentence,
    setBackground,
    hide,
    show,
    toggleShow,
  }
}

const script = _script
  .split('\n\n')
  .filter(Boolean)
  .map(v => v.split('\n').filter(Boolean))

// [
//   ['hello', 'oi'],
//   ['how are you?', 'tudo bom?'],
//   [
//     'why do you talk to him |at his house?',
//     'por que você fala com ele |na casa dele?',
//   ],
// ]

const sentenceApp = SentenceApp(script)
sentenceApp.showCurrentSentence()

document.addEventListener('keydown', e => {
  console.log(e.key)
  if (e.key.toLowerCase() === 'a') {
    sentenceApp.prevSentence()
  }
  if (e.key.toLowerCase() === 'd') {
    sentenceApp.nextSentence()
    sentenceApp.toggleShow()
  }
  if (e.key === 'Escape') {
    sentenceApp.toggleShow()
  }
})

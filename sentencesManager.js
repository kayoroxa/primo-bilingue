/* eslint-disable */
console.log('oi')

import Vocabulary from './js/showVocabulary.js'

const percentAnswerShow = 0.4

function scriptReplace(teach) {
  teach = teach
    .replace(/J[eé]ssica/gi, 'Jessica')
    .split(/\n/g)
    .filter(Boolean)
    .map(v =>
      v
        .trim()
        .replace(/([^|()\?]+(?=[^(]*\)\?))/g, '$1 ')
        .replace(/\s*(\(.*?\)\?)\s*/g, '$1')
    )

  const scriptReplaced = teach
    .reduce((acc, cur) => {
      const noWAndKeyBehind = `(?<=[^á-úa-z{]|^)`
      const noWAndKeyAfter = `(?=[^á-úa-z}]|$)`

      // const reg = new RegExp(`${noWBehind}(${cur})${noWAfter}(?![^{]*})`, 'gi')
      const reg = new RegExp(
        `${noWAndKeyBehind}(${cur})${noWAndKeyAfter}`,
        'gi'
      )

      // debugger
      return acc.replace(reg, `{$1}`)
    }, rawScript)
    .replace(/\?/g, '{?}')
    .replace(/\{([^}]*?)(?=\s?\{)/g, '{$1}')
    .replace(/\}{2,}/g, '}')
  return scriptReplaced
}

const scriptReplaced = rawScript.includes('{')
  ? rawScript
  : scriptReplace(teach)

console.log(scriptReplaced)

const script = scriptReplaced
  .trim()
  .split(/\n\n+/g)
  .filter(v => v.length > 0)
  // .reverse()
  .map(v => ({ pt: v.split('\n')[0].trim(), en: v.split('\n')[1].trim() }))

console.log('quantidade: ', script.length)

const template = (en, pt) => {
  if (en === pt) {
    return `
      <div class="column">
        <div class="block resolved fixed">${pt}</div>
      </div>
    `
  }
  const str = `
    <div class="column">
      <div class="block ${pt === '?' ? 'fixed' : ''}">${pt}</div>
      <div class="block ${en === '?' ? 'fixed' : 'hidden'} stroke">${en}</div>
    </div>
  `
  return str //new DOMParser().parseFromString(str, 'text/xml')
}
const template2 = (word, show) =>
  `<div class="block"><span class="${
    show ? '' : 'hidden'
  }">${word}</span></div>`

// [["Tudo bem", "all right"], ["hora", "time"]]

function split(v) {
  return v
    .split(/(\{|\})/g)
    .filter(v => v !== ' ' && v.length > 0 && v !== '{' && v !== '}')
}

function Store() {
  return {
    saveIndex: index => {
      localStorage.setItem('index', index)
    },
    getIndex: () => parseInt(localStorage.getItem('index') || 0),
  }
}

const storage = Store()

function putInHtml(indexScript) {
  storage.saveIndex(indexScript)
  if (!script[indexScript]?.en) return
  const enSplitted = split(script[indexScript].en)

  const ptSplitted = split(script[indexScript].pt)

  const splitted = enSplitted.map((_, index) => [
    enSplitted[index],
    ptSplitted[index],
  ])

  const withoutPunctuation = enSplitted.filter(en => en !== '?')
  // const withPunctuation = enSplitted.find(en => en === '?')
  const strHtmls = splitted.map(([en, pt]) => template(en, pt))

  let randomIndex = _.shuffle(
    Array(withoutPunctuation.length)
      .fill()
      .map((_, i) => i)
  ).slice(0, withoutPunctuation.length * percentAnswerShow)

  const strHtmlWaiting = _.shuffle(
    withoutPunctuation
      .filter(answer => {
        return !splitted.some(([_, question]) => question === answer)
      })
      .map((pt, i) => template2(pt, randomIndex.includes(i)))
  )

  // if (withPunctuation) strHtmlWaiting.push(template2(withPunctuation))

  const blocksElem = document.querySelector('.blocks')
  for (let strHtml of strHtmls) {
    blocksElem.insertAdjacentHTML('beforeend', strHtml)
  }

  const waitingElem = document.querySelector('.waiting')
  for (let strtHtmlWaiting of strHtmlWaiting) {
    waitingElem.insertAdjacentHTML('beforeend', strtHtmlWaiting)
  }
  anime.set(document.querySelectorAll('.block'), { scale: 0 })

  anime({
    targets: document.querySelectorAll('.block'),
    scale: 1,
    duration: 500,
  })
}

function handleOnClickInSentence(index, indexScript) {
  debugger
  function find(query) {
    return Array.from(document.querySelectorAll(query)).find(
      el =>
        el.textContent.toLocaleLowerCase().trim() ===
        split(script[indexScript].en)[index].toLocaleLowerCase().trim()
    )
  }
  const element0 = find('.blocks .block:not(.fixed, .resolved)')
  const answerElement = find('.waiting .block:not(.fixed, .resolved)')

  const elements = [element0, answerElement]
  if (!elements[0] || !elements[1]) return

  const prevWidth = elements[0].getBoundingClientRect().width

  elements[0].classList.remove('hidden')

  anime.set(elements[0], {
    translateX:
      elements[1].getBoundingClientRect().left -
      elements[0].getBoundingClientRect().left,
    translateY:
      elements[1].getBoundingClientRect().top -
      elements[0].getBoundingClientRect().top,
    width: elements[1].getBoundingClientRect().width,
  })

  elements[1].classList.add('resolved')
  elements[0].classList.add('resolved')
  anime.set(elements[1], { opacity: 0 })

  anime({
    targets: elements[0],
    translateX: 0,
    translateY: 0,
    width: prevWidth,
    easing: 'easeOutQuart',
    duration: 950,
  })

  index++
}

function deletarTudo() {
  document.querySelector('.blocks').innerHTML = ''
  document.querySelector('.waiting').innerHTML = ''
}

function Scene() {
  let indexBlock = 0
  let sceneIndex = storage.getIndex() || -1
  let isStarted = true

  const { show: showVocabulary, hide: hideVocabulary } = Vocabulary(
    teach.replace(/\,/g, '').split('\n')
  )

  if (sceneIndex === -1) {
    showVocabulary()
  } else {
    putInHtml(sceneIndex)
  }

  const tl = anime.timeline({ easing: 'linear', autoplay: false })

  function resetLoading() {
    anime.set('.loading', { width: '0%' })
    anime.set('.load', { opacity: 0 })
  }

  function create() {
    tl.add({
      targets: '.load',
      opacity: 1,
      duration: 200,
    })
      .add(
        {
          targets: '.loading',
          width: ['0%', '100%'],
          delay: 30,
          duration: 3000,
        },
        0
      )
      .add({
        targets: '.load',
        opacity: 0,
        duration: 200,
      })

    // createTimeLine = true
  }

  create()

  function loadingTo100() {
    tl.restart()
    tl.play()
  }

  function getIndex() {
    document.querySelector('.index').textContent = `${sceneIndex + 1}/${
      script.length
    }`
  }

  getIndex()

  return {
    get isStarted() {
      return isStarted
    },
    nextBlock: () => {
      if (indexBlock > split(script[sceneIndex].en).length - 1) return
      handleOnClickInSentence(indexBlock, sceneIndex)
      indexBlock++
    },
    nextScene: () => {
      if (sceneIndex >= script.length - 1) return
      hideVocabulary()
      resetLoading()
      indexBlock = 0
      deletarTudo()
      sceneIndex++
      putInHtml(sceneIndex)
      getIndex()
    },
    prevScene: () => {
      if (sceneIndex === 0) {
        sceneIndex--
        deletarTudo()
        resetLoading()
        showVocabulary()
        getIndex()
      } else if (sceneIndex > 0) {
        hideVocabulary()
        resetLoading()
        indexBlock = 0
        deletarTudo()
        sceneIndex--
        putInHtml(sceneIndex)
        getIndex()
      }
    },
    start: () => {
      // tl.restart()
      // tl.pause()
      sceneIndex = 0
      putInHtml(indexBlock)
    },
    loadingTo100,
  }
}

const myScene = Scene()

document.addEventListener('keydown', event => {
  if (!myScene.isStarted) {
    myScene.start()
  }
  if (event.key.toLowerCase() === 'enter' || event.key === ' ') {
    myScene.nextBlock()
  }
  if (event.key === 'ArrowRight' || event.key.toLocaleLowerCase() === 'd') {
    myScene.nextScene()
  }
  if (event.key === 'ArrowLeft' || event.key.toLocaleLowerCase() === 'a') {
    myScene.prevScene()
  }
  if (event.key.toLocaleLowerCase() === 'w') {
    myScene.loadingTo100()
  }
})

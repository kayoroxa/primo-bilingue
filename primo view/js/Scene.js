/* eslint-disable no-undef */
import Vocabulary from './showVocabulary.js'
import { storage } from './store.js'
import { split } from './utils.js'

function handleOnClickInSentence(index, indexScript, script) {
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

export function Scene({ anime, teach, script, putInHtml }) {
  let indexBlock = 0
  let sceneIndex = storage.getIndex() || -1
  let isStarted = true

  const { show: showVocabulary, hide: hideVocabulary } = Vocabulary(
    teach.replace(/,/g, '').split('\n')
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
          duration: 5000,
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
      handleOnClickInSentence(indexBlock, sceneIndex, script)
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

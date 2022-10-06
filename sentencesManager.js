/* eslint-disable */

const rawScript = `
i want to go
eu quero ir

she wants to go
ela quer ir

to the apartment
para o apartamento

i want to go to the apartment
eu quero ir para o apartamento

i want to go to the restaurant
eu quero ir ao restaurante



do you want to go?
você quer ir?

do you want to go to the restaurant?
você quer ir ao restaurante?

she wants to go to the apartment
ela quer ir para o apartamento

i want to go home
eu quero ir para casa

she wants to go home
ela quer ir para casa

she wants to go home with me
ela quer ir para casa comigo

she doesn't want to go
ela não quer ir 

she doesn't want to go to the supermarket
ela não quer ir ao supermercado

she doesn't want to go to the restaurant with me
ela não quer ir ao restaurante comigo

she doesn't want to go home with me
ela não quer ir para casa comigo

William would like
William gostaria de

William would like to go to the supermarket
William gostaria de ir ao supermercado

too
também

Jessica would like to go too
Jessica gostaria de ir também

William would like to go to the market too
William gostaria de ir para o mercado também 

Jessica would like to go to the market with me too
Jessica gostaria de ir para o mercado comigo também

but
mas


William would like to go but she doesn't
William gostaria de ir mas ela não

she doesn't want but William want
ela não quer mas William quer

William would like to go to the restaurant but she doesn't want to go
William gostaria de ir para restaurante mas ela não quer ir



I have to
eu tenho que 

call my mom
chamar minha mãe

I have to call my mom
eu tenho que chamar minha mãe

i have to call my mom to go home
eu tenho que chamar minha mãe para ir pra casa

Jessica would like to go so i have to call
Jessica gostaria de ir então eu tenho que chamar

she doesn't want to go
ela não quer ir

she doesn't want to go but i have to call
ela não quer ir mas eu tenho que chamar

she doesn't want to go but i have to go to the restaurant
ela não quer ir mas eu tenho que ir para o restaurante

i want to go but she doesn't want to go
eu quero ir mas ela não quer ir

i want to go
eu quero ir

i want to go but my mom doesn't want to go
eu quero ir mas minha mãe não quer ir

i want to call my mom
eu quero chamar minha mãe

i want to call my mom to go with me
eu quero chamar minha mãe para ir comigo



she wants to go home with my mom
ela quer ir para casa with my mom

i have to call William to go to the restaurant
eu tenho que chamar William para ir ao restaurante

my mom doesn't want to go to the supermarket with William
minha mãe não quer ir ao supermercado com William

do you want to go to the restaurant with William?
você quer ir ao restaurante com William?

do you want to go home too?
você quer ir pra casa também?

she wants to go with you but you don't want to go
ela quer ir com você mas você não quer ir

Jessica has to
Jessica tem que

William has to
William tem que

Jessica has to call William
Jessica tem que chamar William

Jessica tem que ligar pra minha mãe para ir ao super mercado
Jessica has to call my mom to go to the supermarket

do you want to go to the restaurant with Jessica?
você quer ir ao restaurante com Jéssica?

Jessica wants to go but you need to call my mom
Jéssica quer ir mas você precisa chamar minha mãe

she wants to call me but i don't want to go
ela quer me chamar mas eu não quero ir

`

const teach = `
with me
comigo
so
então
to go home
(para|pra)? ir (para|pra) casa
(she|you|i|William|Jessica) (does|do)n't want
(do|does)? (she|i|you|William|Jessica) wants?
(ela|eu|você|Jessica) (não)? quero?
(she|i|you|William|Jessica) (have|has) to
(ela|eu|você|William|Jessica) (não)? (tem|tenho) que
(she|i|you|Jessica|William) would like
(ela|eu|você|Jessica|William) (não)? gostaria de
with
com
perfume
(to)? go
(para)? ir
também
too
mas
but
also
`
  .replace(/J[eé]ssica/gi, 'Jessica')
  .split(/\n/g)
  .filter(Boolean)
  .map(v =>
    v
      .trim()
      .replace(/([^|()\?]+(?=[^(]*\)\?))/g, '$1 ')
      .replace(/(\(.*?\)\?)\s/g, '$1')
  )

// .sort((a, b) => b.length - a.length)

const scriptReplaced = teach
  .reduce((acc, cur) => {
    const reg = new RegExp(`(${cur})(?![^{]*})`, 'gi')
    // debugger
    return acc.replace(reg, `{$1}`)
  }, rawScript)
  .replace(/\?/g, '{?}')

console.log(scriptReplaced)

const script = scriptReplaced
  .trim()
  .split(/\n\n+/g)
  .filter(v => v.length > 0)
  // .reverse()
  .map(v => ({ pt: v.split('\n')[0].trim(), en: v.split('\n')[1].trim() }))

console.log('quantidade: ', script.length)

const template = (en, pt) => {
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

function putInHtml(indexScript) {
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
  ).slice(0, withoutPunctuation.length * 0.5)

  const strHtmlWaiting = _.shuffle(
    withoutPunctuation.map((pt, i) => template2(pt, randomIndex.includes(i)))
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
  function find(query) {
    return Array.from(document.querySelectorAll(query)).find(
      el =>
        el.textContent.toLocaleLowerCase().trim() ===
        split(script[indexScript].en)[index].toLocaleLowerCase().trim()
    )
  }
  const element0 = find('.blocks .block:not(.fixed, .resolved)')
  const element1 = find('.waiting .block:not(.fixed, .resolved)')

  const elements = [element0, element1]
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

function showScene() {}

function Scene() {
  let indexBlock = 0
  let sceneIndex = 0
  let isStarted = true

  putInHtml(sceneIndex)
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

    createTimeLine = true
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
      resetLoading()
      indexBlock = 0
      deletarTudo()
      sceneIndex++
      putInHtml(sceneIndex)
      getIndex()
    },
    prevScene: () => {
      if (sceneIndex <= 0) return
      resetLoading()
      indexBlock = 0
      deletarTudo()
      sceneIndex--
      putInHtml(sceneIndex)
      getIndex()
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

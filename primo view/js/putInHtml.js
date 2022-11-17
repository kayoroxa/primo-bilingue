import { storage } from './store.js'
import { split, template, template2 } from './utils.js'

export const PutInHtml =
  (percentAnswerShow, script, anime, _) => indexScript => {
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
          // eslint-disable-next-line no-unused-vars
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

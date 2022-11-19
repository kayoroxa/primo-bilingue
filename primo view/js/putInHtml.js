import { config } from './config.js'
import { storage } from './store.js'
import { split, template, template2 } from './utils.js'

const { alternateLanguagePercent } = config

export const PutInHtml =
  (percentAnswerShow, script, anime, _) => indexScript => {
    storage.saveIndex(indexScript)
    if (!script[indexScript]?.en) return

    const change = Math.random() <= alternateLanguagePercent

    const answerSplitted = split(
      change ? script[indexScript].pt : script[indexScript].en
    )

    const questionSplitted = split(
      change ? script[indexScript].en : script[indexScript].pt
    )

    if (change) {
      document.querySelector('.question-sentence')?.classList.add('red')
    } else {
      document.querySelector('.question-sentence')?.classList.remove('red')
    }

    const splitted = answerSplitted?.map((_, index) => [
      answerSplitted[index],
      questionSplitted[index],
    ])

    const withoutPunctuation = answerSplitted.filter(en => en !== '?')
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
    footerSentencePut({
      question: questionSplitted.join(' '),
      answer: answerSplitted.join(' '),
    })
  }

function footerSentencePut({ question, answer }) {
  document.querySelector('footer .answer-sentence').innerText = answer

  document.querySelector('footer .question-sentence').innerText = question
}

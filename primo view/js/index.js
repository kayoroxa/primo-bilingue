/* eslint-disable */

import audioPlay from './audioPlayer.js'
import { config, _myScript } from './config.js'
import { PutInHtml } from './putInHtml.js'
import { Scene } from './Scene.js'
import { scriptReplace } from './utils.js'
const { percentAnswerShow } = config

const { rawScript, teach } = _myScript

const scriptReplaced = rawScript.includes('{')
  ? rawScript
  : scriptReplace(teach, rawScript)

console.log(scriptReplaced)

export const script = scriptReplaced
  .trim()
  .split(/\n\n+/g)
  .filter(v => v.length > 0)
  // .reverse()
  .map(v => ({ pt: v.split('\n')[0].trim(), en: v.split('\n')[1].trim() }))

console.log('quantidade: ', script.length)

const putInHtml = PutInHtml(percentAnswerShow, script, anime, _)

// [["Tudo bem", "all right"], ["hora", "time"]]

const myScene = Scene({ anime, teach, script, putInHtml })

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
  if (event.key.toLocaleLowerCase() === 'shift') {
    audioPlay()
  }
  if (event.key.toLocaleLowerCase() === 'escape') {
    myScene.toggleView()
  }
  if (event.key.toLocaleLowerCase() === '0') {
    myScene.nextScene()
    myScene.toggleView()
  }
})

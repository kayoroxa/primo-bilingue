import { _replace } from '../../gerador/replaces/primoReplace.js'
// import { _replace } from '../../gerador/replaces/courseReplace.js'
import { rawScript, teach } from '../../script/primo/recording.js'

export const config = {
  alternateLanguagePercent: 0,
  percentAnswerShow: 1,
  // isDebugging: true,
}

export const myReplace = _replace
export const _myScript = { rawScript, teach }

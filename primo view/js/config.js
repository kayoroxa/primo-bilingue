import { _replace } from '../../gerador/primoReplace.js'
// import { _replace } from '../../gerador/courseReplace.js'
import { rawScript, teach } from '../../script/primo/writing'
// import { rawScript, teach } from '../../script/primo/recording'

export const config = {
  alternateLanguagePercent: 0,
  percentAnswerShow: 1,
}

export const myReplace = _replace
export const _myScript = { rawScript, teach }

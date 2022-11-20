// import { _replace } from '../../gerador/primoReplace.js'
import { _replace } from '../../gerador/courseReplace.js'
import { rawScript, teach } from '../../script/curso/2.0/02.js'

export const config = {
  alternateLanguagePercent: 0.5,
  percentAnswerShow: 0,
}

export const myReplace = _replace
export const _myScript = { rawScript, teach }

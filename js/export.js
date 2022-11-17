/* eslint-disable no-undef */
import { scriptReplace } from './utils.js'

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

import { config, myReplace } from './config.js'
// import { myReplace } from `../../gerador/${config.replaceName}.js`

const { isDebugging } = config

export function scriptReplace(teach, rawScript) {
  teach = teach
    .replace(/J[eé]ssica/gi, 'Jessica')
    .split(/\n/g)
    .filter(Boolean)
    .map(v =>
      v
        .trim()
        .replace(/([^|()?]+(?=[^(]*\)\?))/g, '$1 ')
        .replace(/\s*(\(.*?\)\?)\s*/g, '$1')
    )
    .sort((a, b) => b.length - a.length)

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

  /////////////

  const arrayReplace = myReplace
    .split('\n\n')
    .filter(Boolean)
    ?.map(v => v.split('\n').filter(Boolean))

  let newRawScript = scriptReplaced

  for (let [before, after] of arrayReplace) {
    newRawScript = newRawScript.replace(new RegExp(before, 'gi'), after)
  }

  return newRawScript
}

export const template = (en, pt) => {
  if (en === pt) {
    return `
      <div class="column">
        <div class="block resolved fixed">${pt}</div>
      </div>
    `
  }

  let myClass = 'block'

  if (en === '?') myClass += ' fixed'
  else if (!isDebugging) myClass += ' hidden'

  const str = `
    <div class="column">
      <div class="block ${pt === '?' ? 'fixed' : ''}">${pt}</div>
      <div class="${myClass} stroke">${en}</div>
    </div>
  `

  return str //new DOMParser().parseFromString(str, 'text/xml')
}
export const template2 = (word, show) => {
  return `<div class="block"><span class="${
    show && !config.change ? '' : 'hidden'
  }">${word}</span></div>`
}
export function split(v) {
  return v
    .split(/(\{|\})/g)
    .filter(v => v !== ' ' && v.length > 0 && v !== '{' && v !== '}')
}

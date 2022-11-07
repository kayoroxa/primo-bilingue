const script = `
Jessica {wants} {to go home}
Jessica {quer} {ir para casa}

{but} William {doesn't want} {to go home} {with her}
{mas} William {não quer} {ir para casa} {com ela}

{so} {you have to} {go home} {with her}
{então} {você tem que} {ir para casa} {com ela}

{and} {you have to} {call my mom}
{e} {você tem que} {ligar para minha mãe}
`
const data = script.split('\n\n').map(v => v.split('\n').filter(Boolean))

const cores = [
  'hsl(344, 100%, 54%)',
  'hsl(217, 100%, 61%)',
  'hsl(162, 70%, 34%)',
  'hsl(265, 83%, 57%)',
  'hsl(19, 97%, 51%)',
]

const spanTemplate = sentence => {
  const keys = sentence.match(/\{(.*?)\}/g) || []
  let countColor = 0

  const result = keys.reduce((acc, cur) => {
    if (countColor > cores.length - 1) countColor = 0

    const newCur = cur.replace(/[{}]/g, '')

    const result = acc.replace(
      cur,
      `<span style="color:${cores[countColor]}">${newCur}</span>`
    )
    countColor++
    return result
  }, sentence)

  return result
}

const template = (pt, en) => `
<div class="paragraph">
<div class="text en">${spanTemplate(en)}</div>
  <div class="text pt">${spanTemplate(pt)}</div>
</div>
`

const app = document.querySelector('.app')

for (let [en, pt] of data) {
  app.innerHTML += template(pt, en)
}

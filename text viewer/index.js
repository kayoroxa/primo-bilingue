const script = `
{I guess} {I can} help you {with} {those} {at}-{risk} kids.
{Eu acho "que"} {posso} ajudar vc {com} {essas} crianças {em} {risco}.

I {don't} need {your help}.
Eu {não} preciso da {sua ajuda}.

{It's} {nothing} personal, {it's} {just}...
{é} {nada} pessoal, {é} {só}...

You{'re not} a cop,
Você {não é} uma policial,

so {I'm not really sure}
então {Eu não tenho realmente certeza} "se"

you {could} {help}.
você {poderia} {ajudar}.

Okay. {No} {hard feelings}.
Ok. {Sem} {ressentimentos}.

But {I hate you}. {Not joking}. Bye.
Mas {eu te odeio}. {Sem brincadeira}. Tchau.
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

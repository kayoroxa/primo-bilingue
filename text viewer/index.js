const script = `
I wanna {show you} something {really} {cool}.
Eu quero {mostrar a você} algo {muito} {legal}.

You ready?
Esta pronta?

And… surprise.
E... surpresa.

I {arranged} with Carla {to get} it {here},
EU {arranjei} com a Carla {para trazer} isso {aqui},

and {I figured} maybe {this Saturday} we {could} go {sailing}.
e {eu pensei "que"} talvez {neste sábado} nós {pudéssemos} ir {velejar}.

{I mean}, you {could} go {sailing}.
{Quero dizer}, você {poderia} ir {velejar}.

You {should} sell {it} or {something}.
Você {deveria} vender {isso} ou {algo assim}.

{I don't think} I {wanna} sail {anymore}.
{Eu acho que não} Eu {quero} {mais} velejar.
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

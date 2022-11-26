const script = `
Hey, love?
Oi amor?

You {should} really {stay} {inside} like we {talked} {about}.
Você realmente {deveria} {ficar} {dentro "de casa"}, como nós {falamos} {sobre}.

{How long} are {they} gonna {protect us}?
{Até quando} {eles} vão {nos proteger}?

I don't know. {A while}?
Eu não sei. {Um tempo}?

{What} is it? Are you scared?
{O que} é isso? Você está assustado?

{What}{'s} {wrong} {with me}? Am {I} {a freak}?
{O que} {está} {errado} {comigo}? {Eu} sou {uma aberração}?

No. Of course not.
Não, claro que não.

you {can't} {listen to} {those people}.
você {não pode} {ouvir} {essas pessoas}.

They {don't} {know} {you}.
Eles {não} {conhecem} {você}.

I {don't} {know} me, {either}.
Eu {não} me {conheço}, {também}.

I do.
Eu "conheço".

I know you.
Eu conheço você.
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

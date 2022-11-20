const script = `
in my opinion
Na minha opinião

{I have to} admit
{eu tenho que} admitir

But hones{tly}
Mas honesta{mente}

{no} {matter} {why}
{não} {importa} {porque}

actually
na realidade

what happens is that
o que acontece é que

I'm sure
Eu tenho certeza

I'm not sure {if}
não tenho certeza {se}

I {can't} explain {why}, but
Eu {não posso} explicar {por que}, mas

{after} {dinner}
{depois} do {jantar}

{after} {dinner} {in the} restaurant
{depois} do {jantar} {no} restaurante

my mother
minha mãe

the planet
o planeta

those people
aquelas pessoas

the dentist
o dentista

nobody
ninguém

everybody
todo o mundo

is important
é importante

is complete{ly} different
é completa{mente} diferente

is different
é diferente

is perfect
é perfeito

is my responsibil{ity}
é minha responsabili{dade}

is complete{ly} important
é completa{mente} importante

is violent
é violento

{is} {the} suspect {in the} crime
{é} {o} suspeito {do} crime

has difficulty
tem dificuldade

is
é

is studying
está estudando

is study{ing} with Emily
está estud{ando} com Emily

has experience
tem experiência

is disappoint{ed} with Emily
está decepcion{ado} com Emily

is ignor{ing} Jessica
está ignor{ando} Jéssica

think it's optional
acho que é opcional

go with me
vai comigo

thinks positively
pensa positivamente

is waiting for me
está esperando por mim

{need you} stay
{preciso que você} fique

went {to the} restaurant
foi {ao} restaurante

didn't let me leave
não me deixou sair

left {home}
saiu {de casa}

{had to} go {to school}
{tinha que} ir {para a escola}

was {scared} {of the} dog
estava {com medo} {do} cachorro

in prison
na prisão

at home
em casa

in the hospital
no Hospital

anywhere
qualquer lugar

no matter where
não importa onde

wherever you are
onde quer que você esteja

here
aqui

when I arrived
quando eu cheguei

because {it's} necessary
porque {é} necessário

because {it's} important
porque {é} importante

because {there is} still {time}
porque ainda {há} {tempo}

because {it's} happing {anywhere}
porque {está} acontecendo {em qualquer lugar}


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

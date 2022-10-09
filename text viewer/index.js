const script = `
{for} {you} {to understand} {a} {native},
{para} {você} {entender} {um} {nativo}, 

you have to know the words,
você tem que saber as palavras, 

you have {to know} the pronunciation,
você tem que para a pronuncia, 

and you have to know the connection of words..
e você tem que saber a conecção das palavras..

for you to understand a native
para você entender um nativo 

you have to practice these 3 things.
você tem que praticar essas 3 coisas.

eu vou repetir:
I will repeat:

the translation of words,
a tradução das palavras, 

the pronunciation,
a pronuncia, 

and the connection of words.
e a conecção das palavras.

you practicing all this everyday
você praticando tudo isso todos os dias 

you will quickly learn English.
você rápido vai aprender inglês.

your level is not important,
o seu nivel não é importante, 

just practice, and it will be natural like portuguese
apenas pratique, e será natural como o português
`

const data = script.split('\n\n').map(v => v.split('\n').filter(Boolean))

const cores = [
  'hsl(344, 100%, 54%)',
  'hsl(187, 97%, 29%)',
  'hsl(35, 100%, 55%)',
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
  <div class="text pt">${spanTemplate(pt)}</div>
  <div class="text en">${spanTemplate(en)}</div>
</div>
`

const app = document.querySelector('.app')

for (let [en, pt] of data) {
  app.innerHTML += template(pt, en)
}

const { generateSentences } = require('../funcs')

const dict = {
  intro: `
    why
    porque

    hello.
    oi
     
    {I don't} {(understand|said)} {why}
    {Eu não} {(entendo|disse)} {porque}

    {nobody} {knows} {why}
    {ninguém} {sabe} {porque}

    {I wonder} {if}
    {eu me pergunto} {se}

    {even if it's} {just} {a lie}
    {mesmo se for} {apenas} {uma mentira}

    {i don't care} {if}
    {eu não me importo} {se}

    {good} {morning}
    {bom} {dia}
  `,
  who: `
    he
    ele

    William and you
    Willian e você

    Rose and Joyce
    Rosa e Joyce

    they
    elas

    everyone
    todos

    {my} {dad}
    {meu} {pai}

    {my} {cousin}
    {minha} {prima}

    {the} {guys}
    {os} {caras}

    {the} {crowd}
    {a} {multidão}

    {my} {team}
    {meu} {time}

    {my} {family}
    {minha} {família}

    everyone
    todos

    nobody
    ninguém

    someone
    alguém
    `,
  what: `
    {go} {to} {the} {party}
    {ir} {para} {a} {festa}
    
    {go} {eat} {cake}
    {vá} {comer} {bolo}
    
    {will} {be} {happy}
    {vai} {ser} {feliz}
    
    {will} {buy} {a red car}
    {vai} {comprar} {um carro vermelho}
    
    {is} {asking} {if} {you will}
    {está} {perguntando} {se} {você vai}
    
    {go} {buy} {pizza}
    {vá} {comprar} {pizza}
    
    {wants} {to see} {you}
    {quer} {ver} {você}
    
    {wants} {to talk} {to you}
    {quer} {falar} {com você}
    
    {can} {be} {here}
    {pode} {estar} {aqui}
    
    {can} {see} {you} {now}
    {Posso} {ver} {você} {agora}
    
    {would like to} {know you}
    {gostaria de} {te conhecer}
    
    {talk} {to me}
    {fale} {comigo}  
     `,
  when: `
    {at 2 am}
    {às 2 da manhã}

    tomorrow
    amanhã

   {almost} {every day}
    {quase} {todos os dias}

    {almost} {all the time}
    {Quase} {o tempo todo}

    {right now}
    {agora mesmo}

    now
    agora

    shortly
    Em breve

    {it's been a while}
    {já faz algum tempo}

    {since} {always}
    {desde} {sempre}
    `,
  whatPast: `
    {did not go}
    {não foi}

    {did not study}
    {não estudou}

    smiled
    sorriu

    {got sick}
    {ficar doente}

    {study} {english}
    {estudar} {inglês}

    {tried} {not} {to upset you}
    {tentei} {não} {te chatear}

    {just wanted} {to protect you}
    {apenas queria} {te proteger}
    `,
  whenPast: [
    'since last year',
    'just a few months',
    'last night',
    "it's been a while",
  ],

  where: `
    close to home
    far away
    at my house
    in my work
    on the beach
    at her house
    at the restaurant
    near the beach
  `,
  why: `
    {because} {it is necessary}
    {porque} {é necessário
}
    {because} {someone} {wants}
    {porque} {alguém} {quer}

    {since} {nobody} {did it}
    {já que} {ninguém} {fez isso}

    {for} {curiosity}
    {por} {curiosidade}

    for me to {feel good}
    para eu me {sentir bem}

    because it's good
    porque é bom

    to know how to solve
    saber como resolver

    if you want
    Se você quiser

  `,
  // quantity: [
  //   'because it is necessary',
  //   'because someone wants',
  //   'since no one did it',
  //   'for curiosity',
  //   'for me to feel good',
  //   "because it's good",
  //   'to know how to solve',
  //   'if you want',
  // ],
  with: `
  {with} {my} {son} 
  {com} {meu} {filho}

  {with} {my} {family}
  {com} {minha} {família}

  `,
}

const samples = [
  // ['who', 'what', 'when', 'where', 'why'],
  // ['who', 'what', 'where', 'when', 'why'],
  // ['who', 'whatPast', 'where', 'whenPast', 'why'],
  ['who', 'what', 'where'],
  ['who', 'whatPast', 'where'],
  ['who', 'what', 'when'],
  ['who', 'whatPast', 'whenPast'],
  ['who', 'what', 'where', 'when'],
  ['who', 'whatPast', 'where', 'when'],
  ['who', 'what', 'where'],
  ['who', 'what', 'why'],
  ['who', 'whatPast', 'why'],
  ['who', 'what', 'when'],
  ['who', 'whatPast', 'whenPast'],
  ['intro', 'who', 'what'],
  ['intro', 'who', 'whatPast'],
]

generateSentences({
  dict,
  samples,
  lengthOutput: 40,
  n: 2,
  showNewsTeach: true,
  printWithVariable: true,
  // test: 'whatPast',
})

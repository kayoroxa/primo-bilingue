var rawScript = `
in that house
naquela casa

my sister told
minha irmã contou

was talking
estava falando

my sister told stories in that house
minha irmã contou historias naquela casa

my friend told stories in that house
meu amigo contou historias naquela casa

our
nosso

holiday
feriado

looks for what should be done
procura o que deve ser feito

the prince looks for what should be done because is holiday
o príncipe procura o que deve ser feito porque é feriado

my friend was talking in our group
meu amigo estava falando no nosso grupo

ran happily
correu feliz

away from here
longe daqui

the student ran happily away from here
a aluna correu feliz longe daqui

the student ran happily in that house
a aluna correu feliz naquela casa

wants to know
quer saber

what to buy in that house
o que comprar naquela casa

far from here
longe daqui

the prince wants to know what to buy in that house
o príncipe quer saber o que comprar naquela casa

my friend wants to know what to buy because is holiday
meu amigo quer saber o que comprar porque é feriado

knows what the best places
sabe quais são os melhores lugares

my friend knows what the best places far from here
meu amigo sabe quais são os melhores lugares longe daqui

the prince knows what the best places far from here
o príncipe sabe quais são os melhores lugares longe daqui

is happy
está feliz

with it
com isso

with what he has
com o que ele tem

my friend is happy with what he has far from here
meu amigo está feliz com o que ele tem longe daqui

my friend looks for what should be done
meu amigo procura o que deve ser feito

the prince is happy with what he has far from here
o príncipe está feliz com o que ele tem longe daqui

my sister looks for what should be done
minha irmã procura o que deve ser feito

the prince ran happily in our group
o príncipe correu feliz no nosso grupo

my sister is happy with what she has in our group
minha irmã está feliz com o que ela tem no nosso grupo

the student was talking in our group
a aluna estava falando no nosso grupo

in our
na nossa

in the community
na comunidade

got sick
ficou doente

Jack was talking in the community
Jack estava falando na comunidade

Jack knows what the best places in the community
Jack sabe quais são os melhores lugares na comunidade

in the small community
na pequena comunidade

because this is
porque isso é

his obligation
sua obrigação

the student got sick in the small community
a aluna ficou doente na pequena comunidade

the prince told stories in the small community
o príncipe contou historias na pequena comunidade

Jack wants to know what to buy because this is his obligation
Jack quer saber o que comprar porque isso é sua obrigação

the prince was talking far from here
o príncipe estava falando longe daqui

Emma wants to know what to buy in the small community
Emma quer saber o que comprar na pequena comunidade

the student wants to know what to buy in that house
a aluna quer saber o que comprar naquela casa

with that
com isso

best seats
melhores lugares

my sister wants to know what to buy
minha irmã quer saber o que comprar

my friend looks for what should be done far from here
meu amigo procura o que deve ser feito longe daqui

my friend knows what the best seats in that house
meu amigo sabe quais são os melhores lugares naquela casa

my friend is happy with what he has in the community
meu amigo está feliz com o que ele tem na comunidade

the prince got sick far from here
o príncipe ficou doente longe daqui

Emma knows what the best seats in that house
Emma sabe quais são os melhores lugares naquela casa

my friend ran happily away from here
meu amigo correu feliz longe daqui

Emma is happy with what he has in the small community
Emma está feliz com o que ele tem na pequena comunidade

knows which are
sabe quais são

it is her obligation
isso é sua obrigação

Jack knows which are the best places because is holiday
Jack sabe quais são os melhores lugares porque é feriado

my sister was talking in the community
minha irmã estava falando na comunidade

my friend wants to know what to buy far from here
meu amigo quer saber o que comprar longe daqui

Emma knows which are the best places because it is her obligation
Emma sabe quais são os melhores lugares porque isso é sua obrigação

the prince was talking in that house
o príncipe estava falando naquela casa

Emma is happy with what he has because it is her obligation
Emma está feliz com o que ele tem porque isso é sua obrigação

my sister ran happily away from here
minha irmã correu feliz longe daqui

my friend is looking for what should be done in that house
meu amigo procura o que deve ser feito naquela casa

the prince told stories in that house
o príncipe contou historias naquela casa

my sister was talking in that house
minha irmã estava falando naquela casa

Jack knows what the best seats in that house
Jack sabe quais são os melhores lugares naquela casa

my sister got sick in the community
minha irmã ficou doente na comunidade

the student was talking in the small community
a aluna estava falando na pequena comunidade

Emma wants to know what to buy because is holiday
Emma quer saber o que comprar porque é feriado
`

var teach = `
told stories
contou historias
ran happily
correu feliz
with (it|that)
com isso
got sick
ficou doente
in our
looks for what
procura o que
(na nossa|no nosso)
with what (he|she) has
com o que (ele|ela) tem
(in|at) his house
naquela casa
wants to know
quer saber
what to buy
o que comprar
should be done
deve ser feito
(away|far) from here
longe daqui
in the community
na comunidade
knows which are
sabe quais são
was talking
estava falando
the prince
o príncipe
my friend
meu amigo
my sister
minha irmã
knows what
sabe quais são
the best seats
the best places
os melhores lugares
in that house
naquela casa
in the small community
na pequena comunidade

`

const { generateSentences } = require('../funcs')

const sentences = `
I want to be (good|happy|).
He likes to paint by himself.
I can run faster than him.
I'm not sure about the universe.
I lost my watch yesterday.
It wasn't me who knocked on your door.
Everything was ready for the party.
No one will come after me.
She likes to paint by herself.
We went fishing after school.
You are very lazy.
You don't teach your cat tricks.
I would like to help you.
I will get myself a coffee.
I will not take it from you.
He does not goes to gym every day.
He is my best friend.
I learnt English by myself.
Alex isn't telling the truth.
They killed him.
You are not an engineer.
My mom likes to paint by herself.
You will not come with me.
I really need someone.
This was a threat to us.
I told my father that I wanted to go to London.
I can't come home early today.
Brasil is not a country in Europe.
She learned to read by herself.
These are for you.
I want to do something.
You should go take it from him.
They speak English in USA.
I love you.
She cook for you.
The dogs belong to them.
We borrowed her car.
I have not failed.
She is a mechanical engineer.
I will take it from you.
My father wouldn't let us buy a new computer.
They are the smartest kids here.
We don't have a house.
I have got a sister.
I lost my wallet last week.
Today we will come.
I will help you.
No one attended the parent meeting.
I don't take the trash out.
Some people won't eat spicy foods.
I bought a new house.
This is mine dog.
Mary hasn't cooked some cookies.
I play volleyball.
You are lazy students.
My father will not come with us today.
They live near here.
My father didn't go to work in the morning.
It wasn't me knocking on your door.
They sleep in the afternoon.
We don't work very hard.
You are an engineer.
This was not a threat to us.
I came to see you yesterday.
You should take care of yourself.
It bites everyone.
I don't play tennis every day.
I love dogs.
She is not my best friend.
I bought a new computer.
Someone knows where he is.
Everybody loves Mary.
I don't have my wallet with me.
My son didn't eat yesterday.
No one has ever called us to complain.
I hear nothing.
She is my best friend.
My father will come with us today.
I don't want to play football with you.
They killed him.
Mary and Alex invited them to the party.
We can go on vacation with you.
I didn't see you at school today.
He does not catches the bus every morning.
It won't rain tomorrow.
You need to go take yours.
We go to the gym club together.
She wasn't eating white rice.
I don't learn English with my friends.
He hasn't come home.
Madrid is not cold in this season.
He would do anything.
Someone knows where she is.
There was not a single person outside.
There are pineapples left on the table.
I don't hear nothing.
This is mine.
The dog can walk itself.
I don't want too drink too much.
They will come after you.
`

// generateSentences({
//   dict,
//   samples,
//   lengthOutput:
//   n:
//   showNewsTeach: true,
//   printWithVariable: true,
//   // test: 'whatPast',
// })

const data = [
  { name: 'jusin da silva pitomba' },
  { name: 'jusin da silva pitomba' },
  { name: 'jusin da silva pitomba' },
  { name: 'jusin da silva pitomba' },
  { name: 'jusin da silva pitomba' },
]

const getted = data.filter(v => {
  return v.name.includes('pitomba')
})

console.log(getted)

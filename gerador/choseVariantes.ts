interface Dict {
  [teach: string]: string[]
}

export function choseVariantes(dict: Dict) {
  console.log('oi')
  console.log()
  return Object.entries(dict)
}

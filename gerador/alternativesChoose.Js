const _ = require('lodash')

module.exports = { alternativeChoose }

// interface Props {
//   [teach: string]: string[]
// }

function valuesChoose(values) {
  return values.map(value => {
    const valueSplitted = value.split(/[()]/g)

    if (valueSplitted.length <= 0) return value

    const valueChose = valueSplitted.map(part => {
      const hasOptions = part.includes('|')
      if (!hasOptions) return part

      const options = part.split(/\|/g)
      return _.sample(options)
    })

    return valueChose.join('')
  })
}

function alternativeChoose(dict) {
  const arrayEntries = Object.entries(dict)

  const arrayEntriesChose = arrayEntries.map(([key, values]) => {
    if (!values.some(value => value.includes('('))) return [key, values]

    const valuesChose = valuesChoose(values)

    return [key, valuesChose]
  })

  const obj = Object.fromEntries(arrayEntriesChose)

  return obj
}

// [
//   ["adasdasd", ["sd", "asdasdasd"]],
//   ["adasdasd", ["sd", "asdasdasd"]],
//   ["adasdasd", ["asd", "asdasdasd"]],
//   ["adasdasd", ["asdasdasd", "asd"]],
//   ["adasdasd", ["asdasdasd", "asd"]],
// ]

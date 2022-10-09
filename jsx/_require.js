const fs = require('fs')
const pathJoin = require('path').join

function _require(relativePath) {
  const filePath = pathJoin(
    module.parent?.path,
    relativePath.endsWith('.jsx') ? relativePath : relativePath + '.jsx'
  )

  let file = fs.readFileSync(filePath, {
    encoding: 'utf8',
  })

  file = file.replace(/import ({?.*}?) from (.*)/g, 'const $1 = require($2)')
  file = file.replace('export default', 'module.exports =')

  if (!file.includes('module.exports ='))
    throw new Error(`Você não exportou nada no arquivo: ${filePath}`)

  const newFile = file
    .replace(/(return[\n\s]*\(?[\n\s]*)(<[\s\S]*\>)/g, '$1`$2`')
    .replace(/(?<=\[)[\n\s]*(<.*>)/g, '`$1`')
    .replace(/(?<![([<]|const[\s]|var[\s]|let[\s]|=[\s]){(.*?)}/g, '${$1}')

  return eval(newFile)
}

module.exports = {
  _require,
}

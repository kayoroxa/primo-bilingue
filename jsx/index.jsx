function video({ oi }) {
  const { hello } = oi
  const olá = { oi: 'Oi' }
  const div = [<div>beijo {oi}</div>]

  return (
    <div>
      asdasdasd
      <div>
        {oi == 'oi' ? 'é oi' : 'não é oi'}: {oi}
      </div>
    </div>
  )
}

module.exports = video

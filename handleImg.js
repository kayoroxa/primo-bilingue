function Imgs() {
  return {
    put: text => {
      const flitted = photos.filter(({ key }) =>
        text.includes(new RegExp(`\\b${key}\\b`))
      )
    },
  }
}

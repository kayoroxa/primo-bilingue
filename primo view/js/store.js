function Store() {
  return {
    saveIndex: index => {
      localStorage.setItem('index', index)
    },
    getIndex: () => parseInt(localStorage.getItem('index') || 0),
  }
}

export const storage = Store()

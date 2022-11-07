export default function audioPlay() {
  document.querySelector('audio').currentTime = 0
  document.querySelector('audio').play()
}

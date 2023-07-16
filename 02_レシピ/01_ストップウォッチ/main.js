const display = document.getElementById("display")
const startButton = document.getElementById("start")
const resetButton = document.getElementById("reset")

let count = 0
let id = null

const countUp = function () {
  // count を更新
  count += 1
  // count を秒単位にして表示
  display.textContent = (count / 100).toFixed(2)
}

startButton.addEventListener("click", function () {
  if (id === null) {
    id = setInterval(countUp, 10)
    startButton.textContent = "Stop"
  } else {
    clearInterval(id)
    id = null
    startButton.textContent = "Start"
  }
})

resetButton.addEventListener("click", function () {
  count = 0
  display.textContent = "0.00"
})

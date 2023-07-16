const display = document.getElementById("display")
const startButton = document.getElementById("start")
const resetButton = document.getElementById("reset")

let count = 0
let id = null

const countUp = function () {
  count += 0.01
  display.textContent = count
  console.log(count)
}

startButton.addEventListener("click", function () {
  if (id === null) {
    id = setInterval(countUp, 10)
    startButton.textContent = "Stop"
    console.log(count)
  } else {
    clearInterval(id)
    id = null
    startButton.textContent = "Start"
    console.log(count)
  }
})

resetButton.addEventListener("click", function () {
  count = 0
  display.textContent = "0.00"
})

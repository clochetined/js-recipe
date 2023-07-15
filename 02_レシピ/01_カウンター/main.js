const display = document.getElementById("count-number")
const plusButton = document.getElementById("plus-one")
const minusButton = document.getElementById("minus-one")
const resetButton = document.getElementById("reset")

plusButton.addEventListener("click", () => {
  display.textContent = Number(display.textContent) + 1
})

minusButton.addEventListener("click", () => {
  display.textContent = Number(display.textContent) - 1
})

resetButton.addEventListener("mousemove", () => {
  display.textContent = 0
})

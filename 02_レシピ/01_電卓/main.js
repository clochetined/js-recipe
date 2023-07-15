const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const multiplyButton = document.getElementById("multiply")
const divideButton = document.getElementById("divide")
const operatorButton = document.getElementById("operator")
const num1 = document.getElementById("number1")
const num2 = document.getElementById("number2")
const equalButton = document.getElementById("equal")
const resultButton = document.getElementById("result")

plusButton.addEventListener("click", () => {
  operatorButton.textContent = "+"
  equalButton.onclick = () => {
    resultButton.textContent = Number(num1.value) + Number(num2.value)
  }
})
minusButton.addEventListener("click", () => {
  operatorButton.textContent = "-"
  equalButton.onclick = () => {
    resultButton.textContent = Number(num1.value) - Number(num2.value)
  }
})
multiplyButton.addEventListener("click", () => {
  operatorButton.textContent = "*"
  equalButton.onclick = () => {
    resultButton.textContent = Number(num1.value) * Number(num2.value)
  }
})
divideButton.addEventListener("click", () => {
  operatorButton.textContent = "/"
  equalButton.onclick = () => {
    resultButton.textContent = Number(num1.value) / Number(num2.value)
  }
})

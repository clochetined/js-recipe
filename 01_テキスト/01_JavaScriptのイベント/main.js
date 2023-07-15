const button = document.getElementById("button")
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const alertMessage = () => {
  alert("クッリクされました")
}

const sayHello = () => {
  console.log("Hello")
}

const logValue = (e) => {
  console.log(e.target.value)
}

document.onkeydown = (e) => {
  console.log(e.key)
}

button.onclick = alertMessage

inputText.oninput = logValue
inputDate.oninput = logValue

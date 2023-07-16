const figure = document.getElementById("figure")
const Button = document.getElementById("button")

// squareButton.addEventListener("click", () => {
//   figure.className = "square"
// })

// circleButton.addEventListener("click", () => {
//   figure.className = "circle"
// })

Button.addEventListener("click", () => {
  if (figure.classList.contains("square")) {
    figure.className = "circle"
  } else if (figure.classList.contains("circle")) {
    figure.className = "triangle"
  } else {
    figure.className = "square"
  }
})

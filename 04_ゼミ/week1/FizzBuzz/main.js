const num = document.getElementById("Number")
const btn = document.getElementById("btn")
const result = document.getElementById("result")

btn.addEventListener("click", () => {
  const numValue = num.value
  if (numValue % 15 === 0) {
    result.textContent = "FizzBuzz"
  } else if (numValue % 5 === 0) {
    result.textContent = "Buzz"
  } else if (numValue % 3 === 0) {
    result.textContent = "Fizz"
  } else {
    result.textContent = numValue
  }
  for (let i = 1; i <= num.value; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else {
      console.log(i)
    }
  }
})

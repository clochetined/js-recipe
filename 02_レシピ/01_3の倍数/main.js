const genkiFunction = (num) => {
  for (let number = 0; number <= num; number++) {
    if (number % 3 == 0) {
      console.log(number + "!!!!")
    } else {
      console.log(number)
    }
  }
}

genkiFunction(30)

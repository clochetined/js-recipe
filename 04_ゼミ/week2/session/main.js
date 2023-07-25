const InputText = document.getElementById("memo-input")
const AddButton = document.getElementById("add-button")
const cardContainer = document.getElementById("memo-container")

AddButton.addEventListener("click", () => {
  createElement("div", "button", "delete", cardContainer)
  clearInputtext()
})

const createElement = (tag1, tag2, text, parent) => {
  const card = document.createElement(tag1)
  const deleteButton = document.createElement(tag2)

  card.textContent = InputText.value
  deleteButton.textContent = text
  parent.appendChild(card)
  card.appendChild(deleteButton)

  deleteButton.addEventListener("click", () => {
    deleteCard(card)
  })
}

const clearInputtext = () => {
  InputText.value = ""
}

const deleteCard = (card) => {
  card.remove()
}

// const addfunction = () => {
//   const card = this.document.createElement("div")
//   const deleteButton = this.document.createElement("button")

//   card.textContent = InputText.value
//   deleteButton.textContent = "delete"
//   cardContainer.appendChild(card)
//   card.appendChild(deleteButton)
// InputText.value = ""
//   deleteButton.addEventListener("click", () => {
//     card.remove()
//   })
// }

// AddButton.addEventListener("click", () => {
//   const card = document.createElement("div")
//   const deleteButton = document.createElement("button")

//   card.textContent = InputText.value
//   deleteButton.textContent = "delete"
//   cardContainer.appendChild(card)
//   card.appendChild(deleteButton)

//   deleteButton.addEventListener("click", () => {
//     card.remove()
//   })
// })

// ここから下は関数を使ったもの

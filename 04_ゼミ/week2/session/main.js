const InputText = document.getElementById("memo-input")
const AddButton = document.getElementById("add-button")
const cardContainer = document.getElementById("memo-container")

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

AddButton.addEventListener("click", () => {
  addfunction()
})

const addfunction = () => {
  const card = this.document.createElement("div")
  const deleteButton = this.document.createElement("button")

  card.textContent = InputText.value
  deleteButton.textContent = "delete"
  cardContainer.appendChild(card)
  card.appendChild(deleteButton)
  InputText.value = ""

  deleteButton.addEventListener("click", () => {
    card.remove()
  })
}

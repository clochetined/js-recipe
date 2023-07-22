// HTML要素を取得する
const addButton100 = document.getElementById("add-button-100")
const displaySaifuItems = document.getElementById("display-saifu")
const displayJihankiMoney = document.getElementById("display-jihanki-money")
const buyButtonTea = document.getElementById("buy-button-tea")
const displayItems = document.getElementById("display-items")

let saifu = 1000
let jihankiMoney = 0

addButton100.onclick = function () {
  if (saifu >= 100) {
    saifu -= 100
    jihankiMoney += 100
    displaySaifuItems.textContent = saifu
    displayJihankiMoney.textContent = jihankiMoney
  }
}

// buyButtonTea を押した時の処理
buyButtonTea.onclick = function () {
  if (jihankiMoney >= 100) {
    jihankiMoney -= 100
    displayJihankiMoney.textContent = jihankiMoney
    displayItems.textContent = displayItems.textContent + "🍵"
  }
}

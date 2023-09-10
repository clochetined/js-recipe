//配列やオブジェクトを保存する場合はJSON形式に変更する
const geekSalon = ["web", "game", "iphone", "webExpert"]
const fruits = ["apple", "banana", "orange"]
const webExpert = {
  uniqueContent: "チーム開発",
  language: "JavaScript",
}

//localStorageに保存する
localStorage.geekSalon = JSON.stringify(geekSalon)
localStorage.fruits = JSON.stringify(fruits)
localStorage.webExpert = JSON.stringify(webExpert)

// コンソールに出力
console.log(localStorage.geekSalon)
//["web","game","iphone","webExpert"]

console.log(localStorage.fruits)
//["apple","banana","orange"]

console.log(localStorage.webExpert)
// {
//   "uniqueContent":"チーム開発",
//   "language":"JavaScript"
// }

let courses = JSON.parse(localStorage.geekSalon)
console.log(courses)
//["web","game","iphone","webExpert"]

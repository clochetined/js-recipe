const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")

// クイズの内容
const quiz = {
  text: "この中で、正しいのはどれ？",
  image: "images/Ganymede.jpg",
  choices: [
    {
      text: "ゴリアテ",
      feedback: "残念！ゴリアテは木星の衛星の名前です。",
    },
    {
      text: "ガニメデ",
      feedback: "正解！ガニメデは木星の衛星の名前です！",
    },
    {
      text: "ゼニガメ",
      feedback: "ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
    },
  ],
}

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = quiz.image

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
}

// 正誤判定のための定数
const choose = function (choiceNumber) {
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

// choiceNumber が 1 のとき choice1 が押されたことになる
choice1.onclick = function () {
  // 正誤判定
  choose(0)
}
choice2.onclick = function () {
  // 正誤判定
  choose(1)
}
choice3.onclick = function () {
  // 正誤判定
  choose(2)
}

reloadQuiz()

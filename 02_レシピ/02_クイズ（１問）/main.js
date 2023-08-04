const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const container = document.getElementById("quiz-container")
const feedback = document.getElementById("feedback")

// クイズの内容
const quiz = {
  text: "この星の名前は何でしょう？",
  image: "Ganymede.jpg",
  choices: [
    {
      text: "ゴリアテ",
      feedback:
        "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
    },
    {
      text: "ゼニガメ",
      feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
    },
    {
      text: "ガニメデ",
      feedback: "正解！ガニメデは、木星の第三惑星だよ！",
    },
    {
      text: "メガロテ",
      feedback: "残念！メガロテは、ガンダムの敵だよ。",
    },
    {
      text: "ガンダム",
      feedback: "残念！ガンダムは、ガンダムの主人公だよ。",
    },
  ],
}

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  // 選択肢（ボタン）の中身を表示
  for (let i = 0; i < quiz.choices.length; i++) {
    const button = document.createElement("button")
    button.className = "choice-" + (i + 1)
    button.textContent = quiz.choices[i].text

    container.append(button)

    // ボタンをクリックしたら正誤判定
    button.onclick = function () {
      // 正解かどうかチェック
      choose(i)
    }
  }
}

// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()

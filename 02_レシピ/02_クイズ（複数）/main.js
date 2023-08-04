const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const container = document.getElementById("quiz-container")
const feedback = document.getElementById("feedback")

// クイズの内容
const quizzes = [
  {
    text: "この星の名前は何でしょう？",
    image: "Ganymede.jpg",
    choices: [
      {
        text: "ゴリアテ",
        isCorrect: false,
        feedback:
          "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
      },
      {
        text: "ゼニガメ",
        isCorrect: false,
        feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
      },
      {
        text: "ガニメデ",
        isCorrect: true,
        feedback: "正解！ガニメデは、木星の第三惑星だよ！",
      },
      {
        text: "メガロテ",
        isCorrect: false,
        feedback: "残念！メガロテは、ガンダムの敵だよ。",
      },
      {
        text: "ガンダム",
        isCorrect: false,
        feedback: "残念！ガンダムは、ガンダムの主人公だよ。",
      },
    ],
  },
  {
    text: "いま、何問目？",
    image: "Two.jpeg",
    choices: [
      {
        text: "１",
        isCorrect: false,
        feedback: "残念！ひとつ少ないよ。",
      },
      {
        text: "２",
        isCorrect: true,
        feedback: "正解！１でも３でもないよ！",
      },
      {
        text: "３",
        isCorrect: false,
        feedback: "残念！ひとつ多いよ。",
      },
    ],
  },
  {
    text: "この城の名前は？",
    image: "Maruoka.png",
    choices: [
      {
        text: "丸岡城",
        isCorrect: true,
        feedback: "正解！どこからどうみても丸岡城だね。",
      },
      {
        text: "丸亀城",
        isCorrect: false,
        feedback: "残念！どこからどうみても丸亀城ではないよ。",
      },
      {
        text: "丸子城",
        isCorrect: false,
        feedback: "残念！どこからどうみても丸子城ではないよ。",
      },
    ],
  },
]

// quiz を画面に表示する関数
const reloadQuiz = function (quizNumber) {
  // quizNumber番目のクイズを取得
  const quiz = quizzes[quizNumber]

  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  // 選択肢（ボタン）の中身を表示
  for (let i = 0; i < quiz.choices.length; i++) {
    const button = document.createElement("button")
    button.className = "choice-" + (i + 1)
    button.textContent = quiz.choices[i].text

    container.appendChild(button)

    // ボタンをクリックしたら正誤判定
    button.onclick = function () {
      // 正解かどうかチェック
      choose(quizNumber, i)
      if (quiz.choices[i].isCorrect === true) {
        alert("正解です！")
        const nextQuizButton = document.createElement("button")
        nextQuizButton.textContent = "次の問題に挑戦する"
        feedback.appendChild(nextQuizButton)
      }
    }
  }
}
// choiceNumber番目の選択肢を選択
const choose = function (quizNumber, choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quizzes[quizNumber].choices[choiceNumber].feedback
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz(0)

const quiz = [
  {
    question: "ゲーム市場、最も売れたゲーム機は？",
    answer: [
      "スーパーファミコン",
      "プレイステーション2",
      "ニンテンドースイッチ",
      "ニンテンドーDS",
    ],
    correct: "ニンテンドーDS",
  },
  {
    question: "A？",
    answer: ["A", "B", "C", "D"],
    correct: "A",
  },
  {
    question: "D？",
    answer: ["A", "B", "C", "D"],
    correct: "D",
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLenghth = $button.length;

//クイズの問題文、選択肢を定義する
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLenghth) {
    $button[buttonIndex].textContent = quiz[quizIndex].answer[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

const clickHander = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解");
    score++;
  } else {
    window.alert("不正解");
  }
  quizIndex++;

  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert("終了！あなたの正解数は" + score + "/" + quizLength);
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLenghth) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHander(e);
  });
  handlerIndex++;
}

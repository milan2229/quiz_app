const quiz = [
  {
    question: 'サッカーW杯最多優勝国はどこの国でしょうか？',
    answers: [
      'ウルグアイ',
      'イタリア',
      'ドイツ',
      'ブラジル'
    ],
    correct: 'ブラジル'
  }, {
    question: 'UEFAチャンピオンズリーグ最多優勝チームは？',
    answers: [
      'FCバルセロナ',
      'ACミラン',
      'レアル・マドリード',
      'リヴァプール'
    ],
    correct: 'レアル・マドリード'
  },{
    question: 'Jリーグ最多優勝チームはどこでしょう？',
    answers: [
      '川崎フロンターレ',
      '鹿島アントラーズ',
      '浦和レッズ',
      '東京ヴェルディ'
    ],
    correct: '鹿島アントラーズ'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');

// クイズの問題文、選択肢を定義
const setupQuiz = () =>{
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  const buttonLength = $button.length;

  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
// 上で定義した関数は読み込んであげる
setupQuiz();

const clickHandler = (e) =>{
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解');
    score++;
  }else{
    window.alert('不正解!');
  }

  quizIndex++;
  
  if(quizIndex < quizLength){
    // 問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    // 問題数がもうなければ実行
    window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です。');
  }
};

// ボタンクリックしたら正誤判定
// eはイベントでtargetはクリックされたボタン
let handlerIndex = 0;
const buttonLength = $button.length;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

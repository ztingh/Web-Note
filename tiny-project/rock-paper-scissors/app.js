var
  userScores = 0,
  compScores = 0;

const
  rock = document.getElementById('r'),
  paper = document.getElementById('p'),
  scissors = document.getElementById('s'),
  userScoresSpan = document.getElementById('user-score'),
  compScoresSpan = document.getElementById('comp-score'),
  result = document.querySelector('.result > p');

function comChoice() {
  var
    choices = ['r', 'p', 's'];
    randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function changeToWord(choice) {
  switch (choice) {
    case 'r':
      return 'Rock';
    case 'p':
      return 'Paper';
    case 's':
      return 'Scissors';
  }
}
function win(userChoice, comChoice) {
  var
    userWord = changeToWord(userChoice),
    comWord = changeToWord(comChoice),
    userSub = 'user'.fontsize('3').sub();
    compSub = 'comp'.fontsize('3').sub();
  userScores++;
  userScoresSpan.innerHTML = userScores;
  result.innerHTML = `${userWord}${userSub} beats ${comWord}${compSub} you win 🔥!!!`;
  document.getElementById(userChoice).classList.add('green-border');
  setTimeout(() => document.getElementById(userChoice).classList.remove('green-border') , 300);
}

function loose(userChoice, comChoice) {
  var
    userWord = changeToWord(userChoice),
    comWord = changeToWord(comChoice),
    userSub = 'user'.fontsize('3').sub();
    compSub = 'comp'.fontsize('3').sub();
  compScores++;
  compScoresSpan.innerHTML = compScores;
  result.innerHTML = `${userWord}${userSub} looses ${comWord}${compSub} you loose 💩!!!`;
  document.getElementById(userChoice).classList.add('red-border');
  setTimeout(() => document.getElementById(userChoice).classList.remove('red-border') , 300);
}

function draw(userChoice, comChoice) {
  var
    userWord = changeToWord(userChoice),
    comWord = changeToWord(comChoice),
    userSub = 'user'.fontsize('3').sub();
    compSub = 'comp'.fontsize('3').sub();
  userScoresSpan.innerHTML = userScores;
  result.innerHTML = `${userWord}${userSub} equal ${comWord}${compSub}!!!`;
  document.getElementById(userChoice).classList.add('gray-border');
  setTimeout(() => document.getElementById(userChoice).classList.remove('gray-border') , 300);
}

function game(userChoice, comChoice) {
  console.log(userChoice + comChoice);
  switch (userChoice + comChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, comChoice);
      break;
    case 'sr':
    case 'rp':
    case 'ps':
      loose(userChoice, comChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, comChoice);
  }
}

function main () {
  rock.addEventListener('click', () => game('r', comChoice()));

  paper.addEventListener('click', () => game('p', comChoice()));

  scissors.addEventListener('click', () => game('s', comChoice()));
}

main();

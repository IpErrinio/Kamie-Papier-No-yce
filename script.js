let playerScore = 0;
let computerScore = 0;

function playGame(player) {
  let choices = ['Kamień', 'Papier', 'Nożyczki'];
  let computer = choices[Math.floor(Math.random() * 3)];

  let result = '';

  if (player === computer) {
    result = 'Remis';
  } else if (
    (player === 'Kamień' && computer === 'Nożyczki') ||
    (player === 'Papier' && computer === 'Kamień') ||
    (player === 'Nożyczki' && computer === 'Papier')
  ) {
    result = 'Brawo wygrałeś!!!';
    playerScore++;
  } else {
    result = 'Lul ale noob, Przegrana!';
    computerScore++;
  }

  updateScoreboard();
  document.getElementById('result').innerText = `Wybrałeś ${player}, Komputer wykłada ${computer}. ${result}`;
}

function updateScoreboard() {
  document.getElementById('playerScore').innerText = playerScore;
  document.getElementById('computerScore').innerText = computerScore;
}

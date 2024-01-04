function playGame(player) {
    let choices = ['Kamień', 'Papier', 'Nożyczki'];
    let computer = choices[Math.floor(Math.random() * 3)];

    let result = '';

    if (player === computer) {
      result = 'Remis';
    } else if (
      (player === 'Kamień' && computer === 'Nożyczki') ||
      (player === 'Kamień' && computer === 'Kamień') ||
      (player === 'Nożyczki' && computer === 'Papier')
    ) {
      result = 'Brawo wygrałeś!!!';
    } else {
      result = 'Lul ale noob, Przegrana!';
    }

    document.getElementById('result').innerText = `Wybrałeś ${player}, Komputer wykłada ${computer}. ${result}`;
  }
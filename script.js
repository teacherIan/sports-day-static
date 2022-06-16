rubyPoints = document.getElementById('ruby-points');
sapphirePoints = document.getElementById('sapphire-points');
amberPoints = document.getElementById('amber-points');
pearlPoints = document.getElementById('pearl-points');
winner = document.getElementById('winner');
startButton = document.getElementById('start-button');
startButtonContainer = document.getElementById('start-button-container');

const houses = [
  {
    houseReference: rubyPoints,
    totalPoints: 0,
    difference: 0,
    currentNumber: 0,
    winner: false,
    winningMessage: '',
  },
  {
    houseReference: sapphirePoints,
    totalPoints: 0,
    difference: 0,
    currentNumber: 0,
    winner: false,
    winningMessage: '',
  },
  {
    houseReference: amberPoints,
    totalPoints: 0,
    difference: 0,
    currentNumber: 0,
    winner: false,
    winningMessage: '',
  },
  {
    houseReference: pearlPoints,
    totalPoints: 0,
    difference: 0,
    currentNumber: 0,
    winner: false,
    winningMessage: '',
  },
];

fetch('https://sports-day.herokuapp.com/get')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    houses[1].totalPoints = +data[0].points;
    houses[0].totalPoints = +data[1].points;
    houses[2].totalPoints = +data[2].points;
    houses[3].totalPoints = +data[3].points;

    houses[1].winningMessage = data[0].message;
    houses[0].winningMessage = data[1].message;
    houses[2].winningMessage = data[2].message;
    houses[3].winningMessage = data[3].message;

    rubyPoints.innerHTML = houses[0].totalPoints;
    sapphirePoints.innerHTML = houses[1].totalPoints;
    amberPoints.innerHTML = houses[2].totalPoints;
    pearlPoints.innerHTML = houses[3].totalPoints;
  });

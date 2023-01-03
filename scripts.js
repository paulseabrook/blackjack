// variables for accessing DOM //

const playButton = document.querySelector('#play');
const containerOne = document.querySelector('.phase-one-container');
const containerTwo = document.querySelector('.phase-two-container');
const topTwo = document.querySelector(`#phase-two-top`);
const bottomTwo = document.querySelector('#phase-two-bottom');
const betForm = document.querySelector('#bet-form');

// data structures //

let cards = [
  {
    abr: '1h',
    name: 'one of hearts',
    amt: 1,
  },
  {
    abr: '2h',
    name: 'two of hearts',
    amt: 2,
  },
  {
    abr: '3h',
    name: 'three of hearts',
    amt: 3,
  },
  {
    abr: '4h',
    name: 'four of hearts',
    amt: 4,
  },
  {
    abr: '5h',
    name: 'five of hearts',
    amt: 5,
  },
  {
    abr: '6h',
    name: 'six of hearts',
    amt: 6,
  },
  {
    abr: '7h',
    name: 'seven of hearts',
    amt: 7,
  },
  {
    abr: '8h',
    name: 'eight of hearts',
    amt: 8,
  },
  {
    abr: '9h',
    name: 'nine of hearts',
    amt: 9,
  },
  {
    abr: '10h',
    name: 'ten of hearts',
    amt: 10,
  },
  {
    abr: 'jh',
    name: 'jack of hearts',
    amt: 10,
  },
  {
    abr: 'qh',
    name: 'queen of hearts',
    amt: 10,
  },
  {
    abr: 'kh',
    name: 'king of hearts',
    amt: 10,
  },
  {
    abr: 'ah',
    name: 'ace of hearts',
    amt: 0,
  },
  {
    abr: '1s',
    name: 'one of spades',
    amt: 1,
  },
  {
    abr: '2s',
    name: 'two of spades',
    amt: 2,
  },
  {
    abr: '3s',
    name: 'three of spades',
    amt: 3,
  },
  {
    abr: '4s',
    name: 'four of spades',
    amt: 4,
  },
  {
    abr: '5s',
    name: 'five of spades',
    amt: 5,
  },
  {
    abr: '6s',
    name: 'six of spades',
    amt: 6,
  },
  {
    abr: '7s',
    name: 'seven of spades',
    amt: 7,
  },
  {
    abr: '8s',
    name: 'eight of spades',
    amt: 8,
  },
  {
    abr: '9s',
    name: 'nine of spades',
    amt: 9,
  },
  {
    abr: '10s',
    name: 'ten of spades',
    amt: 10,
  },
  {
    abr: 'js',
    name: 'jack of spades',
    amt: 10,
  },
  {
    abr: 'qs',
    name: 'queen of spades',
    amt: 10,
  },
  {
    abr: 'ks',
    name: 'king of spades',
    amt: 10,
  },
  {
    abr: 'as',
    name: 'ace of spades',
    amt: 0,
  },
];

let playerBank = 0;
let dealerBank = 0;

// functionality //
const initialize = () => {
  playerBank = 20;
  dealerBank = 20;

  const playerBankDiv = document.createElement('div');
  const dealerBankDiv = document.createElement('div');
  const bet = document.createElement('div');
  const betAmt = document.createElement('input');
  const deal = document.createElement('div');

  playerBankDiv.innerHTML = `Player Bank: $${playerBank}.00`;
  dealerBankDiv.innerHTML = `Dealer Bank: $${dealerBank}.00`;
  bet.innerHTML = `Bet`;
  deal.innerHTML = 'Deal';

  betAmt.classList.add('bet-amount');
  bet.classList.add('game-button');
  deal.classList.add('game-button');

  topTwo.appendChild(dealerBankDiv);
  bottomTwo.prepend(playerBankDiv);
  betForm.append(bet);
  betForm.append(betAmt);
  bottomTwo.append(deal);

  hide(containerOne);
  removeHide(containerTwo);

  bet.addEventListener('click', (betAmt) => {
    let betNum = document.querySelector('.bet-amount').value;
    console.log(betNum);
  });
};

const betFunc = () => {
  console.log();
};
const dealHand = () => {};

// add hide class
const hide = (div) => {
  div.classList.add('hide');
};

// remove hide class
const removeHide = (div) => {
  div.classList.remove('hide');
};
playButton.addEventListener('click', initialize);

// if player card amount !> 21, cards[i].amt = 11, else, cards[i] = 1

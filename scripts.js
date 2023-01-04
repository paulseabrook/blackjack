// variables for accessing DOM //

const phaseHeader = document.querySelectorAll('.phase-header');
const playButton = document.querySelector('#play');
const containerOne = document.querySelector('.phase-one-container');
const containerTwo = document.querySelector('.phase-two-container');
const containerThree = document.querySelector('.phase-three-container');
const topTwo = document.querySelector(`#phase-two-top`);
const midTwo = document.querySelector('#phase-two-mid');
const bottomTwo = document.querySelector('#phase-two-bottom');
const betForm = document.querySelector('#bet-form');
const cardAmounts = document.querySelector('.card-amounts');
const dealerCards = document.querySelector('.dealer-cards');
const hitStand = document.querySelector('.hit-stand');

// data structures //

let dealerBank;
let playerBank;
let betNum;
let dealerCardNum;
let playerCardNum;

let cards = [
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

  {
    abr: '2c',
    name: 'two of clubs',
    amt: 2,
  },
  {
    abr: '3c',
    name: 'three of clubs',
    amt: 3,
  },
  {
    abr: '4c',
    name: 'four of clubs',
    amt: 4,
  },
  {
    abr: '5c',
    name: 'five of clubs',
    amt: 5,
  },
  {
    abr: '6c',
    name: 'six of clubs',
    amt: 6,
  },
  {
    abr: '7c',
    name: 'seven of clubs',
    amt: 7,
  },
  {
    abr: '8c',
    name: 'eight of clubs',
    amt: 8,
  },
  {
    abr: '9c',
    name: 'nine of clubs',
    amt: 9,
  },
  {
    abr: '10c',
    name: 'ten of clubs',
    amt: 10,
  },
  {
    abr: 'jc',
    name: 'jack of clubs',
    amt: 10,
  },
  {
    abr: 'qc',
    name: 'queen of clubs',
    amt: 10,
  },
  {
    abr: 'kc',
    name: 'king of clubs',
    amt: 10,
  },
  {
    abr: 'ac',
    name: 'ace of clubs',
    amt: 0,
  },
  {
    abr: '2d',
    name: 'two of diamonds',
    amt: 2,
  },
  {
    abr: '3d',
    name: 'three of diamonds',
    amt: 3,
  },
  {
    abr: '4d',
    name: 'four of diamonds',
    amt: 4,
  },
  {
    abr: '5d',
    name: 'five of diamonds',
    amt: 5,
  },
  {
    abr: '6d',
    name: 'six of diamonds',
    amt: 6,
  },
  {
    abr: '7d',
    name: 'seven of diamonds',
    amt: 7,
  },
  {
    abr: '8d',
    name: 'eight of diamonds',
    amt: 8,
  },
  {
    abr: '9d',
    name: 'nine of diamonds',
    amt: 9,
  },
  {
    abr: '10d',
    name: 'ten of diamonds',
    amt: 10,
  },
  {
    abr: 'jd',
    name: 'jack of diamonds',
    amt: 10,
  },
  {
    abr: 'qd',
    name: 'queen of diamonds',
    amt: 10,
  },
  {
    abr: 'kd',
    name: 'king of diamonds',
    amt: 10,
  },
  {
    abr: 'ad',
    name: 'ace of diamonds',
    amt: 0,
  },
];

console.log(cards);

// functionality //
const initialize = () => {
  // initialize for play again

  playerBank = 20;
  dealerBank = 20;
  betNum = 0;

  // https://stackoverflow.com/questions/49555273/how-to-shuffle-an-array-of-objects-in-javascript
  // Fisher-Yates Algorithm

  function shuffleFisherYates(array) {
    let i = array.length;
    while (i--) {
      const ri = Math.floor(Math.random() * i);
      [array[i], array[ri]] = [array[ri], array[i]];
    }
    return array;
  }

  shuffleFisherYates(cards);
  console.log(cards);

  const render = () => {
    // render for going back and forth between phase two and phase three
    const playerBankDiv = document.createElement('div');
    const dealerBankDiv = document.createElement('div');
    const bet = document.createElement('div');
    const betAmt = document.createElement('input');
    const deal = document.createElement('div');
    const betMsg = document.createElement('p');

    playerBankDiv.innerHTML = `Player Bank: $${playerBank}.00`;
    dealerBankDiv.innerHTML = `Dealer Bank: $${dealerBank}.00`;
    bet.innerHTML = `Bet`;
    deal.innerHTML = 'Deal';

    betAmt.classList.add('bet-amount');
    bet.classList.add('game-button');
    deal.classList.add('game-button');

    midTwo.appendChild(betMsg);
    topTwo.appendChild(dealerBankDiv);
    bottomTwo.prepend(playerBankDiv);
    betForm.append(bet);
    betForm.append(betAmt);
    bottomTwo.append(deal);

    hide(containerOne);
    removeHide(containerTwo);

    bet.addEventListener('click', () => {
      hide(phaseHeader[1]);
      betNum = Number(document.querySelector('.bet-amount').value);
      if (!Number.isInteger(betNum) || betNum === 0) {
        betMsg.innerHTML = 'Please bet a whole number.';
      } else if (betNum > playerBank) {
        betMsg.innerHTML = "Woah there! You don't have enough money!";
      } else {
        betMsg.innerHTML = `Your bet is ${betNum}. Click Deal.`;
      }
      console.log(betNum);
    });

    console.log(betNum);

    deal.addEventListener('click', () => {
      if (betNum === 0) {
        hide(phaseHeader[1]);
        betMsg.innerHTML = 'Please place a bet.';
        return;
      }

      playerCardNum = 0;
      dealerCardNum = 0;

      hide(containerTwo);
      removeHide(containerThree);
      const dealerCardAmount = document.createElement('div');
      const playerCardAmount = document.createElement('div');
      const dealerCardOne = document.createElement('div');
      const dealerCardTwo = document.createElement('div');
      const hit = document.createElement('div');
      const stand = document.createElement('div');
      const playerCardOne = document.createElement('div');
      const playerCardTwo = document.createElement('div');

      let cardOne = cards.shift();
      let cardTwo = cards.shift();
      let cardThree = cards.shift();
      let cardFour = cards.shift();
      console.log(cards);
      dealerCardOne.innerHTML = `${cardOne.name}`;
      dealerCardTwo.innerHTML = `${cardTwo.name}`;
      dealerCardNum = cardOne.amt + cardTwo.amt;

      dealerCardOne.classList.add('cards');
      playerCardOne.classList.add('cards');
      dealerCardTwo.classList.add('cards');
      playerCardOne.classList.add('cards');
      hit.classList.add('game-button');
      stand.classList.add('game-button');

      hit.innerHTML = 'Hit';
      stand.innerHTML = 'Stand';
      dealerCardAmount.innerHTML = `Dealer: ${dealerCardNum}`;
      playerCardAmount.innerHTML = `Player: ${playerCardNum}`;

      cardAmounts.appendChild(dealerCardAmount);
      cardAmounts.appendChild(playerCardAmount);
      dealerCards.appendChild(dealerCardOne);
      dealerCards.appendChild(dealerCardTwo);
      hitStand.appendChild(hit);
      hitStand.appendChild(stand);
    });
  };

  render();
};

// add hide class
const hide = (element) => {
  element.classList.add('hide');
};

// remove hide class
const removeHide = (element) => {
  element.classList.remove('hide');
};

playButton.addEventListener('click', initialize);

// if player card amount !> 21, cards[i].amt = 11, else, cards[i] = 1

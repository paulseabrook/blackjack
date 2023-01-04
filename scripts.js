// variables for accessing DOM //
const body = document.querySelector('body');
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
const playerCards = document.querySelector('.player-cards');
const hitStand = document.querySelector('.hit-stand');
const hitButton = document.querySelector;

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
    emj: '❤️',
  },
  {
    abr: '3h',
    name: 'three of hearts',
    amt: 3,
    emj: '❤️',
  },
  {
    abr: '4h',
    name: 'four of hearts',
    amt: 4,
    emj: '❤️',
  },
  {
    abr: '5h',
    name: 'five of hearts',
    amt: 5,
    emj: '❤️',
  },
  {
    abr: '6h',
    name: 'six of hearts',
    amt: 6,
    emj: '❤️',
  },
  {
    abr: '7h',
    name: 'seven of hearts',
    amt: 7,
    emj: '❤️',
  },
  {
    abr: '8h',
    name: 'eight of hearts',
    amt: 8,
    emj: '❤️',
  },
  {
    abr: '9h',
    name: 'nine of hearts',
    amt: 9,
    emj: '❤️',
  },
  {
    abr: '10h',
    name: 'ten of hearts',
    amt: 10,
    emj: '❤️',
  },
  {
    abr: 'jh',
    name: 'jack of hearts',
    amt: 10,
    emj: '❤️',
  },
  {
    abr: 'qh',
    name: 'queen of hearts',
    amt: 10,
    emj: '❤️',
  },
  {
    abr: 'kh',
    name: 'king of hearts',
    amt: 10,
    emj: '❤️',
  },
  {
    abr: 'ah',
    name: 'ace of hearts',
    amt: 0,
    emj: '❤️',
  },

  {
    abr: '2s',
    name: 'two of spades',
    amt: 2,
    emj: '♠️',
  },
  {
    abr: '3s',
    name: 'three of spades',
    amt: 3,
    emj: '♠️',
  },
  {
    abr: '4s',
    name: 'four of spades',
    amt: 4,
    emj: '♠️',
  },
  {
    abr: '5s',
    name: 'five of spades',
    amt: 5,
    emj: '♠️',
  },
  {
    abr: '6s',
    name: 'six of spades',
    amt: 6,
    emj: '♠️',
  },
  {
    abr: '7s',
    name: 'seven of spades',
    amt: 7,
    emj: '♠️',
  },
  {
    abr: '8s',
    name: 'eight of spades',
    amt: 8,
    emj: '♠️',
  },
  {
    abr: '9s',
    name: 'nine of spades',
    amt: 9,
    emj: '♠️',
  },
  {
    abr: '10s',
    name: 'ten of spades',
    amt: 10,
    emj: '♠️',
  },
  {
    abr: 'js',
    name: 'jack of spades',
    amt: 10,
    emj: '♠️',
  },
  {
    abr: 'qs',
    name: 'queen of spades',
    amt: 10,
    emj: '♠️',
  },
  {
    abr: 'ks',
    name: 'king of spades',
    amt: 10,
    emj: '♠️',
  },
  {
    abr: 'as',
    name: 'ace of spades',
    amt: 0,
    emj: '♠️',
  },

  {
    abr: '2c',
    name: 'two of clubs',
    amt: 2,
    emj: '♣️',
  },
  {
    abr: '3c',
    name: 'three of clubs',
    amt: 3,
    emj: '♣️',
  },
  {
    abr: '4c',
    name: 'four of clubs',
    amt: 4,
    emj: '♣️',
  },
  {
    abr: '5c',
    name: 'five of clubs',
    amt: 5,
    emj: '♣️',
  },
  {
    abr: '6c',
    name: 'six of clubs',
    amt: 6,
    emj: '♣️',
  },
  {
    abr: '7c',
    name: 'seven of clubs',
    amt: 7,
    emj: '♣️',
  },
  {
    abr: '8c',
    name: 'eight of clubs',
    amt: 8,
    emj: '♣️',
  },
  {
    abr: '9c',
    name: 'nine of clubs',
    amt: 9,
    emj: '♣️',
  },
  {
    abr: '10c',
    name: 'ten of clubs',
    amt: 10,
    emj: '♣️',
  },
  {
    abr: 'jc',
    name: 'jack of clubs',
    amt: 10,
    emj: '♣️',
  },
  {
    abr: 'qc',
    name: 'queen of clubs',
    amt: 10,
    emj: '♣️',
  },
  {
    abr: 'kc',
    name: 'king of clubs',
    amt: 10,
    emj: '♣️',
  },
  {
    abr: 'ac',
    name: 'ace of clubs',
    amt: 0,
    emj: '♣️',
  },
  {
    abr: '2d',
    name: 'two of diamonds',
    amt: 2,
    emj: '♦️',
  },
  {
    abr: '3d',
    name: 'three of diamonds',
    amt: 3,
    emj: '♦',
  },
  {
    abr: '4d',
    name: 'four of diamonds',
    amt: 4,
    emj: '♦',
  },
  {
    abr: '5d',
    name: 'five of diamonds',
    amt: 5,
    emj: '♦',
  },
  {
    abr: '6d',
    name: 'six of diamonds',
    amt: 6,
    emj: '♦',
  },
  {
    abr: '7d',
    name: 'seven of diamonds',
    amt: 7,
    emj: '♦',
  },
  {
    abr: '8d',
    name: 'eight of diamonds',
    amt: 8,
    emj: '♦',
  },
  {
    abr: '9d',
    name: 'nine of diamonds',
    amt: 9,
    emj: '♦',
  },
  {
    abr: '10d',
    name: 'ten of diamonds',
    amt: 10,
    emj: '♦',
  },
  {
    abr: 'jd',
    name: 'jack of diamonds',
    amt: 10,
    emj: '♦',
  },
  {
    abr: 'qd',
    name: 'queen of diamonds',
    amt: 10,
    emj: '♦',
  },
  {
    abr: 'kd',
    name: 'king of diamonds',
    amt: 10,
    emj: '♦',
  },
  {
    abr: 'ad',
    name: 'ace of diamonds',
    amt: 0,
    emj: '♦',
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

  const playerBankDiv = document.createElement('div');
  const dealerBankDiv = document.createElement('div');
  const bet = document.createElement('div');
  const betAmt = document.createElement('input');
  const deal = document.createElement('div');
  const betMsg = document.createElement('p');
  const dealerCardAmount = document.createElement('div');
  const playerCardAmount = document.createElement('div');
  const dealerCardOne = document.createElement('div');
  const dealerCardTwo = document.createElement('div');
  const hit = document.createElement('div');
  const stand = document.createElement('div');
  const playerCardOne = document.createElement('div');
  const playerCardTwo = document.createElement('div');

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

  const render = () => {
    // render for going back and forth between phase two and phase three
    playerBankDiv.innerHTML = `Player Bank: $${playerBank}.00`;
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

      playerCardOne.innerHTML = `${cardOne.name} ${cardOne.emj}`;
      playerCardTwo.innerHTML = `${cardTwo.name} ${cardTwo.emj}`;
      dealerCardNum = cardOne.amt + cardTwo.amt;

      dealerCardOne.innerHTML = `${cardThree.name} ${cardThree.emj}`;
      dealerCardTwo.innerHTML = `${cardFour.name} ${cardFour.emj}`;
      playerCardNum = cardThree.amt + cardFour.amt;

      dealerCardOne.classList.add('cards');
      playerCardOne.classList.add('cards');
      dealerCardTwo.classList.add('cards');
      playerCardTwo.classList.add('cards');
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
      playerCards.appendChild(playerCardOne);
      playerCards.appendChild(playerCardTwo);
      hitStand.appendChild(hit);
      hitStand.appendChild(stand);

      hit.addEventListener('click', () => {
        const newCardDiv = document.createElement('div');
        const newCard = cards.shift();
        newCardDiv.classList.add('cards');
        newCardDiv.innerHTML = `${newCard.name} ${newCard.emj}`;
        playerCardNum += newCard.amt;
        playerCardAmount.innerHTML = `Player: ${playerCardNum}`;
        playerCards.appendChild(newCardDiv);
        if (playerCardNum > 21) {
          hide(containerThree);
          const bust = document.createElement('div');
          // may want to clean up bust styling
          bust.classList.add('phase-header');
          bust.innerHTML = 'You busted.';
          document.body.appendChild(bust);
          playerBank -= betNum;
          if (playerBank === 0) {
            // phase four code
            console.log('phaseFour');
          } else {
            setTimeout(() => {
              render(playerBank);
            }, 3000);
          }
        }
      });

      stand.addEventListener;
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

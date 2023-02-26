// variables for accessing DOM //
const body = document.querySelector('body')
const phaseHeader = document.querySelectorAll('.phase-header')
const playButton = document.querySelector('#play')
const containerOne = document.querySelector('.phase-one-container')
const containerTwo = document.querySelector('.phase-two-container')
const containerThree = document.querySelector('.phase-three-container')
const topTwo = document.querySelector(`#phase-two-top`)
const midTwo = document.querySelector('#phase-two-mid')
const bottomTwo = document.querySelector('#phase-two-bottom')
const betForm = document.querySelector('#bet-form')
const cardAmounts = document.querySelector('.card-amounts')
const dealerCards = document.querySelector('.dealer-cards')
const playerCards = document.querySelector('.player-cards')
const hitStand = document.querySelector('.hit-stand')
const containerFour = document.querySelector('.phase-four-container')

// data structures //
let dealerBank
let playerBank
let betNum
let dealerCardNum
let playerCardNum
let newPlayerCard
let newDealerCard
let cardOne
let cardTwo
let cardThree
let cardFour
let cards = [
  {
    abr: '2h',
    name: 'two of hearts',
    amt: 2,
    emj: '❤️',
    img: 'https://deckofcardsapi.com/static/img/2H.png',
  },
  {
    abr: '3h',
    name: 'three of hearts',
    amt: 3,
    emj: '❤️',
    img: 'https://deckofcardsapi.com/static/img/3H.png',
  },
  {
    abr: '4h',
    name: 'four of hearts',
    amt: 4,
    emj: '❤️',
    img: 'https://deckofcardsapi.com/static/img/4H.png',
  },
  {
    abr: '5h',
    name: 'five of hearts',
    amt: 5,
    emj: '❤️',
    img: 'https://deckofcardsapi.com/static/img/5H.png',
  },
  {
    abr: '6h',
    name: 'six of hearts',
    amt: 6,
    emj: '❤️',
    img: 'https://deckofcardsapi.com/static/img/6H.png',
  },
  {
    abr: '7h',
    name: 'seven of hearts',
    amt: 7,
    emj: '❤️',
    img: 'https://deckofcardsapi.com/static/img/7H.png',
  },
  {
    abr: '8h',
    name: 'eight of hearts',
    amt: 8,
    emj: '❤️',
    img: 'https://deckofcardsapi.com/static/img/8H.png',
  },
  {
    abr: '9h',
    name: 'nine of hearts',
    amt: 9,
    emj: '❤️',
    img: 'https://deckofcardsapi.com/static/img/9H.png',
  },
  {
    abr: '10h',
    name: 'ten of hearts',
    amt: 10,
    emj: '❤️',
    img: 'https://deckofcardsapi.com/static/img/0H.png',
  },
  {
    abr: 'jh',
    name: 'jack of hearts',
    amt: 10,
    emj: '❤️',
    img: 'https://deckofcardsapi.com/static/img/JH.png',
  },
  {
    abr: 'qh',
    name: 'queen of hearts',
    amt: 10,
    emj: '❤️',
    img: 'https://deckofcardsapi.com/static/img/QH.png',
  },
  {
    abr: 'kh',
    name: 'king of hearts',
    amt: 10,
    emj: '❤️',
    img: 'https://deckofcardsapi.com/static/img/KH.png',
  },
  {
    abr: 'ah',
    name: 'ace of hearts',
    amt: 11,
    emj: '❤️',
    img: 'https://deckofcardsapi.com/static/img/AH.png',
  },

  {
    abr: '2s',
    name: 'two of spades',
    amt: 2,
    emj: '♠️',
    img: 'https://deckofcardsapi.com/static/img/2S.png',
  },
  {
    abr: '3s',
    name: 'three of spades',
    amt: 3,
    emj: '♠️',
    img: 'https://deckofcardsapi.com/static/img/3S.png',
  },
  {
    abr: '4s',
    name: 'four of spades',
    amt: 4,
    emj: '♠️',
    img: 'https://deckofcardsapi.com/static/img/4S.png',
  },
  {
    abr: '5s',
    name: 'five of spades',
    amt: 5,
    emj: '♠️',
    img: 'https://deckofcardsapi.com/static/img/5S.png',
  },
  {
    abr: '6s',
    name: 'six of spades',
    amt: 6,
    emj: '♠️',
    img: 'https://deckofcardsapi.com/static/img/6S.png',
  },
  {
    abr: '7s',
    name: 'seven of spades',
    amt: 7,
    emj: '♠️',
    img: 'https://deckofcardsapi.com/static/img/7S.png',
  },
  {
    abr: '8s',
    name: 'eight of spades',
    amt: 8,
    emj: '♠️',
    img: 'https://deckofcardsapi.com/static/img/8S.png',
  },
  {
    abr: '9s',
    name: 'nine of spades',
    amt: 9,
    emj: '♠️',
    img: 'https://deckofcardsapi.com/static/img/9S.png',
  },
  {
    abr: '10s',
    name: 'ten of spades',
    amt: 10,
    emj: '♠️',
    img: 'https://deckofcardsapi.com/static/img/0S.png',
  },
  {
    abr: 'js',
    name: 'jack of spades',
    amt: 10,
    emj: '♠️',
    img: 'https://deckofcardsapi.com/static/img/JS.png',
  },
  {
    abr: 'qs',
    name: 'queen of spades',
    amt: 10,
    emj: '♠️',
    img: 'https://deckofcardsapi.com/static/img/QS.png',
  },
  {
    abr: 'ks',
    name: 'king of spades',
    amt: 10,
    emj: '♠️',
    img: 'https://deckofcardsapi.com/static/img/KS.png',
  },
  {
    abr: 'as',
    name: 'ace of spades',
    amt: 11,
    emj: '♠️',
    img: 'https://deckofcardsapi.com/static/img/AS.png',
  },

  {
    abr: '2c',
    name: 'two of clubs',
    amt: 2,
    emj: '♣️',
    img: 'https://deckofcardsapi.com/static/img/2C.png',
  },
  {
    abr: '3c',
    name: 'three of clubs',
    amt: 3,
    emj: '♣️',
    img: 'https://deckofcardsapi.com/static/img/3C.png',
  },
  {
    abr: '4c',
    name: 'four of clubs',
    amt: 4,
    emj: '♣️',
    img: 'https://deckofcardsapi.com/static/img/4C.png',
  },
  {
    abr: '5c',
    name: 'five of clubs',
    amt: 5,
    emj: '♣️',
    img: 'https://deckofcardsapi.com/static/img/5C.png',
  },
  {
    abr: '6c',
    name: 'six of clubs',
    amt: 6,
    emj: '♣️',
    img: 'https://deckofcardsapi.com/static/img/6C.png',
  },
  {
    abr: '7c',
    name: 'seven of clubs',
    amt: 7,
    emj: '♣️',
    img: 'https://deckofcardsapi.com/static/img/7C.png',
  },
  {
    abr: '8c',
    name: 'eight of clubs',
    amt: 8,
    emj: '♣️',
    img: 'https://deckofcardsapi.com/static/img/8C.png',
  },
  {
    abr: '9c',
    name: 'nine of clubs',
    amt: 9,
    emj: '♣️',
    img: 'https://deckofcardsapi.com/static/img/9C.png',
  },
  {
    abr: '10c',
    name: 'ten of clubs',
    amt: 10,
    emj: '♣️',
    img: 'https://deckofcardsapi.com/static/img/0C.png',
  },
  {
    abr: 'jc',
    name: 'jack of clubs',
    amt: 10,
    emj: '♣️',
    img: 'https://deckofcardsapi.com/static/img/JC.png',
  },
  {
    abr: 'qc',
    name: 'queen of clubs',
    amt: 10,
    emj: '♣️',
    img: 'https://deckofcardsapi.com/static/img/QC.png',
  },
  {
    abr: 'kc',
    name: 'king of clubs',
    amt: 10,
    emj: '♣️',
    img: 'https://deckofcardsapi.com/static/img/KC.png',
  },
  {
    abr: 'ac',
    name: 'ace of clubs',
    amt: 11,
    emj: '♣️',
    img: 'https://deckofcardsapi.com/static/img/AC.png',
  },
  {
    abr: '2d',
    name: 'two of diamonds',
    amt: 2,
    emj: '♦️',
    img: 'https://deckofcardsapi.com/static/img/2D.png',
  },
  {
    abr: '3d',
    name: 'three of diamonds',
    amt: 3,
    emj: '♦',
    img: 'https://deckofcardsapi.com/static/img/3D.png',
  },
  {
    abr: '4d',
    name: 'four of diamonds',
    amt: 4,
    emj: '♦',
    img: 'https://deckofcardsapi.com/static/img/4D.png',
  },
  {
    abr: '5d',
    name: 'five of diamonds',
    amt: 5,
    emj: '♦',
    img: 'https://deckofcardsapi.com/static/img/5D.png',
  },
  {
    abr: '6d',
    name: 'six of diamonds',
    amt: 6,
    emj: '♦',
    img: 'https://deckofcardsapi.com/static/img/6D.png',
  },
  {
    abr: '7d',
    name: 'seven of diamonds',
    amt: 7,
    emj: '♦',
    img: 'https://deckofcardsapi.com/static/img/7D.png',
  },
  {
    abr: '8d',
    name: 'eight of diamonds',
    amt: 8,
    emj: '♦',
    img: 'https://deckofcardsapi.com/static/img/8D.png',
  },
  {
    abr: '9d',
    name: 'nine of diamonds',
    amt: 9,
    emj: '♦',
    img: 'https://deckofcardsapi.com/static/img/9D.png',
  },
  {
    abr: '10d',
    name: 'ten of diamonds',
    amt: 10,
    emj: '♦',
    img: 'https://deckofcardsapi.com/static/img/0D.png',
  },
  {
    abr: 'jd',
    name: 'jack of diamonds',
    amt: 10,
    emj: '♦',
    img: 'https://deckofcardsapi.com/static/img/JD.png',
  },
  {
    abr: 'qd',
    name: 'queen of diamonds',
    amt: 10,
    emj: '♦',
    img: 'https://deckofcardsapi.com/static/img/QD.png',
  },
  {
    abr: 'kd',
    name: 'king of diamonds',
    amt: 10,
    emj: '♦',
    img: 'https://deckofcardsapi.com/static/img/KD.png',
  },
  {
    abr: 'ad',
    name: 'ace of diamonds',
    amt: 11,
    emj: '♦',
    img: 'https://deckofcardsapi.com/static/img/AD.png',
  },
]

const initialize = () => {
  playerBank = 20
  dealerBank = 20

  shuffleFisherYates(cards)

  // create our divs
  const playerBankDiv = document.createElement('div')
  const dealerBankDiv = document.createElement('div')
  const bet = document.createElement('div')
  const betAmt = document.createElement('input')
  const deal = document.createElement('div')
  const betMsg = document.createElement('p')
  const dealerCardAmount = document.createElement('div')
  const playerCardAmount = document.createElement('div')
  const dealerCardOne = document.createElement('div')
  const dealerCardTwo = document.createElement('div')
  const hit = document.createElement('div')
  const stand = document.createElement('div')
  const playerCardOne = document.createElement('div')
  const playerCardTwo = document.createElement('div')
  const playAgain = document.createElement('div')

  bet.innerHTML = `Bet`
  deal.innerHTML = 'Deal'

  betAmt.setAttribute('type', 'number')

  // add classLists
  betAmt.classList.add('bet-amount')
  betAmt.classList.add('form-control')
  bet.classList.add('game-button')
  deal.classList.add('game-button')
  dealerCardOne.classList.add('cards')
  playerCardOne.classList.add('cards')
  dealerCardTwo.classList.add('cards')
  playerCardTwo.classList.add('cards')
  hit.classList.add('game-button')
  stand.classList.add('game-button')
  playAgain.classList.add('play-again')
  playAgain.classList.add('game-button')

  // append children
  midTwo.appendChild(betMsg)
  topTwo.appendChild(dealerBankDiv)
  bottomTwo.prepend(playerBankDiv)
  betForm.append(bet)
  betForm.append(betAmt)
  bottomTwo.append(deal)
  cardAmounts.appendChild(dealerCardAmount)
  cardAmounts.appendChild(playerCardAmount)
  dealerCards.appendChild(dealerCardOne)
  dealerCards.appendChild(dealerCardTwo)
  playerCards.appendChild(playerCardOne)
  playerCards.appendChild(playerCardTwo)
  hitStand.appendChild(hit)
  hitStand.appendChild(stand)

  // play again button for phase 4
  playAgain.innerHTML = 'Play Again'
  playAgain.addEventListener('click', () => {
    window.location.reload()
  })

  // function for when player or dealer run out of money
  const getWinner = () => {
    hide(betMsg)
    removeHide(phaseHeader[1])
    hide(containerThree)
    removeHide(containerTwo)

    bottomTwo.style.display = 'none'
    topTwo.style.display = 'none'

    setTimeout(() => {
      if (playerBank <= 0) {
        phaseHeader[1].innerHTML = "You've run out of money. You lose."
        playerBankDiv.innerHTML = `Player Bank: $0.00`
        dealerBankDiv.innerHTML = `Dealer Bank: $40.00`
      } else if (dealerBank <= 0) {
        phaseHeader[1].innerHTML = 'You win Blackjack!'
        playerBankDiv.innerHTML = `Player Bank: $40.00`
        dealerBankDiv.innerHTML = `Dealer Bank: $0.00`
      }

      containerFour.appendChild(phaseHeader[1])
      containerFour.appendChild(playerBankDiv)
      containerFour.appendChild(dealerBankDiv)
      containerFour.appendChild(playAgain)

      hide(betMsg)
      removeHide(phaseHeader[1])
      hide(containerThree)
      hide(containerTwo)
      removeHide(containerFour)

      return
    }, 2500)
  }

  // functionality for when player goes over 21 on a "hit" or "deal" in a rare case.
  const overTwentyOne = () => {
    if (playerCardNum > 21) {
      hit.style.display = 'none'
      stand.style.display = 'none'

      hitCard = ''
      newCard = ''

      playerCardNum = 0

      playerBank -= betNum
      dealerBank += betNum

      playerBankDiv.innerHTML = `Player Bank: $${playerBank}.00`
      dealerBankDiv.innerHTML = `Dealer Bank: $${dealerBank}.00`

      phaseHeader[1].innerHTML = 'You Busted'

      if (playerBank <= 0 || dealerBank <= 0) {
        getWinner()
      } else {
        setTimeout(() => {
          hide(betMsg)
          removeHide(phaseHeader[1])
          hide(containerThree)
          removeHide(containerTwo)
        }, 2500)
      }
    }
  }

  const render = () => {
    removeAllChildNodes(dealerCards)
    removeAllChildNodes(playerCards)

    playerCardNum = 0
    dealerCardNum = 0

    playerBankDiv.innerHTML = `Player Bank: $${playerBank}.00`
    dealerBankDiv.innerHTML = `Dealer Bank: $${dealerBank}.00`

    hide(containerOne)
    hide(containerThree)
    removeHide(containerTwo)

    deal.style.visibility = 'hidden'

    bet.addEventListener('click', () => {
      playerBankDiv.innerHTML = `Player Bank: $${playerBank}.00`
      dealerBankDiv.innerHTML = `Dealer Bank: $${dealerBank}.00`

      hide(phaseHeader[1])

      betNum = Math.abs(parseFloat(betAmt.value))
      if (!Number.isInteger(betNum) || betNum === 0 || betNum === NaN) {
        betMsg.innerHTML = 'Please bet a whole number.'
      } else if (betNum > playerBank) {
        betMsg.innerHTML = "Woah there! You don't have enough money!"
      } else {
        betMsg.innerHTML = `Your bet is ${betNum}. Click Deal.`
        deal.style.visibility = 'visible'
      }

      removeHide(betMsg)
    })

    deal.addEventListener('click', () => {
      if (betNum > dealerBank) {
        betMsg.innerHTML = 'The dealer does not have enough.'
        return
      }

      hit.style.display = 'flex'
      stand.style.display = 'flex'

      reDeck(cards)

      hide(containerTwo)
      removeHide(containerThree)
      removeHide(hit)
      removeHide(stand)

      while (dealerCards.firstChild) {
        dealerCards.removeChild(dealerCards.firstChild)
      }

      while (playerCards.firstChild) {
        playerCards.removeChild(playerCards.firstChild)
      }

      dealerCards.appendChild(dealerCardOne)
      dealerCards.appendChild(dealerCardTwo)
      playerCards.appendChild(playerCardOne)
      playerCards.appendChild(playerCardTwo)

      cardOne = cards.shift()
      reDeck(cards)
      cardTwo = cards.shift()
      reDeck(cards)
      cardThree = cards.shift()
      reDeck(cards)
      cardFour = cards.shift()
      reDeck(cards)

      // playerCardOne.innerHTML = `${cardOne.name} ${cardOne.emj}`
      playerCardOne.style.backgroundImage = `url(${cardOne.img})`
      // playerCardTwo.innerHTML = `${cardTwo.name} ${cardTwo.emj}`
      playerCardTwo.style.backgroundImage = `url(${cardTwo.img})`
      // check if ace
      playerCardNum = isAceDeal(cardOne.amt, cardTwo.amt)
      // dealerCardOne.innerHTML = `${cardThree.name} ${cardThree.emj}`
      dealerCardOne.classList.remove('cards')
      dealerCardOne.style.backgroundImage = ''
      dealerCardOne.classList.add('hidden')

      // dealerCardTwo.innerHTML = `${cardFour.name} ${cardFour.emj}`
      dealerCardTwo.style.backgroundImage = `url(${cardFour.img})`
      dealerCardNum = cardFour.amt

      hit.innerHTML = 'Hit'
      stand.innerHTML = 'Stand'

      dealerCardAmount.innerHTML = `Dealer: ${dealerCardNum}`
      playerCardAmount.innerHTML = `Player: ${playerCardNum}`

      overTwentyOne()
    })

    // hit player functionality
    hit.addEventListener('click', () => {
      let hitCard = document.createElement('div')
      let newCard = cards.shift()

      reDeck(cards)

      hitCard.classList.add('cards')
      // hitCard.innerHTML = `${newCard.name} ${newCard.emj}`
      hitCard.style.backgroundImage = `url(${newCard.img})`

      playerCards.appendChild(hitCard)

      playerCardNum = isAceHit(playerCardNum, newCard.amt)
      playerCardAmount.innerHTML = `Player: ${playerCardNum}`

      overTwentyOne()
    })

    // stand dealer functionality
    stand.addEventListener('click', () => {
      hit.style.display = 'none'
      stand.style.display = 'none'

      dealerCardNum = isAceDeal(cardThree.amt, cardFour.amt)
      dealerCardOne.style.backgroundImage = `url(${cardThree.img})`
      dealerCardAmount.innerHTML = `Dealer: ${dealerCardNum}`
      dealerCardOne.classList.remove('hidden')
      dealerCardOne.classList.add('cards')

      while (dealerCardNum < 17) {
        let newDealCard = cards.shift()
        reDeck(cards)
        dealerCardNum = isAceDeal(dealerCardNum, newDealCard.amt)
        let dealCard = document.createElement('div')
        dealCard.classList.add('cards')
        // dealCard.innerHTML = `${newDealCard.name} ${newDealCard.emj}`
        dealCard.style.backgroundImage = `url(${newDealCard.img})`
        dealerCards.append(dealCard)
      }

      dealerCardAmount.innerHTML = `Dealer: ${dealerCardNum}`

      if (dealerCardNum === playerCardNum) {
        dealerCardNum = 0
        playerCardNum = 0

        playerBankDiv.innerHTML = `Player Bank: $${playerBank}.00`
        dealerBankDiv.innerHTML = `Dealer Bank: $${dealerBank}.00`

        phaseHeader[1].innerHTML = `Push`

        if (playerBank <= 0 || dealerBank <= 0) {
          getWinner()
        } else {
          setTimeout(() => {
            hide(betMsg)
            removeHide(phaseHeader[1])
            hide(containerThree)
            removeHide(containerTwo)
          }, 2500)
        }
      } else if (dealerCardNum === 21 && playerCardNum != 21) {
        dealerCardNum = 0
        playerCardNum = 0

        dealerBank += betNum
        playerBank -= betNum

        playerBankDiv.innerHTML = `Player Bank: $${playerBank}.00`
        dealerBankDiv.innerHTML = `Dealer Bank: $${dealerBank}.00`

        phaseHeader[1].innerHTML = `The dealer won that hand with 21`

        if (playerBank <= 0 || dealerBank <= 0) {
          getWinner()
        } else {
          setTimeout(() => {
            hide(betMsg)
            removeHide(phaseHeader[1])
            hide(containerThree)
            removeHide(containerTwo)
          }, 2500)
        }
      } else if (playerCardNum === 21 && dealerCardNum != 21) {
        dealerCardNum = 0
        playerCardNum = 0

        dealerBank -= betNum * 2
        playerBank += betNum * 2

        playerBankDiv.innerHTML = `Player Bank: $${playerBank}.00`
        dealerBankDiv.innerHTML = `Dealer Bank: $${dealerBank}.00`

        phaseHeader[1].innerHTML = `You got Blackjack!`

        if (playerBank <= 0 || dealerBank <= 0) {
          getWinner()
        } else {
          setTimeout(() => {
            hide(betMsg)
            removeHide(phaseHeader[1])
            hide(containerThree)
            removeHide(containerTwo)
          }, 2500)
        }
      } else if (dealerCardNum > 21) {
        dealerCardNum = 0
        playerCardNum = 0

        dealerBank -= betNum
        playerBank += betNum

        playerBankDiv.innerHTML = `Player Bank: $${playerBank}.00`
        dealerBankDiv.innerHTML = `Dealer Bank: $${dealerBank}.00`

        phaseHeader[1].innerHTML = `Dealer busted! You won that hand!`

        if (playerBank <= 0 || dealerBank <= 0) {
          getWinner()
        } else {
          setTimeout(() => {
            hide(betMsg)
            removeHide(phaseHeader[1])
            hide(containerThree)
            removeHide(containerTwo)
          }, 2500)
        }
      } else if (playerCardNum > dealerCardNum) {
        dealerCardNum = 0
        playerCardNum = 0

        dealerBank -= betNum
        playerBank += betNum

        playerBankDiv.innerHTML = `Player Bank: $${playerBank}.00`
        dealerBankDiv.innerHTML = `Dealer Bank: $${dealerBank}.00`

        phaseHeader[1].innerHTML = `You won that hand!`

        if (playerBank <= 0 || dealerBank <= 0) {
          getWinner()
        } else {
          setTimeout(() => {
            hide(betMsg)
            removeHide(phaseHeader[1])
            hide(containerThree)
            removeHide(containerTwo)
          }, 2500)
        }
      } else if (dealerCardNum > playerCardNum) {
        dealerCardNum = 0
        playerCardNum = 0

        dealerBank += betNum
        playerBank -= betNum

        playerBankDiv.innerHTML = `Player Bank: $${playerBank}.00`
        dealerBankDiv.innerHTML = `Dealer Bank: $${dealerBank}.00`

        phaseHeader[1].innerHTML = `The dealer won that hand.`

        if (playerBank <= 0 || dealerBank <= 0) {
          getWinner()
        } else {
          setTimeout(() => {
            hide(betMsg)
            removeHide(phaseHeader[1])
            hide(containerThree)
            removeHide(containerTwo)
          }, 2500)
        }
      }
      betNum = 0
    })
  }
  render()
}

// https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
// function to remove all children elements from a parent element
const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

// add hide class to an element
const hide = (element) => {
  element.classList.add('hide')
}

// remove hide class from an element
const removeHide = (element) => {
  element.classList.remove('hide')
}

// https://stackoverflow.com/questions/49555273/how-to-shuffle-an-array-of-objects-in-javascript
// Fisher-Yates Algorithm

const shuffleFisherYates = (array) => {
  let i = array.length
  while (i--) {
    const ri = Math.floor(Math.random() * i)
    ;[array[i], array[ri]] = [array[ri], array[i]]
  }
  return array
}

// If the cards run out, put them back into the deck and shuffle them.
const reDeck = (deck) => {
  if (deck.length === 0) {
    let newDeck = []
    newDeck = [
      {
        abr: '2h',
        name: 'two of hearts',
        amt: 2,
        emj: '❤️',
        img: 'https://deckofcardsapi.com/static/img/2H.png',
      },
      {
        abr: '3h',
        name: 'three of hearts',
        amt: 3,
        emj: '❤️',
        img: 'https://deckofcardsapi.com/static/img/3H.png',
      },
      {
        abr: '4h',
        name: 'four of hearts',
        amt: 4,
        emj: '❤️',
        img: 'https://deckofcardsapi.com/static/img/4H.png',
      },
      {
        abr: '5h',
        name: 'five of hearts',
        amt: 5,
        emj: '❤️',
        img: 'https://deckofcardsapi.com/static/img/5H.png',
      },
      {
        abr: '6h',
        name: 'six of hearts',
        amt: 6,
        emj: '❤️',
        img: 'https://deckofcardsapi.com/static/img/6H.png',
      },
      {
        abr: '7h',
        name: 'seven of hearts',
        amt: 7,
        emj: '❤️',
        img: 'https://deckofcardsapi.com/static/img/7H.png',
      },
      {
        abr: '8h',
        name: 'eight of hearts',
        amt: 8,
        emj: '❤️',
        img: 'https://deckofcardsapi.com/static/img/8H.png',
      },
      {
        abr: '9h',
        name: 'nine of hearts',
        amt: 9,
        emj: '❤️',
        img: 'https://deckofcardsapi.com/static/img/9H.png',
      },
      {
        abr: '10h',
        name: 'ten of hearts',
        amt: 10,
        emj: '❤️',
        img: 'https://deckofcardsapi.com/static/img/0H.png',
      },
      {
        abr: 'jh',
        name: 'jack of hearts',
        amt: 10,
        emj: '❤️',
        img: 'https://deckofcardsapi.com/static/img/JH.png',
      },
      {
        abr: 'qh',
        name: 'queen of hearts',
        amt: 10,
        emj: '❤️',
        img: 'https://deckofcardsapi.com/static/img/QH.png',
      },
      {
        abr: 'kh',
        name: 'king of hearts',
        amt: 10,
        emj: '❤️',
        img: 'https://deckofcardsapi.com/static/img/KH.png',
      },
      {
        abr: 'ah',
        name: 'ace of hearts',
        amt: 11,
        emj: '❤️',
        img: 'https://deckofcardsapi.com/static/img/AH.png',
      },

      {
        abr: '2s',
        name: 'two of spades',
        amt: 2,
        emj: '♠️',
        img: 'https://deckofcardsapi.com/static/img/2S.png',
      },
      {
        abr: '3s',
        name: 'three of spades',
        amt: 3,
        emj: '♠️',
        img: 'https://deckofcardsapi.com/static/img/3S.png',
      },
      {
        abr: '4s',
        name: 'four of spades',
        amt: 4,
        emj: '♠️',
        img: 'https://deckofcardsapi.com/static/img/4S.png',
      },
      {
        abr: '5s',
        name: 'five of spades',
        amt: 5,
        emj: '♠️',
        img: 'https://deckofcardsapi.com/static/img/5S.png',
      },
      {
        abr: '6s',
        name: 'six of spades',
        amt: 6,
        emj: '♠️',
        img: 'https://deckofcardsapi.com/static/img/6S.png',
      },
      {
        abr: '7s',
        name: 'seven of spades',
        amt: 7,
        emj: '♠️',
        img: 'https://deckofcardsapi.com/static/img/7S.png',
      },
      {
        abr: '8s',
        name: 'eight of spades',
        amt: 8,
        emj: '♠️',
        img: 'https://deckofcardsapi.com/static/img/8S.png',
      },
      {
        abr: '9s',
        name: 'nine of spades',
        amt: 9,
        emj: '♠️',
        img: 'https://deckofcardsapi.com/static/img/9S.png',
      },
      {
        abr: '10s',
        name: 'ten of spades',
        amt: 10,
        emj: '♠️',
        img: 'https://deckofcardsapi.com/static/img/0S.png',
      },
      {
        abr: 'js',
        name: 'jack of spades',
        amt: 10,
        emj: '♠️',
        img: 'https://deckofcardsapi.com/static/img/JS.png',
      },
      {
        abr: 'qs',
        name: 'queen of spades',
        amt: 10,
        emj: '♠️',
        img: 'https://deckofcardsapi.com/static/img/QS.png',
      },
      {
        abr: 'ks',
        name: 'king of spades',
        amt: 10,
        emj: '♠️',
        img: 'https://deckofcardsapi.com/static/img/KS.png',
      },
      {
        abr: 'as',
        name: 'ace of spades',
        amt: 11,
        emj: '♠️',
        img: 'https://deckofcardsapi.com/static/img/AS.png',
      },

      {
        abr: '2c',
        name: 'two of clubs',
        amt: 2,
        emj: '♣️',
        img: 'https://deckofcardsapi.com/static/img/2C.png',
      },
      {
        abr: '3c',
        name: 'three of clubs',
        amt: 3,
        emj: '♣️',
        img: 'https://deckofcardsapi.com/static/img/3C.png',
      },
      {
        abr: '4c',
        name: 'four of clubs',
        amt: 4,
        emj: '♣️',
        img: 'https://deckofcardsapi.com/static/img/4C.png',
      },
      {
        abr: '5c',
        name: 'five of clubs',
        amt: 5,
        emj: '♣️',
        img: 'https://deckofcardsapi.com/static/img/5C.png',
      },
      {
        abr: '6c',
        name: 'six of clubs',
        amt: 6,
        emj: '♣️',
        img: 'https://deckofcardsapi.com/static/img/6C.png',
      },
      {
        abr: '7c',
        name: 'seven of clubs',
        amt: 7,
        emj: '♣️',
        img: 'https://deckofcardsapi.com/static/img/7C.png',
      },
      {
        abr: '8c',
        name: 'eight of clubs',
        amt: 8,
        emj: '♣️',
        img: 'https://deckofcardsapi.com/static/img/8C.png',
      },
      {
        abr: '9c',
        name: 'nine of clubs',
        amt: 9,
        emj: '♣️',
        img: 'https://deckofcardsapi.com/static/img/9C.png',
      },
      {
        abr: '10c',
        name: 'ten of clubs',
        amt: 10,
        emj: '♣️',
        img: 'https://deckofcardsapi.com/static/img/0C.png',
      },
      {
        abr: 'jc',
        name: 'jack of clubs',
        amt: 10,
        emj: '♣️',
        img: 'https://deckofcardsapi.com/static/img/JC.png',
      },
      {
        abr: 'qc',
        name: 'queen of clubs',
        amt: 10,
        emj: '♣️',
        img: 'https://deckofcardsapi.com/static/img/QC.png',
      },
      {
        abr: 'kc',
        name: 'king of clubs',
        amt: 10,
        emj: '♣️',
        img: 'https://deckofcardsapi.com/static/img/KC.png',
      },
      {
        abr: 'ac',
        name: 'ace of clubs',
        amt: 11,
        emj: '♣️',
        img: 'https://deckofcardsapi.com/static/img/AC.png',
      },
      {
        abr: '2d',
        name: 'two of diamonds',
        amt: 2,
        emj: '♦️',
        img: 'https://deckofcardsapi.com/static/img/2D.png',
      },
      {
        abr: '3d',
        name: 'three of diamonds',
        amt: 3,
        emj: '♦',
        img: 'https://deckofcardsapi.com/static/img/3D.png',
      },
      {
        abr: '4d',
        name: 'four of diamonds',
        amt: 4,
        emj: '♦',
        img: 'https://deckofcardsapi.com/static/img/4D.png',
      },
      {
        abr: '5d',
        name: 'five of diamonds',
        amt: 5,
        emj: '♦',
        img: 'https://deckofcardsapi.com/static/img/5D.png',
      },
      {
        abr: '6d',
        name: 'six of diamonds',
        amt: 6,
        emj: '♦',
        img: 'https://deckofcardsapi.com/static/img/6D.png',
      },
      {
        abr: '7d',
        name: 'seven of diamonds',
        amt: 7,
        emj: '♦',
        img: 'https://deckofcardsapi.com/static/img/7D.png',
      },
      {
        abr: '8d',
        name: 'eight of diamonds',
        amt: 8,
        emj: '♦',
        img: 'https://deckofcardsapi.com/static/img/8D.png',
      },
      {
        abr: '9d',
        name: 'nine of diamonds',
        amt: 9,
        emj: '♦',
        img: 'https://deckofcardsapi.com/static/img/9D.png',
      },
      {
        abr: '10d',
        name: 'ten of diamonds',
        amt: 10,
        emj: '♦',
        img: 'https://deckofcardsapi.com/static/img/0D.png',
      },
      {
        abr: 'jd',
        name: 'jack of diamonds',
        amt: 10,
        emj: '♦',
        img: 'https://deckofcardsapi.com/static/img/JD.png',
      },
      {
        abr: 'qd',
        name: 'queen of diamonds',
        amt: 10,
        emj: '♦',
        img: 'https://deckofcardsapi.com/static/img/QD.png',
      },
      {
        abr: 'kd',
        name: 'king of diamonds',
        amt: 10,
        emj: '♦',
        img: 'https://deckofcardsapi.com/static/img/KD.png',
      },
      {
        abr: 'ad',
        name: 'ace of diamonds',
        amt: 11,
        emj: '♦',
        img: 'https://deckofcardsapi.com/static/img/AD.png',
      },
    ]
    shuffleFisherYates(newDeck)
    cards = newDeck
  }
}

// functionality for ace being 1 or 11 upon initial deal
const isAceDeal = (cardOne, cardTwo) => {
  if (cardOne + cardTwo > 21) {
    if (cardOne == 11 || cardTwo == 11) {
      return cardOne + cardTwo - 10
    }
  }
  return cardOne + cardTwo
}

// functionality for ace being 1 or 11 upon hitting
const isAceHit = (cardNum, newCard) => {
  if (cardNum + newCard > 21) {
    if (newCard == 11) {
      return (cardNum += newCard - 10)
    }
  }
  return (cardNum += newCard)
}

// event listener for initial play button
playButton.addEventListener('click', initialize)

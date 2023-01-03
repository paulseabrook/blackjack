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
];

console.log(cards);

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

function render(array) {
  let i = cards.length;
  while (i--) {
    console.log(cards[i]);
  }
}

render(cards);

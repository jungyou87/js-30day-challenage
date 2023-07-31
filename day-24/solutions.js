// The Mission: Blackjack

// 1. 52 cards
// 2. Proper card point values
// 3. Shuffling feature
// 4. One player versus the dealer
// 5. Player can hit
// 6. If player busts they lose
// 7. If dealer busts player wins
// 8. Dealer never â€œhitsâ€ once they reach 17 points

const rs = require('readline-sync');

const playerMoves = ['Hit', 'Stand'];
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = [
  'Ace',
  'King',
  'Queen',
  'Jack',
  'Nine',
  'Eight',
  'Seven',
  'Six',
  'Five',
  'Four',
  'Three',
  'Two',
];

let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards =[],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

const getCardNumberValue = (card) => {
  switch(card.value){
    case 'Ace':
      return 1;
    case 'Two':
      return 2;
    case 'Three':
      return 3;
    case 'Four':
      return 4;
    case 'Five':
      return 5;
    case 'Six':
      return 6;
    case 'Seven':
      return 7;
    case 'Eight':
      return 8;
    case 'Nine':
      return 9;
    default:
      return 10;
  }
}

const getScore = (cards) => {
  let score = 0;
  let hasAce = false;
  for (let i = 0; i < cards.length; i++) {
    let card = cards[i]
    score += getCardNumberValue(card);
    if (card.value === 'Ace') {
      hasAce = true;
    }
  }
  if (hasAce && score + 10 <= 21){
    return score + 10;
  }
  return score;
}

const shuffleDeck = (deck) => {
  for (let i = 0; i < deck.length; i++) {
    let swapIndex = Math.trunc(Math.random() * deck.length);
    [deck[swapIndex], deck[i]] = [deck[i], deck[swapIndex]];
  }
}

const getCards = (card) => `${card.value} of ${card.suit}`;

const updateScores = () => {
  dealerScore = getScore(dealerCards);
  playerScore = getScore(playerCards);
}

const showStatus = () => {
  console.clear();
  let dealerCardString = '';
  for (let i  = 0; i < dealerCards.length; i++) {
    dealerCardString += getCards(dealerCards[i]) + '\n';
  }

  let playerCardString = '';
  for (let i  = 0; i < playerCards.length; i++){
    playerCardString += getCards(playerCards[i]) + '   \n';
  }

  updateScores();

  console.log(`
Dealer has:
${dealerCardString}
(Score: ${dealerScore})

Player has:
${playerCardString}
(Score: ${playerScore})
=======================
`);

  if (gameOver) {
    const whoWon = playerWon ?  'You Win': 'Dealer Wins';
    console.log(whoWon);
  }
}

const createDeck = () => {
  let deck = [];
  for (let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
    for (let valueIndex = 0; valueIndex < values.length; valueIndex++) {
      let card = {
        value: values[valueIndex],
        suit: suits[suitIndex],
      };
      deck.push(card);
    }
  }
  // console.log(deck);
  return deck;
}

const getNextCard = () => deck.shift();

const checkForEndGame = () => {
  updateScores();

  if (gameOver) {
    while (dealerScore < playerScore && playerScore <= 21 && dealerScore <= 17){
      console.log(dealerScore);
      dealerCards.push(getNextCard());
      updateScores();
    }
  }

  if (playerScore > 21) {
    playerWon = false;
    gameOver = true;
  } else if (dealerScore > 21) {
    playerWon = true;
    gameOver = true;
  } else if (gameOver) {
    playerWon = playerScore > dealerScore;
  }
}

const newGame = () => {
  rs.keyIn(`
Welcome to BlackJack
Press any key to deal the cards... `);
  gameStarted = true;
  gameOver = false;
  playerWon = false;

  deck = createDeck();
  shuffleDeck(deck);

  dealerCards = [getNextCard(), getNextCard()];
  playerCards = [getNextCard(), getNextCard()];

  showStatus();
};

const hit = () => {
  playerCards.push(getNextCard());
  checkForEndGame();
  showStatus();
};

const stand = () => {
  gameOver = true;
  checkForEndGame();
  showStatus();
};

const promptPlayerMove = () => {
  while (!gameOver) {
    const move = rs.keyInSelect(
        playerMoves, 'What would you like to do? ',
        { cancel: false }
    );
    playerMoves[move] === playerMoves[0] ? hit() : stand();
  }
};

newGame();
promptPlayerMove();
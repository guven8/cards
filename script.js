var pokerTable = document.querySelector('.poker-table');
var numOfPlayers = document.getElementById('num-of-players');
var numOfCards = document.getElementById('num-of-cards');

function card(num, suit) {
  var card = document.createElement('div');
  card.innerHTML = num + ' ' + suit;
  card.setAttribute('class', 'card ' + suit);
  return card;
}

function playersDeck(playerNum) {
  var _playersDeck = document.createElement('div');
  _playersDeck.classList.add('players-deck');
  return _playersDeck;
}

function getDeckOfCards() {
  var nums = 'ace_2_3_4_5_6_7_8_9_10_jack_queen_king'.split('_');
  var suits = 'hearts_clubs_diamonds_spades'.split('_');
  var deckOfCards = [];
  for (var i = 0, l = nums.length; i < l; i++) {
    for (var j = 0, p = suits.length; j < p; j++) {
      deckOfCards.push(card(nums[i], suits[j]));
    }
  }
  return deckOfCards;
}

function dealCards(numOfPlayers, numOfCards) {
  var deckOfCards = getDeckOfCards();
  var dealtCards = [];
  for (var i = 0, l = numOfPlayers; i < l; i++ ) {
    
  }
  for (var i = 0, l = numOfPlayers * numOfCards; i < l; i++) {
    dealtCards.push(deckOfCards[i]);
  }
  return dealtCards;
}

document.getElementById('deal').addEventListener('click', function() {
  var dealtCards = dealCards(numOfPlayers.value, numOfCards.value);
  console.log(dealtCards);
  dealtCards.forEach((card) => {
    pokerTable.appendChild(card);
  });

  console.log(numOfPlayers.value);
  console.log(numOfCards.value);
})

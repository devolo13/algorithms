import { suits, ranks, emojis } from './cards.mjs';

/* 
  Deck of Cards

  From the imported arrays, create a function that
  builds a deck of cards. The deck will be a one-
  dimensional array of objects, such that each object
  represents one card in the deck.

  Example card: { suit: 'hearts', rank: '2' };
  
  Bonus: Use the included emoji matrix array to add
  a third property to each card.

  Example card with emoji property:
  { suit: 'hearts', rank: '2', emoji: '🂲' };
*/

function buildDeck(suits, ranks, emojis) {
  let deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      var card = { suit: suits[i] };
      card['rank'] = ranks[j];
      card['emoji'] = emojis[i][j];
      deck.push(card);
    }
  }
  return deck;
}

/* 
  Shuffle
  
  Using the built deck, create a shuffle function
  implementing the Fisher-Yates shuffle algorithm.
  Return the deck after the shuffle.
  see: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
*/

function shuffleDeck(deck) {
  for (let i = 0; i < deck.length; i++){
    let random = (Math.floor(Math.random()*deck.length));
    let temp = deck[i];
    deck[i]=deck[random];
    deck[random]=temp;
  }
  return deck;
}

var deck = buildDeck(suits, ranks, emojis);
console.log(shuffleDeck(deck));
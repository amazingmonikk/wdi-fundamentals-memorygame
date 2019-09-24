// variables - to store card objects and to store cards in play
var cards = [
{
rank: "queen",
suit: "hearts",
cardImage:"images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}

];

let cardsInPlay = [];

//function checks if a match is present
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  	alert("You found a match!");
	} else {
  	alert("Sorry, try again.");
	}
}


//when we click on a card to flip it over, displays card and holds result
function flipCard() {
	var cardId = this.getAttribute('data-id')
	var card = cards[cardId]
	
	this.setAttribute('src', card.cardImage);
	console.log(this)
	cardsInPlay.push(card.rank)
	
	//console.log("User flipped " + cards[cardId].rank)
	// console.log(cards[cardId].cardImage)
	// console.log(cards[cardId].suit)
	// cardsInPlay.push(cards[cardId].rank)
	
	
	if(cardsInPlay.length > 1){
	checkForMatch()
}
}


//function to create game board
function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i); 
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard() 



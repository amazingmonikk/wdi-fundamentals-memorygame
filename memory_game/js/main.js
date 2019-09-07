let cards = ["queen", "queen", "king", "king"];

let cardsInPlay = [];
let cardOne = cards[1];
cardsInPlay.push(cardOne);

console.log("User flipped queen")


let cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped king")

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
 	alert ("You find a match!");
 	} alert("Sorry, try again")

}
//list all card options
const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
];
// ----------------------------------------
cardArray.sort(() => 0.5 - Math.random());
// console.log(cardArray);

const gridDisplay = document.querySelector("#grid");
// console.log(gridDisplay)
const resultDisplay = document.querySelector('#result');
// console.log(resultDisplay)
const cardsChosen = [];
const cardsChosenIds = [];
const cardsWon = [];
// -------------------------------
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    // console.log(card)
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
  }
}

createBoard();
// const x = createElement('<p>hi</p>')

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  // console.log("check for match!");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  
  if (optionOneId === optionTwoId) {
    alert("You clicked the same card twice");
    cardsChosen.pop();
    cardsChosenIds.pop();
    return cardsChosen, cardsChosenIds;
  }
  
  if (cardsChosen[0] === cardsChosen[1]) {
    alert("you found a match");
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    
    cardsWon.push(cardsChosen);
    resultDisplay.innerHTML = `${cardsWon.length}`;
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("Sorry try again");
  }
  cardsChosen.length = 0;
  cardsChosenIds.length = 0;
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  // console.log(cardArray[cardId].name);
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  // console.log(cardsChosen);
  // console.log(cardsChosenIds);
  
  // console.log(`clicked ${cardId}`);
  // console.log(cardsChosen)
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

// resultDisplay.innerHTML = 'hi';
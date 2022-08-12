document.addEventListener('DOMContentLoaded', () => {

  //card options

  const cardArray = [
    {
      name: "bird1",
      img: "images/bird1.jpg",
    },
    {
      name: "bird1",
      img: "images/bird1.jpg",
    },
    {
      name: "bird2",
      img: "images/bird2.jpg",
    },
    {
      name: "bird2",
      img: "images/bird2.jpg",
    },
    {
      name: "bird3",
      img: "images/bird3.jpg",
    },
    {
      name: "bird3",
      img: "images/bird3.jpg",
    },
    {
      name: "bird4",
      img: "images/bird4.jpg",
    },
    {
      name: "bird4",
      img: "images/bird4.jpg",
    },
    {
      name: "bird5",
      img: "images/bird5.jpg",
    },
    {
      name: "bird5",
      img: "images/bird5.jpg",
    },
    {
      name: "bird6",
      img: "images/bird6.jpg",
    },
    {
      name: "bird6",
      img: "images/bird6.jpg",
    },
    {
      name: "bird7",
      img: "images/bird7.jpg",
    },
    {
      name: "bird7",
      img: "images/bird7.jpg",
    },
    {
      name: "bird8",
      img: "images/bird8.jpg",
    },
    {
      name: "bird8",
      img: "images/bird8.jpg",
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []


  
  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'images/b.webp');
      card.setAttribute('data-id', i);
      card.setAttribute('class','card');
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }


    //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
     if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/b.webp')
      cards[optionTwoId].setAttribute('src', 'images/b.webp')
      alert('You have clicked the same image!')
    }
     if (cardsChosen[0] === cardsChosen[1]) {


      cards[optionOneId].setAttribute('src', 'images/background.webp')
      cards[optionTwoId].setAttribute('src', 'images/background.webp')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/b.webp')
      cards[optionTwoId].setAttribute('src', 'images/b.webp')

    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
     document.querySelector(".gameover").innerHTML =
      "<b> You found all the birds! </b>";
    document.querySelector(".gameover").style.display = "block";

    }
  }


    //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})

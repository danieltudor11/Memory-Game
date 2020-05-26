document.addEventListener('DOMContentLoaded', () => {

	//card options
	const cardArray = [
		{
			name: 'audi',
			img: 'images/audi.png'
		},
		{
			name: 'audi',
			img: 'images/audi.png'
		},
		{
			name: 'bugatti',
			img: 'images/bugatti.png'
		},
		{
			name: 'bugatti',
			img: 'images/bugatti.png'
		},
		{
			name: 'ferrari',
			img: 'images/ferrari.png'
		},
		{
			name: 'ferrari',
			img: 'images/ferrari.png'
		},
		{
			name: 'lambo',
			img: 'images/lambo.png'
		},
		{
			name: 'lambo',
			img: 'images/lambo.png'
		},
		{
			name: 'rolls',
			img: 'images/rolls.png'
		},
		{
			name: 'rolls',
			img: 'images/rolls.png'
		},
		{
			name: 'tesla',
			img: 'images/tesla.png'
		},
		{
			name: 'tesla',
			img: 'images/tesla.png'
		}	
	]

	cardArray.sort(() => 0.5 - Math.random())

	const grid = document.querySelector('.grid');
	const resultDisplay = document.querySelector('#result')
	resultDisplay.textContent = 'Try and find all the matching cards'
	var cardsChosen = []
	var cardsChosenId = []
	var cardsWon = []
	var tries = 0;

	//create board
	function createBoard() {
		for (let i = 0; i < cardArray.length; i++){
			var card = document.createElement('img')
			card.setAttribute('src', 'images/colors.png')
			card.setAttribute('data-id', i)
			card.addEventListener('click', flipCard)
			grid.appendChild(card)
		}
	}


	//check for matches
	function checkForMatch() {
		tries++;
		var cards = document.querySelectorAll('img')
		const optionOneId = cardsChosenId[0]
		const optionTwoId = cardsChosenId[1]
		if (cardsChosen[0] === cardsChosen[1]) {
			cards[optionOneId].setAttribute('src', 'images/blue.png')
			cards[optionTwoId].setAttribute('src', 'images/blue.png')
			cardsWon.push(cardsChosen)
		}
		else {
			cards[optionOneId].setAttribute('src', 'images/colors.png')
			cards[optionTwoId].setAttribute('src', 'images/colors.png')
		}
		cardsChosen = []
		cardsChosenId = []
		const cardsLeft = 6 - cardsWon.length
		resultDisplay.textContent = 'Matches left: ' + cardsLeft
		if (cardsWon.length === cardArray.length/2) {
			resultDisplay.textContent = 'Congratulations! You found all the matches!'
		}
	}



	//flip the card
	function flipCard() {
		var cardId = this.getAttribute('data-id')
		cardsChosen.push(cardArray[cardId].name)
		cardsChosenId.push(cardId)
		this.setAttribute('src', cardArray[cardId].img)
		if (cardsChosen.length === 2){
			setTimeout(checkForMatch, 300)
		}
	}

	createBoard()


})
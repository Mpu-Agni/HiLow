type GameState = {
	secretNumber: number;
	attempts?: number;
	last_guess?: number | null;
	start_date?: number;
};

export class gameHilow {
	async gameInit() {
		if (localStorage.getItem('gameState')) {
			console.log('Game already initialized');
			return;
		}
		let secretNumber = await this.getRandomNumber();
		let gameState: GameState = {
			secretNumber,
			start_date: Date.now()
		};

		localStorage.setItem('gameState', JSON.stringify(gameState));
		console.log('Game initialized with secret number:', secretNumber);
	}

	async gameReset() {
		localStorage.removeItem('gameState');
	}

	async getRandomNumber() {
		let difficulty = localStorage.getItem('difficulty') || 'easy';
		let max = 100;
		if (difficulty === 'medium') {
			max = 10000;
		} else if (difficulty === 'hard') {
			max = 1000000;
		}

		return Math.floor(Math.random() * max) + 1;
	}

	makeGuess(guess: number) {
		let gameStateStr = localStorage.getItem('gameState');
		if (!gameStateStr) {
			throw new Error('Game not initialized');
		}

		let gameState: GameState = JSON.parse(gameStateStr);

		gameState.attempts = (gameState.attempts || 0) + 1;
		gameState.last_guess = guess;
		localStorage.setItem('gameState', JSON.stringify(gameState));

		if (Number(guess) < gameState.secretNumber) {
			return {
				isTrue: false,
				message: 'Too low! Try again.'
			};
		} else if (Number(guess) > gameState.secretNumber) {
			return {
				isTrue: false,
				message: 'Too high! Try again.'
			};
		} else {
			this.gameReset();
			this.gameInit();
			return {
				isTrue: true,
				message: `Congratulations! You've guessed the number in ${gameState.attempts} attempts.`
			};
		}
	}
}

type GameState = {
	secretNumber: number;
	attempts?: number;
	last_guess?: number | null;
	start_date?: number;
};

type History = {
	guess: number;
	attempts: number;
	difficulty: string;
	rank: string;
	date: string;
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

		const isValid = true;

		if (Number(guess) < gameState.secretNumber) {
			return {
				isTrue: false,
				message: 'Too low! Try again.',
				isValid
			};
		} else if (Number(guess) > gameState.secretNumber) {
			return {
				isTrue: false,
				message: 'Too high! Try again.',
				isValid
			};
		} else if (Number(guess) === gameState.secretNumber) {
			// this.gameReset();
			// this.gameInit();
			// this.calculatePoints();
			return {
				isTrue: true,
				message: `Congratulations! You've guessed the number in ${gameState.attempts} attempts.`,
				isValid
			};
		} else {
			return {
				isTrue: false,
				message: 'Invalid guess. Please enter a number.',
				isValid: false
			};
		}
	}

	getMaxNumber() {
		let difficulty = localStorage.getItem('difficulty') || 'easy';
		if (difficulty === 'medium') {
			return 10000;
		} else if (difficulty === 'hard') {
			return 1000000;
		} else {
			return 100;
		}
	}

	calculatePoints() {
		let gameStateStr = localStorage.getItem('gameState');
		if (!gameStateStr) {
			throw new Error('Game not initialized');
		}

		let gameState: GameState = JSON.parse(gameStateStr);
		let attempts = gameState.attempts || 0;
		let maxNumber = this.getMaxNumber();
		let baseScore = maxNumber;
		let n_opt = Math.ceil(Math.log2(maxNumber));

		let score: number;

		if (attempts <= n_opt) {
			score = baseScore;
		} else {
			score = Math.max(0, Math.floor(baseScore * (n_opt / attempts)));
		}

		let ratio = attempts / n_opt;
		let rank: string;

		if (ratio <= 1) {
			rank = 'S';
		} else if (ratio <= 1.5) {
			rank = 'A';
		} else if (ratio <= 2) {
			rank = 'B';
		} else if (ratio <= 3) {
			rank = 'C';
		} else {
			rank = 'D';
		}

		return {
			attempts,
			score,
			rank
		};
	}

	addHistory() {
		let gameHistoryStr = localStorage.getItem('gameHistory');
		let gameHistory: History[] = gameHistoryStr ? JSON.parse(gameHistoryStr) : [];

		let currentGameStateStr = localStorage.getItem('gameState');
		if (!currentGameStateStr) {
			throw new Error('Game not initialized');
		}
		let currentGameState: GameState = JSON.parse(currentGameStateStr);

		let newEntry: History = {
			guess: currentGameState.last_guess || 0,
			attempts: currentGameState.attempts || 0,
			difficulty: localStorage.getItem('difficulty') || 'easy',
			rank: this.calculatePoints().rank,
			date: new Date(currentGameState.start_date || Date.now()).toLocaleDateString('en-GB', {
				day: '2-digit',
				month: 'long',
				year: 'numeric'
			})
		};

		// gameHistory.push(newEntry);
		gameHistory.unshift(newEntry);
		if (gameHistory.length > 10) {
			gameHistory.pop();
		}

		localStorage.setItem('gameHistory', JSON.stringify(gameHistory));
	}

	getHistory() {
		let gameHistoryStr = localStorage.getItem('gameHistory');
		console.log('Game history:', gameHistoryStr);
		return gameHistoryStr ? JSON.parse(gameHistoryStr) : [];
	}

	deleteAllHistory() {
		localStorage.removeItem('gameHistory');
	}

	finishGame() {
		this.addHistory();
		let data_win = this.calculatePoints();

		this.gameReset();
		this.gameInit();
		return data_win;
	}
}

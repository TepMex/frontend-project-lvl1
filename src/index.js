import readlineSync from 'readline-sync';

const STREAK_TO_WIN = 3;

const gameLoop = (getNextRoundData, userName) => {
  for (let i = 0; i < STREAK_TO_WIN; i += 1) {
    const [question, answer] = getNextRoundData();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const result = userAnswer === answer;

    const message = result ? 'Correct!'
      : `"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`;
    console.log(message);

    if (!result) {
      console.log(`Let's try again, ${userName}!`);
      process.exit(0);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

const runGame = (createGame) => {
  try {
    const game = createGame();

    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log(game.START_MESSAGE);

    gameLoop(game.makeGameRoundData, userName);
  } catch (e) {
    console.log('cannot create game:', e);
  }
};

export default runGame;

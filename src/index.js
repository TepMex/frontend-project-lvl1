import readlineSync from 'readline-sync';

const STREAK_TO_WIN = 3;

const printResult = (userAnswer, correctAnswer, result) => {
  const message = result ? 'Correct!'
    : `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`;
  console.log(message);
};

const gameLoop = (getNextRoundData, userName) => {
  for (let i = 0; i < STREAK_TO_WIN; i += 1) {
    const [question, answer] = getNextRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const result = userAnswer === answer;

    printResult(userAnswer, answer, result);

    if (!result) {
      console.log(`Let's try again, ${userName}!`);
      process.exit(0);
    }
  }
};

export const runGame = (createGame) => {
  try {
    const game = createGame();
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log(game.START_MESSAGE);
    gameLoop(game.makeGameRoundData, userName);
    console.log(`Congratulations, ${userName}!`);
  } catch (e) {
    console.log('cannot create game:', e);
  }
};

export default {
  runGame,
};

import readlineSync from 'readline-sync';
import { Games } from './game-types.js';
import brainEven from './games/brain-even.js';
import brainCalc from './games/brain-calc.js';
import brainGCD from './games/brain-gcd.js';
import brainProgression from './games/brain-progression.js';
import brainPrime from './games/brain-prime.js';

const GameEngines = {
  [Games.EVEN_OR_ODD]: brainEven,
  [Games.CALC]: brainCalc,
  [Games.GCD]: brainGCD,
  [Games.PROGRESSION]: brainProgression,
  [Games.PRIME]: brainPrime,
};

const STREAK_TO_WIN = 3;

const commonWelcome = () => console.log('Welcome to the Brain Games!');

const askForName = () => readlineSync.question('May I have your name? ');

const greetingUser = (name) => console.log(`Hello, ${name}!`);

const askQuestion = (question) => console.log(`Question: ${question}`);

const askForAnswer = () => readlineSync.question('Your answer: ');

const printResult = (userAnswer, correctAnswer, result) => {
  const message = result ? 'Correct!'
    : `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`;
  console.log(message);
};

const gameLoop = (questionFn, userName) => {
  let rightAnswers = 0;

  while (rightAnswers < STREAK_TO_WIN) {
    const [question, answer] = questionFn();
    askQuestion(question);
    const userAnswer = askForAnswer();
    const result = userAnswer === answer;
    printResult(userAnswer, answer, result);

    if (!result) {
      console.log(`Let's try again, ${userName}!`);
      process.exit(0);
    } else {
      rightAnswers += 1;
    }
  }
};

export const initialGreetings = () => {
  commonWelcome();
  const userName = askForName();
  greetingUser(userName);
  return userName;
};

export const runGame = (gameName) => {
  const game = GameEngines[gameName];
  const userName = initialGreetings();
  console.log(game.START_MESSAGE);
  gameLoop(game.getQuestion, userName);
  console.log(`Congratulations, ${userName}!`);
};

export default {
  initialGreetings,
  runGame,
};

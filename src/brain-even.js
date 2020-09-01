import readlineSync from 'readline-sync';

export const printResult = (userAnswer, correctAnswer, result) => {
  const message = result ? 'Correct!'
    : `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`;
  console.log(message);
};

export const askEvenOrNot = () => {
  const num = Math.floor(Math.random() * 100);
  console.log(`Question: ${num}`);
  const correctAnswer = num % 2 ? 'no' : 'yes';
  const userAnswer = readlineSync.question('Your answer: ');
  const result = userAnswer === correctAnswer;
  printResult(userAnswer, correctAnswer, result);
  return result;
};

export const gameLoop = (userName) => {
  let rightAnswers = 0;
  while (rightAnswers < 3) {
    const result = askEvenOrNot();
    if (!result) {
      console.log(`Let's try again, ${userName}!`);
    } else {
      rightAnswers += 1;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

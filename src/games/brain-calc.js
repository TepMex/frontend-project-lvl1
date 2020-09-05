const startMessage = 'What is the result of the expression?';

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[Math.floor(Math.random() * operations.length)];
};

const getRandomNumber = () => Math.floor(Math.random() * 100);

const getQuestion = () => {
  const question = `${getRandomNumber()} ${getRandomOperation()} ${getRandomNumber()}`;
  // eslint-disable-next-line no-eval
  const answer = eval(question).toString();
  return [question, answer];
};

export default {
  getQuestion,
  startMessage,
};

import { getRandomElement, getRandomInt } from '../utils.js';

const START_MESSAGE = 'What is the result of the expression?';

const OPERATIONS = ['+', '-', '*'];

const calculateBinaryOperation = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw Error(`incorrect operation or operands: ${a} ${operation} ${b}`);
  }
};

const makeGameRoundData = () => {
  const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 100);
  const operation = getRandomElement(OPERATIONS);

  const question = `${a} ${operation} ${b}`;
  const answer = calculateBinaryOperation(a, b, operation).toString();
  return [question, answer];
};

export default () => ({
  makeGameRoundData,
  START_MESSAGE,
});

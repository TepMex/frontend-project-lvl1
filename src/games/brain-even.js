import { getRandomInt } from '../utils.js';

const START_MESSAGE = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => !(num % 2);

const makeGameRoundData = () => {
  const question = getRandomInt(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => ({
  makeGameRoundData,
  START_MESSAGE,
});

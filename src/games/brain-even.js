import { getRandomInt, isEven } from '../utils.js';

const START_MESSAGE = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeGameRoundData = () => {
  const question = getRandomInt(0, 100);
  const answer = isEven(question) ? 'no' : 'yes';
  return [question, answer];
};

export default () => ({
  makeGameRoundData,
  START_MESSAGE,
});

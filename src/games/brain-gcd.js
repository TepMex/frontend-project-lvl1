import { getRandomInt } from '../utils.js';

const START_MESSAGE = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const makeGameRoundData = () => {
  const a = getRandomInt(0, 100);
  const b = getRandomInt(0, 100);
  const question = `${a} ${b}`;
  const answer = gcd(a, b).toString();
  return [question, answer];
};

export default () => ({
  makeGameRoundData,
  START_MESSAGE,
});

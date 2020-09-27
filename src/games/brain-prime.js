import { getRandomInt, isPrime } from '../utils.js';

const START_MESSAGE = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generatePrimeNumbers = (from, to) => {
  const result = [];
  for (let i = from; i < to; i += 1) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  return result;
};

const makeGameRoundData = () => {
  const primeNumbers = generatePrimeNumbers(0, 100);
  const question = getRandomInt(0, 100);
  const answer = primeNumbers.includes(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => ({
  makeGameRoundData,
  START_MESSAGE,
});

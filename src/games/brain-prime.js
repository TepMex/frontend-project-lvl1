const startMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const PRIME_NUMBERS = [
  2,
  3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101,
];

const getRandomNumber = () => Math.floor(Math.random() * 100);

const getQuestion = () => {
  const question = getRandomNumber();
  const answer = PRIME_NUMBERS.includes(question) ? 'yes' : 'no';
  return [question, answer];
};

export default {
  getQuestion,
  startMessage,
};

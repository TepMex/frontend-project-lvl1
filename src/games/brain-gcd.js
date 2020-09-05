const startMessage = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const getRandomNumber = () => Math.floor(Math.random() * 100);

const getQuestion = () => {
  const question = Array(2).fill().map(getRandomNumber);
  // eslint-disable-next-line no-eval
  const answer = gcd(question[0], question[1]);
  return [question.join(' '), answer.toString()];
};

export default {
  getQuestion,
  startMessage,
};

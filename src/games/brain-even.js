const startMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestion = () => {
  const question = Math.floor(Math.random() * 100);
  const answer = question % 2 ? 'no' : 'yes';
  return [question, answer];
};

export default {
  getQuestion,
  startMessage,
};

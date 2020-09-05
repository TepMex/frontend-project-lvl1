const startMessage = 'What number is missing in the progression?';

const getRandomNumber = () => Math.floor(Math.random() * 10);

const getProgression = (step, elements) => {
  const start = getRandomNumber();
  return Array(elements).fill().map((_, idx) => start + step * idx);
};

const getQuestion = () => {
  const progression = getProgression(getRandomNumber(), 10);
  const hiddenElIdx = Math.floor(Math.random() * progression.length);
  const answer = progression[hiddenElIdx].toString();
  progression[hiddenElIdx] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default {
  getQuestion,
  startMessage,
};

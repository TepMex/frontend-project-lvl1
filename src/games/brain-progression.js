const START_MESSAGE = 'What number is missing in the progression?';

const PROGRESSION_SIZE = 10;

const getRandomNumber = () => Math.floor(Math.random() * 10);

const getProgression = (step, elements) => {
  const start = getRandomNumber();
  return Array(elements).fill().map((_, idx) => start + step * idx);
};

const getQuestion = () => {
  const progression = getProgression(getRandomNumber(), PROGRESSION_SIZE);
  const hiddenElIdx = Math.floor(Math.random() * progression.length);
  const answer = progression[hiddenElIdx].toString();
  progression[hiddenElIdx] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default {
  getQuestion,
  START_MESSAGE,
};

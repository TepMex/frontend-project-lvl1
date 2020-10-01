import { getRandomInt } from '../utils.js';

const START_MESSAGE = 'What number is missing in the progression?';

const PROGRESSION_SIZE = 10;

const getProgression = (start, step, elements) => Array(elements)
  .fill()
  .map((_, idx) => start + step * idx);

const makeGameRoundData = () => {
  const progression = getProgression(getRandomInt(1, 100), getRandomInt(1, 10), PROGRESSION_SIZE);
  const hiddenElementIndex = getRandomInt(0, progression.length - 1);
  const answer = progression[hiddenElementIndex].toString();
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => ({
  makeGameRoundData,
  START_MESSAGE,
});

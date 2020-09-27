import { getRandomInt } from '../utils.js';

const START_MESSAGE = 'What number is missing in the progression?';

const PROGRESSION_SIZE = 10;

const getProgression = (start, step, elements) => Array(elements)
  .fill()
  .map((_, idx) => start + step * idx);

const makeGameRoundData = () => {
  const progression = getProgression(getRandomInt(1, 100), getRandomInt(1, 10), PROGRESSION_SIZE);
  const hiddenElIdx = Math.floor(Math.random() * progression.length);
  const answer = progression[hiddenElIdx].toString();
  progression[hiddenElIdx] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => ({
  makeGameRoundData,
  START_MESSAGE,
});

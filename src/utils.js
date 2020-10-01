export const getRandomInt = (from, to) => from + Math.floor(Math.random() * (to - from + 1));
export const getRandomElement = (array) => array[getRandomInt(0, array.length - 1)];

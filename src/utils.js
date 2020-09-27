export const getRandomInt = (from, to) => from + Math.floor(Math.random() * (to - from + 1));
export const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];
export const isEven = (num) => !!(num % 2);

export const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

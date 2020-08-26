import readlineSync from 'readline-sync';

const greetingUser = (name) => console.log(`Hello, ${name}!`);

export const askForName = () => {
  const name = readlineSync.question('May I have your name? ');
  greetingUser(name);
};

export default {
  greetingUser,
  askForName,
};

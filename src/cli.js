import readlineSync from 'readline-sync';

export const commonWelcome = () => console.log('Welcome to the Brain Games!');

export const askForName = () => readlineSync.question('May I have your name? ');

export const greetingUser = (name) => console.log(`Hello, ${name}!`);

export const startingScreen = () => {
  commonWelcome();
  const userName = askForName();
  greetingUser(userName);
  return userName;
};

export default {
  startingScreen,
};

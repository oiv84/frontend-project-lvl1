import readlineSync from 'readline-sync';

const getAnswer = (question) => readlineSync.question(`${question} `);

// Greeting
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = getAnswer('May I have your name?');
  console.log(`Hello, ${name}`);
  return name;
};

export { greeting, getAnswer };

import getAnswer from '../bin/cli.js';
// Games settings
const maxRounds = 3;

// Greeting
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = getAnswer('May I have your name?');
  console.log(`Hello, ${name}`);
  return name;
};
const name = greeting();

// GameLogic
const gameEngine = (rules, getQuestionAndCorrectAnswer) => {
  console.log(rules);
  let currentRound = 1;

  while (currentRound <= maxRounds) {
    const [question, correctAnswer] = getQuestionAndCorrectAnswer();

    console.log(`Question: ${question}`);
    const answer = getAnswer('Your answer:');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');

    currentRound += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default gameEngine;

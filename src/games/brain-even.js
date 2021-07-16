import readlineSync from 'readline-sync';
import greeting from '../../bin/cli.js';
import randomInt from '../libs/getRandomInteger.js';

const game = () => {
  // Game rules message.
  const gameRulesMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getCorrectAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

  // Game settings.
  const MAX_ATTEMPTS = 3;

  // starting the game
  const name = greeting();
  console.log(gameRulesMessage);

  let successfulAttempts = 0;

  while (successfulAttempts < MAX_ATTEMPTS) {
    const currentNumber = randomInt(0, 100);
    const currentCorrectAnswer = getCorrectAnswer(currentNumber);

    console.log(`Question: ${currentNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== currentCorrectAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${currentCorrectAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    } else {
      console.log('Correct!');
    }

    successfulAttempts += 1;

    if (successfulAttempts === MAX_ATTEMPTS) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default game;

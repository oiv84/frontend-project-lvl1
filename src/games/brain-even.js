import readlineSync from 'readline-sync';
import greeting from '../../bin/cli.js';
import randomInt from '../libs/getRandomInteger.js';

const game = () => {
  // Game rules message.
  const gameRulesMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

  // Game settings.
  let maxRounds = 3;

  // starting the game
  const name = greeting();
  console.log(gameRulesMessage);

  while (maxRounds > 0) {
    const currentNumber = randomInt(0, 100);
    const currentCorrectAnswer = currentNumber % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${currentNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== currentCorrectAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${currentCorrectAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    } else {
      console.log('Correct!');
    }

    maxRounds -= 1;

    if (maxRounds === 0) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default game;

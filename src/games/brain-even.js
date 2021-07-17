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
    const question = randomInt(0, 100);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
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

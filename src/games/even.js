import randomInt from '../libs/utils.js';
import playGame from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const numbersRange = [0, 100];

const genRound = () => {
  const isEven = (num) => num % 2 === 0;
  const question = randomInt(numbersRange);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => playGame(gameRules, genRound);

export default startGame;

import randomInt from '../utils.js';
import playGame from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';
const numbersRange = [0, 100];

const gcd = (a, b) => {
  if (b) {
    return gcd(b, a % b);
  }
  return Math.abs(a);
};

const genRound = () => {
  const num1 = randomInt(numbersRange);
  const num2 = randomInt(numbersRange);

  const question = `${num1} ${num2}`;

  const correctAnswer = gcd(num1, num2).toString();

  return [question, correctAnswer];
};

const startGame = () => playGame(gameRules, genRound);

export default startGame;

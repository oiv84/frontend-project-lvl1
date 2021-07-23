import randomInt from '../utils.js';
import playGame from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b) {
    return gcd(b, a % b);
  }
  return Math.abs(a);
};

const genRound = () => {
  const num1 = randomInt(0, 100);
  const num2 = randomInt(0, 100);

  const question = `${num1} ${num2}`;

  const correctAnswer = gcd(num1, num2).toString();

  return [question, correctAnswer];
};

const startGame = () => playGame(gameRules, genRound);

export default startGame;

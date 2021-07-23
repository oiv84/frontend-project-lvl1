import randomInt from '../utils.js';
import playGame from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const genRound = () => {
  const question = randomInt(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => playGame(gameRules, genRound);

export default startGame;

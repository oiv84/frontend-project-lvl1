import randomInt from '../libs/getRandomIntegerFromRange.js';
import gameEngine from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const numbersRange = [0, 100];

const getQuestionAndCorrectAnswer = () => {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= num / 2; i += 1) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const question = randomInt(numbersRange);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => gameEngine(gameRules, getQuestionAndCorrectAnswer);

export default startGame;

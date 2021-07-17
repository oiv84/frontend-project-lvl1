import randomInt from '../libs/getRandomIntegerFromRange.js';
import gameEngine from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const numbersRange = [0, 100];

const getQuestionAndCorrectAnswer = () => {
  const question = randomInt(numbersRange);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => gameEngine(gameRules, getQuestionAndCorrectAnswer);

export default startGame;

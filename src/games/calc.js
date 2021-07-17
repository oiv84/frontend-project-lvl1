import randomInt from '../libs/getRandomIntegerFromRange.js';
import calc from '../libs/calcTwoNumbers.js';
import gameEngine from '../index.js';

const gameRules = 'What is the result of the expression?';
const avaibleMathOperators = ['+', '-', '*'];
const numbersRange = [0, 100];

const getQuestionAndCorrectAnswer = () => {
  const num1 = randomInt(numbersRange);
  const num2 = randomInt(numbersRange);

  const getRandomMathOperation = (operators) => operators[randomInt([0, operators.length - 1])];

  const randomMathOperation = getRandomMathOperation(avaibleMathOperators);

  const question = `${num1} ${randomMathOperation} ${num2}`;
  const correctAnswer = calc(num1, num2, randomMathOperation).toString();

  return [question, correctAnswer];
};

const startGame = () => gameEngine(gameRules, getQuestionAndCorrectAnswer);

export default startGame;

import randomInt from '../libs/utils.js';
import playGame from '../index.js';

const gameRules = 'What is the result of the expression?';
const avaibleMathOperators = ['+', '-', '*'];
const numbersRange = [0, 100];

const simpleCalc = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Sorry, but ${operator} does not support`);
  }
};

const genRound = () => {
  const num1 = randomInt(numbersRange);
  const num2 = randomInt(numbersRange);

  const randomMathOperation = avaibleMathOperators[randomInt([0, avaibleMathOperators.length - 1])];

  const question = `${num1} ${randomMathOperation} ${num2}`;
  const correctAnswer = simpleCalc(num1, num2, randomMathOperation).toString();

  return [question, correctAnswer];
};

const startGame = () => playGame(gameRules, genRound);

export default startGame;

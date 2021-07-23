import randomInt from '../utils.js';
import playGame from '../index.js';

const gameRules = 'What is the result of the expression?';
const avaibleMathOperators = ['+', '-', '*'];

const calc = (num1, num2, operator) => {
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
  const num1 = randomInt(0, 100);
  const num2 = randomInt(0, 100);

  const randomMathOperation = avaibleMathOperators[randomInt(0, avaibleMathOperators.length - 1)];

  const question = `${num1} ${randomMathOperation} ${num2}`;
  const correctAnswer = calc(num1, num2, randomMathOperation).toString();

  return [question, correctAnswer];
};

const startGame = () => playGame(gameRules, genRound);

export default startGame;

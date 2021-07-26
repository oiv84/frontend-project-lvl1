import randomInt from '../utils.js';
import playGame from '../index.js';

const gameRules = 'What number is missing in the progression?';

const genProgressionFirstNumber = (min = 0, max = 100) => randomInt(min, max);

const genProgressionDifference = (min = 1, max = 10) => randomInt(min, max);

const genProgressionLength = (min = 5, max = 10) => randomInt(min, max);

const genProgression = (firstNumber, difference, length) => {
  const progression = [firstNumber];

  for (let i = 1; i <= length; i += 1) {
    progression.push(progression[i - 1] + difference);
  }

  return progression;
};

const genRound = () => {
  const progression = genProgression(
    genProgressionFirstNumber(),
    genProgressionDifference(),
    genProgressionLength(),
  );

  const hiddenElementIndex = randomInt(0, progression.length - 1);
  const correctAnswer = progression[hiddenElementIndex].toString();

  progression[hiddenElementIndex] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

const startGame = () => playGame(gameRules, genRound);

export default startGame;

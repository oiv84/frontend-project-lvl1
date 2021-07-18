import randomInt from '../libs/getRandomIntegerFromRange.js';
import gameEngine from '../index.js';

const gameRules = 'What number is missing in the progression?';
const numbersRange = [0, 100];
const progressionLengthRange = [5, 9];
const progressionDiffereceRange = [1, 10];

const getQuestionAndCorrectAnswer = () => {
  const progressionLength = randomInt(progressionLengthRange);
  const progressionDifferece = randomInt(progressionDiffereceRange);
  const progressionFirstNumber = randomInt(numbersRange);

  const progression = [progressionFirstNumber];

  for (let i = 1; i <= progressionLength; i += 1) {
    progression.push(progression[i - 1] + progressionDifferece);
  }

  const hiddenElementIndex = randomInt([1, progressionLength - 1]);
  const correctAnswer = progression[hiddenElementIndex].toString();

  progression[hiddenElementIndex] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

const startGame = () => gameEngine(gameRules, getQuestionAndCorrectAnswer);

export default startGame;

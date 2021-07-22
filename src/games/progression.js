import randomInt from '../libs/utils.js';
import playGame from '../index.js';

const gameRules = 'What number is missing in the progression?';
const numbersRange = [0, 100];
const progressionLengthRange = [5, 9];
const progressionDiffereceRange = [1, 10];

const genProgression = () => {
  const progression = [randomInt(numbersRange)];
  const progressionLength = randomInt(progressionLengthRange);
  const progressionDifferece = randomInt(progressionDiffereceRange);

  for (let i = 1; i <= progressionLength; i += 1) {
    progression.push(progression[i - 1] + progressionDifferece);
  }

  return progression;
};

const genRound = () => {
  const progression = genProgression();

  const hiddenElementIndex = randomInt([0, progression.length - 1]);
  const correctAnswer = progression[hiddenElementIndex].toString();

  progression[hiddenElementIndex] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

const startGame = () => playGame(gameRules, genRound);

export default startGame;

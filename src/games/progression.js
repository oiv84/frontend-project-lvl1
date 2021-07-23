import randomInt from '../utils.js';
import playGame from '../index.js';

const gameRules = 'What number is missing in the progression?';

const genProgression = () => {
  const progression = [randomInt(0, 100)];
  const progressionLength = randomInt(5, 9);
  const progressionDifferece = randomInt(1, 10);

  for (let i = 1; i <= progressionLength; i += 1) {
    progression.push(progression[i - 1] + progressionDifferece);
  }

  return progression;
};

const genRound = () => {
  const progression = genProgression();

  const hiddenElementIndex = randomInt(0, progression.length - 1);
  const correctAnswer = progression[hiddenElementIndex].toString();

  progression[hiddenElementIndex] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

const startGame = () => playGame(gameRules, genRound);

export default startGame;

import readlineSync from 'readline-sync';
import { gameCalc, taskCalc } from './games/game-calc.js';
import { gameEven, taskEven } from './games/game-even.js';
import { gameGcd, taskGcd } from './games/game-gcd.js';
import { gameProgression, taskProgression } from './games/game-progression.js';

export default function greattingUser(gameName = '') {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello ${name}!`);

  if (gameName === '') {
    return;
  }
  switch (gameName) {
    case 'even':
      console.log(taskEven);
      break;
    case 'calc':
      console.log(taskCalc);
      break;
    case 'gcd':
      console.log(taskGcd);
      break;
    case 'progression':
      console.log(taskProgression);
      break;
  }

  const countOfTry = 3;
  const startGame = (count) => {
    if (count === 0) {
      return console.log(`Congratulations, ${name}!`);
    }
    let resultExpression;
    let userAnswer;
    switch (gameName) {
      case 'even':
        [resultExpression, userAnswer] = gameEven();
        break;
      case 'calc':
        [resultExpression, userAnswer] = gameCalc();
        break;
      case 'gcd':
        [resultExpression, userAnswer] = gameGcd();
        break;
      case 'progression':
        [resultExpression, userAnswer] = gameProgression();
        break;
    }

    if (resultExpression === userAnswer) {
      console.log('Correct!');
      return startGame(count - 1);
    }
    console.log(`"${userAnswer}" is wrong answer;(Correct answer was "${resultExpression}".)\nLet's try again, ${name}!`);
    return startGame(countOfTry);
  };
  startGame(countOfTry);
}

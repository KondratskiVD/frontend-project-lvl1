import readlineSync from 'readline-sync';
import { randomQuestionCalc, randomExpressionCalc, answerCalc } from './games/game-calc.js';
import { randomQuestionEven, answerEven, randomExpressionEven } from './games/game-even.js';

export default function greattingUser(gameName = '') {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello ${name}!`);
  console.log('What is the result of the expression?');

  if (gameName === '') {
    return;
  }

  const countOfTry = 3;
  const startGame = (count) => {
    if (count === 0) {
      return console.log(`Congratulations, ${name}!`);
    }
    const question = gameName === 'even' ? randomQuestionEven() : randomQuestionCalc();
    const result = gameName === 'even' ? randomExpressionEven(question) : randomExpressionCalc(question);
    const userAnswer = gameName === 'even' ? answerEven(question) : +answerCalc(question);

    if (result === userAnswer) {
      console.log('Correct!');
      return startGame(count - 1);
    }
    console.log(`"${userAnswer}" is wrong answer;(Correct answer was "${result}".)\nLet's try again, ${name}!`);
    return startGame(countOfTry);
  };
  startGame(countOfTry);
}

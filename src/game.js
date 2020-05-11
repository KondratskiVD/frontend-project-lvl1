import readlineSync from 'readline-sync';

export default function game() {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const countOfTry = 3;
  const startGame = (count) => {
    if (count === 0) {
      return console.log(`Congratulations, ${name}!`);
    }

    const number = Math.floor(Math.random() * 10 + 1);
    const isEven = number % 2 === 0 ? 'yes' : 'no';
    const userAnsver = readlineSync.question(`Question: ${number} `);
    if (isEven === userAnsver) {
      console.log('Correct!');
      return startGame(count - 1);
    }
    console.log(`"${userAnsver}" is wrong answer;(Correct answer was "${isEven}".)\nLet's try again, ${name}!`);
    return startGame(countOfTry);
  };
  startGame(countOfTry);
}

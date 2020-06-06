import readlineSync from 'readline-sync';

export const taskGcd = 'Find the greatest common divisor of given numbers.';
export const gameGcd = () => {
  const randomNumber = () => Math.floor(Math.random() * 100);

  const question = () => {
    const number1 = randomNumber();
    const number2 = randomNumber();
    return `${number1} ${number2}`;
  };
  const expression = question();
  const userAnswer = (value) => readlineSync.question(`Question: ${value} `);

  const algoritmEvklid = (number1, number2) => {
    const remainderOfDivision = number1 % number2;
    if (remainderOfDivision === 0) {
      return number2;
    }
    return algoritmEvklid(number2, remainderOfDivision);
  };
  const resultExpression = (value) => {
    const arr = value.split(' ');
    const [number1, number2] = arr;
    return algoritmEvklid(number1, number2);
  };
  return [+resultExpression(expression), +userAnswer(expression)];
};

import readlineSync from 'readline-sync';

export const taskCalc = 'What is the result of the expression?';

export const gameCalc = () => {
  const randomNumber = () => Math.floor(Math.random() * 10);
  const operators = ['*', '+', '-'];

  const generateExpression = (x, operator, y) => {
    let math = 0;
    switch (operator) {
      case '+':
        math = +x + +y;
        break;
      case '-':
        math = +x - +y;
        break;
      default:
        math = x * y;
        break;
    }
    return math;
  };
  const question = () => {
    const number1 = randomNumber();
    const number2 = randomNumber();
    const operator = operators[Math.floor(Math.random() * operators.length)];
    return `${number1}${operator}${number2}`;
  };
  const expression = question();
  const userAnswer = (value) => readlineSync.question(`Question: ${value} `);
  const resultExpression = (value) => {
    const arr = value.split('');
    const [number1, operator, number2] = arr;
    return generateExpression(number1, operator, number2);
  };
  return [resultExpression(expression), +userAnswer(expression)];
};

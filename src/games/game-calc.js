import readlineSync from 'readline-sync';

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

export const randomQuestionCalc = () => {
  const number1 = randomNumber();
  const number2 = randomNumber();
  const operator = operators[Math.floor(Math.random() * operators.length)];
  return `${number1}${operator}${number2}`;
};

export const randomExpressionCalc = (question) => {
  const arr = question.split('');
  const [number1, operator, number2] = arr;
  return generateExpression(number1, operator, number2);
};

export const answerCalc = (question) => readlineSync.question(`Question: ${question} `);

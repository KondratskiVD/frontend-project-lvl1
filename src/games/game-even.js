import readlineSync from 'readline-sync';

export const taskEven = 'Answer "yes" if the number is even, otherwise answer "no".';
export const gameEven = () => {
  const question = () => Math.floor(Math.random() * 10 + 1);
  const expression = question();
  const userAnswer = (value) => readlineSync.question(`Question: ${value} `);
  const resultExpression = (value) => (value % 2 === 0 ? 'yes' : 'no');
  return [resultExpression(expression), userAnswer(expression)];
};

import readlineSync from 'readline-sync';

export const randomQuestionEven = () => Math.floor(Math.random() * 10 + 1);

export const answerEven = (question) => readlineSync.question(`Question: ${question} `);

export const randomExpressionEven = (question) => (question % 2 === 0 ? 'yes' : 'no');

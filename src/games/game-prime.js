import readlineSync from 'readline-sync';

export const taskPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const gamePrime = () => {
  const randomNumber = () => Math.floor(Math.random() * 100 + 1);
  const isPrime = (num) => {
    for (let i = 2; i < (num / 2); i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  const number = randomNumber();
  const expression = isPrime(number);
  const userAnswer = (value) => readlineSync.question(`Question: ${value} `);
  const resultExpression = (value) => (value ? 'yes' : 'no');
  return [resultExpression(expression), userAnswer(number)];
};

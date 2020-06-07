import readlineSync from 'readline-sync';

export const taskProgression = 'What number is missing in the progression?.';

export const gameProgression = () => {
  // generate array of progression
  const firstRandomNumber = Math.floor(Math.random() * 10 + 1);
  const createArrProgression = [];
  const lengthProgression = 10;
  const generateProgression = (count, number) => {
    if (count < 1) {
      return createArrProgression;
    }
    createArrProgression.push(number);
    return generateProgression(count - 1, number + 2);
  };

  // hiding random number
  const orderRandomNumber = Math.floor(Math.random() * 10);
  const arrProgression = generateProgression(lengthProgression, firstRandomNumber);
  const hidedNumber = arrProgression[orderRandomNumber];
  arrProgression[orderRandomNumber] = '..';

  const userAnswer = (value) => readlineSync.question(`Question: ${value} `);
  return [+hidedNumber, +userAnswer(arrProgression)];
};

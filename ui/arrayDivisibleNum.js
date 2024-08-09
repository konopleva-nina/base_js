/**
 * @function arrayDivisibleNum
 * @description возвращает массив чисел кратных заданному числу
 * @param {[number]} array
 * @param {number} number
 * @returns {[number]}
 */

export const arrayDivisibleNum = (array, number) => {
  if (typeof number !== 'number') throw new Error('Invalid value')
  // if (array.map((num) => typeof num !== 'number'))
  //   throw new Error('Invalid value')
  const resultArray = array.filter(
    (currentNumber) => currentNumber % number === 0
  )
  return resultArray
}

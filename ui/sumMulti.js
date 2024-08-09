/**
 * @function sumMulti
 * @description возвращает сумму чисел кратных 3 или 5, которые меньше заданного числа, но больше 0
 * @param {number} number
 * @throws {Error} если переданное значение не число
 * @returns {number}
 */

export const sumMulti = (number) => {
  if (typeof number !== 'number') throw new Error('Invalid value')
  if (number < 0) return 0
  const arrayMultiNum = []
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arrayMultiNum.push(i)
    }
  }
  const resultNumber = arrayMultiNum.reduce(
    (acc, currentNum) => acc + currentNum
  )
  return resultNumber
}

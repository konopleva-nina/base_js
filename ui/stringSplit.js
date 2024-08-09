/**
 * @function stringSplit
 * @param {string} string
 * @throws {Error} если переданное значение не строка
 * @returns {[string]}
 */

export const stringSplit = (string) => {
  if (typeof string !== 'string') throw new Error('Invalid value')

  const arrayStringSplit = []
  if (string.length % 2 !== 0) string += '_'
  for (let i = 0; i < string.length; i += 2) {
    arrayStringSplit.push(`${string[i]}${string[i + 1]}`)
  }
  return arrayStringSplit
}

/**
 * @function changeCaseLetter
 * @description изменение регистра букв в строке
 * @param {string} string
 * @throws {Error} если переданное значение не строка
 * @returns {string}
 */

export const changeCaseLetter = (string) => {
  if (typeof string !== 'string') throw new Error('Invalid value')
  let resString = ''
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      resString += string[i].toLowerCase()
    } else {
      resString += string[i].toUpperCase()
    }
  }
  return resString
}

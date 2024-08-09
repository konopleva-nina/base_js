import { sumMulti } from './ui/sumMulti.js'
import { arrayDivisibleNum } from './ui/arrayDivisibleNum.js'
import { stringSplit } from './ui/stringSplit.js'
import { changeCaseLetter } from './ui/changeCaseLetter.js'

try {
  console.log(sumMulti(34))
  console.log(arrayDivisibleNum([1, 2, 3, 4, 5, 6, 7], 3))
  console.log(stringSplit(23))
  console.log(changeCaseLetter(123))
} catch (e) {
  console.error(e.message)
}

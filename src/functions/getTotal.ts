import { sumArrayOfNumbers } from './utilityFunctions'

export default function getTotal(arabicNumerals: number[]): number {
  let numbersToSubstract: number[] = []
  let numbersToSum: number[] = []
  let [a, b]: Array<number | null> = [null, null]

  arabicNumerals.forEach((number: number, i: number) => {
    if (i + 1 < arabicNumerals.length) {
      let nextNumber = arabicNumerals[i + 1]

      if (number < nextNumber) {
        numbersToSubstract = [...numbersToSubstract, number]
      }
      else {
        numbersToSum = [...numbersToSum, number]
      }
    }
    else {
      numbersToSum = [...numbersToSum, number]
    }
  })

  a = sumArrayOfNumbers(numbersToSum)
  b = sumArrayOfNumbers(numbersToSubstract)

  return a - b
}
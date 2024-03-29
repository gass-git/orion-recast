import { getArabicNumeral, convertToRoman } from '../../utilityFunctions'
import { validation1, validation2, validation3, validation4, validation5 } from '../../romanValidations'
import getTotal from '../../getTotal'

interface MetalValues {
  [key: string]: number
}

export default function handleCase4(
  strings: string[],
  dispatch: any,
  conversions: Record<string, string>,
  metalValues: MetalValues
): void {
  let galacticNumerals = strings.slice(4, strings.length - 2)
  let romanNumerals = convertToRoman(galacticNumerals, conversions)
  let metalName = strings[strings.length - 2]
  let product = 0
  let arabicNumerals: number[] = []
  let [v1, v2, v3, v4, v5]: Array<boolean | null> = [null, null, null, null, null]

  // validate roman numeral logic
  v1 = validation1(romanNumerals)
  v2 = validation2(romanNumerals)
  v3 = validation3(romanNumerals)
  v4 = validation4(romanNumerals)
  v5 = validation5(romanNumerals)

  // continue only if all validations have passed
  if (v1 && v2 && v3 && v4 && v5) {

    // convert roman numerals to arabic numerals
    romanNumerals.forEach((symbol) => {
      let arabicNumeral = getArabicNumeral(symbol)
      if(arabicNumeral !== null) arabicNumerals.push(arabicNumeral)
    })

    // has the metal value been specified ?
    if (metalValues[metalName] !== null) {

      // multiply the result of the galactic numerals by the metal value
      product = Math.round(getTotal(arabicNumerals) * metalValues[metalName])

      // if galactic numerals have not been defined
      if (arabicNumerals.length === galacticNumerals.length) {
        dispatch({
          type: 'update output',
          success: true,
          text: `${product} credits`
        })
      }
      else {
        dispatch({
          type: 'update output',
          success: false,
          text: 'Unknown intergalactic numeral/s'
        })
      }
    }
    else {
      dispatch({
        type: 'update output',
        success: false,
        text: `The value of ${metalName} hasn't been specified`
      })
    }

  }
  else {
    dispatch({
      type: 'update output',
      success: false,
      text: 'The roman numerical logic is not valid'
    })
  }
}
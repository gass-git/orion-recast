import {getArabicNumeral, convertToRoman} from '../../utilityFunctions'
import {validation1, validation2, validation3, validation4, validation5} from '../../romanValidations'
import getTotal from '../../getTotal'

export default function handleCase4(strings, dispatch, conversions, metalValues){
    let galacticNumerals = strings.slice(4, strings.length - 2)
    let romanNumerals = convertToRoman(galacticNumerals, conversions)
    let metalName = strings[strings.length - 2]
    let product = 0
    let arabicNumerals = []
    let [v1,v2,v3,v4,v5] = [null, null, null, null, null]

    // validate roman numeral logic
    v1 = validation1(romanNumerals)
    v2 = validation2(romanNumerals)
    v3 = validation3(romanNumerals)
    v4 = validation4(romanNumerals)
    v5 = validation5(romanNumerals)
 
    // continue only if all validations have passed
    if(v1 && v2 && v3 && v4 && v5){

      // convert roman numerals to arabic numerals
      romanNumerals.forEach((symbol) => {
        arabicNumerals.push(getArabicNumeral(symbol))
      })

      // multiply the result of the galactic numerals by the metal value
      product = getTotal(arabicNumerals) * metalValues[metalName]

      dispatch({
        type: 'update output',
        success: true,
        text: `${product} credits`
      })

    }
    else{
      dispatch({
        type: 'update output',
        success: false,
        text: 'The roman numerical logic is not valid'
      })
    }
}
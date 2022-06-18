import {getArabicNumeral, convertToRoman} from '../../utilityFunctions'
import {validation1, validation2, validation3, validation4, validation5} from '../../romanValidations'
import getTotal from '../../getTotal'

export default function handleCase3(strings, dispatch, conversions){
    let galacticNumerals = strings.slice(3,strings.length - 1)
    let romanNumerals = convertToRoman(galacticNumerals, conversions)
    let arabicNumerals = []

    // roman numerals rules validation variables
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
        arabicNumerals = [...arabicNumerals, getArabicNumeral(symbol)]
      })
  
      dispatch({
        type: 'update output',
        success: true,
        text: getTotal(arabicNumerals)
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
import {getArabicNumeral, convertToRoman, validateGalacticConversions} from '../../utilityFunctions'
import {validation1, validation2, validation3, validation4, validation5} from '../../romanValidations'
import getTotal from '../../getTotal'

export default function handleCase2(strings, dispatch, indexOfIs, conversions){
    let metalName = ''
    let credits = 0
    let galacticNumerals = []
    let romanNumerals = []
    let arabicNumerals = []

    let [v1,v2,v3,v4,v5] = [null, null, null, null, null]
  
    // the word before 'is' should be the name of a metal
    let C = [
        strings[indexOfIs - 1] === 'gold',
        strings[indexOfIs - 1] === 'silver',
        strings[indexOfIs - 1] === 'iron',
        strings[indexOfIs - 1] === 'bronze'
      ]
  
      if(C[0] || C[1] || C[2] || C[3]){
        metalName = strings[indexOfIs - 1]
        credits = Number(strings[indexOfIs + 1])
        galacticNumerals = strings.slice(0, indexOfIs - 1)
        
        // has all the galactic numerals been converted and saved as roman numeral?
        let allConverted = validateGalacticConversions(galacticNumerals, conversions)
        
        if(allConverted){
          romanNumerals = convertToRoman(galacticNumerals, conversions)
          arabicNumerals = []
    
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
    
            // calcuate and save the value of the metal
            let valueOfMetal = credits/getTotal(arabicNumerals)
            dispatch({
              type: 'save value of metal',
              metal: metalName,
              value: valueOfMetal
            })
            dispatch({
              type: 'update output',
              success: true,
              text: `The ${metalName} value has been updated!`
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
        else{
          dispatch({
            type: 'update output',
            success: false,
            text: 'All galactic numerals have been defined as roman numeral before saving the value of metals.'
          })
        }
      }
      else{
        dispatch({
          type: 'update output',
          success: false,
          text: 'The metals can only be: gold, silver, bronze and iron'
        })
      } 
}
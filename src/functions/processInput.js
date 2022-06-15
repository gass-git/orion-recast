import {getRomanNumeral, getUnitName, getArabicNumeral, convertToRoman} from './utilityFunctions'
import {getTotal} from './getTotal'

export function processInput(n, input, dispatch, data){
  let inputArray = input.split(' ')

  /**
   * set name to roman numerals
   */
  if(n === 3){
      dispatch({
        type:'set name to roman numeral',
        unitName: getUnitName(input),
        romanNumeral: getRomanNumeral(input)
      })
    }

    /**
     * calculate the value of the metal and save it
     */
    else if(n > 3 && inputArray[0] !== 'how'){
      let indexOfIs = null

      // find the index of the 'is' word
      inputArray.forEach((str, i) =>{
        if(str === 'is') indexOfIs = i
      })
      
      let metalName = inputArray[indexOfIs - 1]
      let credits = Number(inputArray[indexOfIs + 1])
      let galacticNumerals = inputArray.slice(0, indexOfIs - 1)
      let romanNumerals = convertToRoman(galacticNumerals, data)
      let arabicNumerals = []

      // PENDING: validate

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
    }
  }
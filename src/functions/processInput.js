import {getRomanNumeral, getUnitName, getArabicNumeral} from './utilityFunctions'

export function processInput(n, input, dispatch, data){
    if(n === 3){
      dispatch({
        type:'set name to roman numeral',
        unitName: getUnitName(input),
        romanNumeral: getRomanNumeral(input)
      })
    }
    else if(n > 3){
      let test = 'glob glob Silver is 34 Credits'
      let array = test.split(' ')
      let indexOfIs = null
      let metal = ''
      let romanNumerals = []
      let arabicNumerals = []

      // find the index of 'is'
      array.forEach((str, i) =>{
         if(str === 'is') indexOfIs = i
      })

      // save the metal type
      metal = array[indexOfIs - 1]

      // slice the array
      array = array.slice(0, indexOfIs - 1)

      // convert intergalactic units to roman numerals
      array.forEach((galacticUnit) => {
        for(const romanSymbol in data){
          if(galacticUnit === data[romanSymbol]){
            romanNumerals = [...romanNumerals, romanSymbol]
          } 
        }
      })

      // --- validation ---- 
      // PENDING

      // convert roman numerals to arabic numerals
      romanNumerals.forEach((symbol) => {
        arabicNumerals = [...arabicNumerals, getArabicNumeral(symbol)]
      })

      // calculate the result of the roman numerals and convert to arabic numeral
      let numbersToSubstract = []
      let numbersToSum = []

      arabicNumerals.forEach((number, i) => {
        if(i + 1 < arabicNumerals.length){
          let nextNumber = arabicNumerals[i+1]

          // if smaller number precedes the next number
          if(number < nextNumber){
            // substract
            numbersToSubstract = [
            ...numbersToSubstract,
            number
            ]
          }
          else{
            numbersToSum = [
              ...numbersToSum,
              number
            ]
          }
        }
        else{
          numbersToSum = [
              ...numbersToSum,
              number
            ]
        }
      })

      function sum(arr){
        return arr.reduce((a,b) => a+b, 0)
      }

      let result = sum(numbersToSum) - sum(numbersToSubstract)
      
      // console.log(result)


      // calcuate and save the value of the metal


    }
  }
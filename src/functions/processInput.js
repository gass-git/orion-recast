import {getRomanNumeral, getUnitName, getArabicNumeral, convertToRoman} from './utilityFunctions'
import {getTotal} from './getTotal'

export function processInput(n, input, dispatch, data){
  let strings = input.split(' ')
  let galacticNumerals = []
  let romanNumerals = []
  let arabicNumerals = []
  let credits = 0
  let metalName = ''

  /** CASE 1
   * set name to roman numerals
   */
  if(n === 3){
      dispatch({
        type:'set name to roman numeral',
        unitName: getUnitName(input),
        romanNumeral: getRomanNumeral(input)
      })
  }

  /** CASE 2
   * calculate the value of the metal and save it
   */
  else if(n > 3 && strings[0] !== 'how'){
    let indexOfIs = null

    // find the index of the 'is' word
    strings.forEach((str, i) =>{
      if(str === 'is') indexOfIs = i
    })
    
    metalName = strings[indexOfIs - 1]
    credits = Number(strings[indexOfIs + 1])
    galacticNumerals = strings.slice(0, indexOfIs - 1)
    romanNumerals = convertToRoman(galacticNumerals, data)
    arabicNumerals = []

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

  /** CASE 3
   * calculate the galactic numerals inputed
   */
  else if(strings[0] === 'how' && strings[1] === 'much' && strings[2] === 'is'){
    galacticNumerals = strings.slice(3,strings.length - 1)
    romanNumerals = convertToRoman(galacticNumerals, data)

    // convert roman numerals to arabic numerals
    romanNumerals.forEach((symbol) => {
      arabicNumerals = [...arabicNumerals, getArabicNumeral(symbol)]
    })

    console.log(galacticNumerals)
    console.log(romanNumerals)
    console.log(arabicNumerals)
    console.log(getTotal(arabicNumerals))
  }

  /** CASE 4
   * calculate the credits
   */
  else if(strings[0] === 'how' && strings[1] === 'many' && strings[2] === 'credits'){
    
  }
  }
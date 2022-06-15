import {getRomanNumeral, getUnitName, getArabicNumeral, convertToRoman} from './utilityFunctions'
import {getTotal} from './getTotal'
import { validation1, validation2, validation3, validation4, validation5 } from './romanValidations'

export function processInput(n, input, dispatch, data, metalValues){
  let strings = input.split(' ')
  let galacticNumerals = []
  let romanNumerals = []
  let arabicNumerals = []
  let credits = 0
  let metalName = ''
  let result = null
  let product = null

  // roman numerals rules validation variables
  let [v1,v2,v3,v4,v5] = [null, null, null, null, null]

  // PENDING: validate text inputed

  /** 
   * CASE 1
   * set name to roman numerals
   */ 
  if(n === 3 && strings[1] === 'is'){
    // C stands for conditions
    let C = [
      strings[2] === 'I',
      strings[2] === 'V',
      strings[2] === 'X',
      strings[2] === 'L',
      strings[2] === 'C',
      strings[2] === 'D',
      strings[2] === 'M'
    ]

    if(C[0] || C[1] || C[2] || C[3] || C[4] || C[5] || C[6]){
      dispatch({
        type:'set name to roman numeral',
        unitName: getUnitName(input),
        romanNumeral: getRomanNumeral(input)
      })
      dispatch({
        type:'update output',
        text:'updated successfully!'
      })
    }
    else{
      dispatch({
        type:'update output',
        text: 'invlid input: the input must ba a valid roman numeral. make sure to use the following format: galactic-unit is roman-numeral. Example: flop is M'
      })
    }
  }

  /** 
   * CASE 2
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
    }
    else{
      dispatch({
        type: 'update output',
        text: 'invalid input: the numerical logic is not valid'
      })
    }
  }

  /** CASE 3
   * calculate the galactic numerals inputed
   */
  else if(strings[0] === 'how' && strings[1] === 'much' && strings[2] === 'is'){
    galacticNumerals = strings.slice(3,strings.length - 1)
    romanNumerals = convertToRoman(galacticNumerals, data)

    // PENDING: validate roman numeral logic

    // convert roman numerals to arabic numerals
    romanNumerals.forEach((symbol) => {
      arabicNumerals = [...arabicNumerals, getArabicNumeral(symbol)]
    })

    dispatch({
      type: 'update result',
      number: getTotal(arabicNumerals)
    })
  }

  /** CASE 4
   * calculate the credits
   */
  else if(strings[0] === 'how' && strings[1] === 'many' && strings[2] === 'credits'){
    galacticNumerals = strings.slice(4,strings.length - 2)
    romanNumerals = convertToRoman(galacticNumerals, data)
    metalName = strings[strings.length - 2]

    // PENDING: validate roman numeral logic

    // convert roman numerals to arabic numerals
    romanNumerals.forEach((symbol) => {
      arabicNumerals = [...arabicNumerals, getArabicNumeral(symbol)]
    })

    // multiply the result of the galactic numerals by the metal value
    product = getTotal(arabicNumerals) * metalValues[metalName]

    dispatch({
      type: 'update result',
      number: product
    })

  }
  }
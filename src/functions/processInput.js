import {getRomanNumeral, getUnitName} from './utilityFunctions'

export function processInput(n, input, dispatch){
    switch(n){
      case 3: 
        dispatch({
          type:'set name to roman numeral',
          unitName: getUnitName(input),
          romanNumeral: getRomanNumeral(input)
        })
        break;
      default: return null
    }
  }
import { getUnitName, getRomanNumeral } from "../../utilityFunctions"

export default function handleCase1(input, strings, dispatch){
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

        // ! PENDING: check if conversion name is been used

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
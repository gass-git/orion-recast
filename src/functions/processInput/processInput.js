import handleCase1 from './cases/handleCase1'
import handleCase2 from './cases/handleCase2'
import handleCase3 from './cases/handleCase3'
import handleCase4 from './cases/handleCase4'

export function processInput(n, input, dispatch, conversions, metalValues){
  let lowerCaseInput = input.toLowerCase()
  let strings = lowerCaseInput.split(' ')
  let indexOfIs = null

  // find the index of the 'is' word
  strings.forEach((str, i) => {
    if(str === 'is') indexOfIs = i
  })

  if(indexOfIs === null){
    dispatch({ 
      type:'update output',
      success: false,
      text: `Inputs have the "is" word`
    })
  }
   
  // CASE 1 - set galactic name to roman numerals
  else if(n === 3 && strings[1] === 'is'){
    handleCase1(input, strings, dispatch, conversions)
  }

  // CASE2 - calculate the value of the metal and save it
  else if(n > 3 && strings[0] !== 'how'){    
    handleCase2(strings, dispatch, indexOfIs, conversions)
  }

  /** CASE 3
   * calculate the galactic numerals inputed
   */
  else if(strings[0] === 'how' && strings[1] === 'much' && strings[2] === 'is'){
    handleCase3(strings, dispatch, conversions)
  }

  /** CASE 4
   * calculate the credits
   */
  else if(strings[0] === 'how' && strings[1] === 'many' && strings[2] === 'credits'){
    handleCase4(strings, dispatch, conversions, metalValues)
  }
}
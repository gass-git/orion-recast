export default function handleCase1(input, strings, dispatch, conversions){
    let available = true

    // check if conversion name is been used
    for(const romanNumeral in conversions){
      if(strings[0] === conversions[romanNumeral]) {
        available = false
      }
    }

    // if conversion name is available continue
    if(available){
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
          success: true,
          text:'updated successfully!'
        })
      }
      else{
        dispatch({
          type:'update output',
          success: false,
          text: 'the input must ba a valid roman numeral. make sure to use the following format: galactic-unit is roman-numeral. Example: flop is M'
        })
      }
    }
    else{
      dispatch({
        type:'update output',
        success: false,
        text:'the conversion name is already been used'
      })
    }
}

function getRomanNumeral(str){
  let array = str.split(' ')
  return array[2]
}

function getUnitName(str){
  let array = str.split(' ')
  return array[0]
}
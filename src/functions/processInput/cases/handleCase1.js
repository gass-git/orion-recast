export default function handleCase1(strings, dispatch, conversions){
    let available = true

    // roman numeral should always be uppercase
    let romanNumeral = strings[2].toUpperCase()

    // check if conversion name is been used
    for(const romanNumeral in conversions){
      if(strings[0] === conversions[romanNumeral]) available = false
    }

    // if conversion name is available continue
    if(available){
      
      // conditions
      let C = [ 
          romanNumeral === 'I',
          romanNumeral === 'V',
          romanNumeral === 'X',
          romanNumeral === 'L',
          romanNumeral === 'C',
          romanNumeral === 'D',
          romanNumeral === 'M'
        ]

      if(C[0] || C[1] || C[2] || C[3] || C[4] || C[5] || C[6]){
        dispatch({
          type:'set name to roman numeral',
          unitName: strings[0],
          romanNumeral: romanNumeral
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
          text: 'The input must ba a valid roman numeral. make sure to use the following format: galactic-unit is roman-numeral. Example: flop is M'
        })
      }
    }
    else{
      dispatch({
        type:'update output',
        success: false,
        text:'The conversion name is already been used'
      })
    }
}
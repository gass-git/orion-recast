function getNumberOfWords(str){
    let array = str.split(' ')
    return array.length
  }

function sumArrayOfNumbers(arr){
    return arr.reduce((a,b) => a+b, 0)
}

function getArabicNumeral(symbol){
    switch(symbol){
        case 'i': return 1
        case 'v': return 5
        case 'x': return 10
        case 'l': return 50
        case 'c': return 100
        case 'd': return 500
        case 'm': return 1000
        default: return null
      }
}

function convertToRoman(galacticNumerals, conversions){
    let romanArray = []

    galacticNumerals.forEach((galacticUnit) => {
        for(const romanSymbol in conversions){
            if(galacticUnit === conversions[romanSymbol]){
                romanArray = [...romanArray, romanSymbol]
            } 
        }
    })
    return romanArray
}

function validateGalacticConversions(galacticNumerals, conversions){
    let count = 0
    
    galacticNumerals.forEach((galacticUnit) => {
        for(const romanSymbol in conversions){
            if(galacticUnit === conversions[romanSymbol]) count++
        }
    })

    if(count === galacticNumerals.length) return true
    else return false
}

export {
    getNumberOfWords,
    getArabicNumeral, 
    sumArrayOfNumbers,
    convertToRoman,
    validateGalacticConversions
}
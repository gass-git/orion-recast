function getNumberOfWords(str){
    let array = str.split(' ')
    return array.length
  }

function sumArrayOfNumbers(arr){
    return arr.reduce((a,b) => a+b, 0)
}

function getArabicNumeral(symbol){
    switch(symbol){
        case 'I': return 1
        case 'V': return 5
        case 'X': return 10
        case 'L': return 50
        case 'C': return 100
        case 'D': return 500
        case 'M': return 1000
        default: return null
      }
}

function convertToRoman(galacticNumerals, conversions){
    let romanArray = []

    galacticNumerals.forEach((galacticUnit) => {
        for(const romanSymbol in conversions){
            if(galacticUnit === conversions[romanSymbol]){
                romanArray.push(romanSymbol)
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
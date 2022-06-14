function getNumberOfWords(str){
    let array = str.split(' ')
    return array.length
  }

function getRomanNumeral(str){
    let array = str.split(' ')
    return array[2]
}
  
function getUnitName(str){
    let array = str.split(' ')
    return array[0]
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

export {getNumberOfWords, getRomanNumeral, getUnitName, getArabicNumeral}
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

export {getNumberOfWords, getRomanNumeral, getUnitName}
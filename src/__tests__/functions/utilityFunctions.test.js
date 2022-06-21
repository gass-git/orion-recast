import {
    getNumberOfWords,
    sumArrayOfNumbers,
    getArabicNumeral,
    convertToRoman,
    validateGalacticConversions
} from '../../functions/utilityFunctions.js'

// getNumberOfWords() test
it('should return the number of words of a string', () => {
    let testString = 'Lorem ipsum dolor sit'
    expect(getNumberOfWords(testString)).toBe(4)
})

// sumArrayOfNumbers() test
it('should return the sum of the numbers contained in an array', () => {
    let testArray = [0,1,1,2,2]
    expect(sumArrayOfNumbers(testArray)).toBe(6)
})

// getArabicNumeral() test
it('should convert properly from roman numeral to arabic numeral', () =>{
    let testArray = ['I','V','X','L','C','D','M']
    let output = [1,5,10,50,100,500,1000]

    testArray.forEach((romanNumeral, i) => {
        expect(getArabicNumeral(romanNumeral)).toBe(output[i])
    })
})

// convertToRoman() test
it('should convert properly an array of galactic numerals to an array of roman numerals', () => {
    let conversions =  {I: 'aa', V: 'bb', X:'cc', L:'dd', C:'ee', D:'ff', M:'gg'}
    let galacticNumerals = ['aa','bb','cc','dd','ee','ff','gg']

    expect(convertToRoman(galacticNumerals, conversions)).toEqual(['I','V','X','L','C','D','M'])
})


describe('tests for validateGalacticConversions()', () => {
    const conversions =  {I: 'aa', V: 'bb', X:'cc', L:'dd', C:'ee', D:'ff', M:'gg'}

    it('it should return true if all the galactic numerals inputed have been converted and saved as roman numerals', () => {
        let galacticNumerals = ['aa','bb','cc','dd','ee','ff','gg']
        expect(validateGalacticConversions(galacticNumerals, conversions)).toBeTruthy
    })
    it('it should return false if one or more galactic numerals inputed have not been converted and saved as roman numerals', () => {
        let galacticNumerals = ['xx','bb','cc','dd','ee','','gg']
        expect(validateGalacticConversions(galacticNumerals, conversions)).toBeFalsy
    })
})
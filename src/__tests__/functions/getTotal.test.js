import getTotal from '../../functions/getTotal'

describe('getTotal()', () => {
    it('calculates the total in arabic numerals using the roman numeral logic', () => {
        let testArray1 = [1000,100,1000,50,10,10,10,1,1,1]
        let testArray2 = [1000,1000,500,50,10,5,1]
        expect(getTotal(testArray1)).toBe(1983)
        expect(getTotal(testArray2)).toBe(2566)
    })
})
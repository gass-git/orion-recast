import {
    validation1,
    validation2,
    validation3,
    validation4,
    validation5
} from '../../functions/romanValidations'

describe('validations return true or false if conditions are met', () =>{

    // validation one
    test('I, X, C, and M can be repeated three times in succession, but no more', () => {
        expect(validation1(['X','X','X','X'])).toBe(false)
        expect(validation1(['I','I','I','I'])).toBe(false)
        expect(validation1(['C','C','C','C'])).toBe(false)
        expect(validation1(['M','M','M','M'])).toBe(false)
        expect(validation1(['X','X','X'])).toBe(true)
        expect(validation1(['I','I','I'])).toBe(true)
        expect(validation1(['C','C','C'])).toBe(true)
        expect(validation1(['M','M','M'])).toBe(true)
        expect(validation1(['X','X'])).toBe(true)
        expect(validation1(['I'])).toBe(true)
        expect(validation1(['C','C'])).toBe(true)
        expect(validation1(['M'])).toBe(true)
    })

    // validation two
    test('D, L, and V can never be repeated', () => {
        expect(validation2(['X','L','L','V'])).toBe(false)
        expect(validation2(['X','V','V','V'])).toBe(false)
        expect(validation2(['X','D','D','V'])).toBe(false)
        expect(validation2(['L','L'])).toBe(false)
        expect(validation2(['D','L'])).toBe(true)
        expect(validation2(['V','D'])).toBe(true)
    })

    // validation three
    test('I can be subtracted from V and X only', () => {
        expect(validation3(['I','V'])).toBe(true)
        expect(validation3(['I','X'])).toBe(true)
        expect(validation3(['M','I','X'])).toBe(true)
        expect(validation3(['I','L'])).toBe(false)
        expect(validation3(['D','I','V','I'])).toBe(true)
    })

    // validation four
    test('X can be subtracted from L and C only', () => {
        expect(validation4(['X','L'])).toBe(true)
        expect(validation4(['X','C'])).toBe(true)
        expect(validation4(['X','X','C','I'])).toBe(true)
        expect(validation4(['X','M'])).toBe(false)
        expect(validation4(['X','X','M','I'])).toBe(false)
    })

    // validation five
    test('V, L, and D can never be subtracted', () => {
        expect(validation5(['L','L'])).toBe(true)
        expect(validation5(['D','D'])).toBe(true)
        expect(validation5(['V','X'])).toBe(false)
        expect(validation5(['L','D'])).toBe(false)
        expect(validation5(['D','M'])).toBe(false)
    })
})

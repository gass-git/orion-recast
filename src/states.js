const initialState = {
  input: '',
  data: {I: '', V: '', X:'', L:'', C:'', D:'', M:''},
  metalValues: {gold: null, silver: null, bronze: null},
  result: null,
  output: ''
}

function appReducer(state, action) {
    switch(action.type){
        case 'set name to roman numeral':
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.romanNumeral]: action.unitName
                }
            }
        case 'reset input':
            return {
                ...state,
                input:''
            }
        case 'update input value':
            return {
                ...state,
                input: action.value
            }

        case 'save value of metal':
            return{
                ...state,
                metalValues: {
                    ...state.metalValues,
                    [action.metal]:action.value
                }
            }

        case 'update result':
            return{
                ...state,
                result: action.number
            }
            
        case 'update output':
            return{
                ...state,
                output: action.text
            }    

        default: return state
    }
}

export {initialState, appReducer}
const initialState = {
  input: '',
  data: {I: '', V: '', X:'', L:'', C:'', D:'', M:''}
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
        default: return state
    }
}

export {initialState, appReducer}
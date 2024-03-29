interface StateTypes {
    showModal: boolean | null
    input: string
    conversions: Record<string, string>
    metalValues: {
        gold: number | null
        silver: number | null
        bronze: number | null
        iron: number | null
    }
    output: { 
        success: boolean | string
        text: string 
    }
}

const initialState: StateTypes = {
    showModal: false,
    input: '',
    conversions: { I: '', V: '', X: '', L: '', C: '', D: '', M: '' },
    metalValues: { gold: null, silver: null, bronze: null, iron: null },
    output: { success: true, text: '' }
}

function appReducer(state: StateTypes, action: { [key: string]: string }) {
    switch (action.type) {
        case 'toggle modal':
            return {
                ...state,
                showModal: !state.showModal
            }
        case 'set name to roman numeral':
            return {
                ...state,
                conversions: {
                    ...state.conversions,
                    [action.romanNumeral]: action.unitName
                }
            }
        case 'reset input':
            return {
                ...state,
                input: ''
            }
        case 'update input value':
            return {
                ...state,
                input: action.value
            }

        case 'save value of metal':
            return {
                ...state,
                metalValues: {
                    ...state.metalValues,
                    [action.metal]: action.value
                }
            }

        case 'update output':
            return {
                ...state,
                output: {
                    success: action.success,
                    text: action.text
                }
            }

        case 'reset output':
            return {
                ...state,
                output: {
                    success: true,
                    text: ''
                }
            }

        default: return state
    }
}

export { initialState, appReducer }
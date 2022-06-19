import React, {createContext, useEffect, useReducer, useRef} from 'react'
import './styles.scss'
import { getNumberOfWords } from './functions/utilityFunctions'
import { processInput } from './functions/processInput/processInput'
import { appReducer, initialState } from './states'
import AlertBox from './components/alertBox'
import {Container} from 'react-bootstrap'
import FormComponent from './components/form'
import Title from './components/title'
import OutputComponent from './components/outputComponent'

export const AppContext = createContext(null)

export default function App() {
  const [state, dispatch] = useReducer(appReducer, initialState)
  const {input, conversions, metalValues, output} = state
  const inputField = useRef(null)
  const handleChange = (e) => dispatch({type:'update input value', value: e.target.value})
  
  function handleSubmit(){
    let numberOfWords = getNumberOfWords(input)
    processInput(numberOfWords, input, dispatch, conversions, metalValues)
    dispatch({type: 'reset input'})
  }

  useEffect(() => inputField.current.focus())

  return (
    <AppContext.Provider value={{state, dispatch}}>
      
      <Container fluid className='max-500 min-300 mt-5 pt-3 pb-3'>
        <Title />
      </Container>

      <Container fluid className='max-500 min-300'>
        <AlertBox dispatch={dispatch} output={output} />
        <FormComponent 
            input={input} 
            inputField={inputField} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit}  
          />
        <OutputComponent output={output} />
      </Container>

    </AppContext.Provider>
  )
}

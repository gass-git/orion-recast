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
  const {input, output} = state
  const inputField = useRef(null)
  const handleChange = (e) => dispatch({type:'update input value', value: e.target.value})
  
  function handleSubmit(){
    processInput(getNumberOfWords(input), dispatch, state)
    dispatch({type: 'reset input'})
  }

  useEffect(() => inputField.current.focus())

  useEffect(() => {
    if(input.length > 0) dispatch({type: 'reset output'})
  },[input])

  return (
    <AppContext.Provider value={{state, dispatch}}>
      
      <Container className='max-600 min-300 mt-5 pt-3 pb-3'>
        <Title />
      </Container>

      <Container className='max-550 min-300'>
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

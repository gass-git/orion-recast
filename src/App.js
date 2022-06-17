import React, {createContext, useEffect, useReducer, useRef} from 'react'
import './styles.scss'
import { getNumberOfWords } from './functions/utilityFunctions'
import { processInput } from './functions/processInput/processInput'
import { appReducer, initialState } from './states'
import AlertBox from './components/alertBox'
import {Form, Row, Button, Container} from 'react-bootstrap'

export const AppContext = createContext(null)

export default function App() {
  const [state, dispatch] = useReducer(appReducer, initialState)
  const {input, conversions, metalValues, output} = state
  const inputField = useRef(null)

  function handleChange(e){
    dispatch({type:'update input value', value: e.target.value})
  }

  function handleClick(){
    let numberOfWords = getNumberOfWords(input)
    processInput(numberOfWords, input, dispatch, conversions, metalValues)
    dispatch({type: 'reset input'})
  }

  useEffect(() => {
    inputField.current.focus()
  },[])

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className='wrapper'>
      {
        output.success ? 
        null
        : 
        <AlertBox text={output.text} dispatch={dispatch} />
      }

      <Form.Group as={Row} className='mt-5 mb-4' constrolid='form-group-1'>
        <Row>
          <Form.Control
            ref={inputField}
            className='input-field'
            type='string'
            name='inputString'
            value={input} 
            onChange={handleChange}
          />
        </Row>
        <Row>
          <Button
            variant='outline-dark'
            className='button mt-4 mb-3'
            onClick={() => handleClick()}
          >
            Submit
          </Button>
        </Row>
      </Form.Group >
      {
        output.success ? 
        <div className='result'>{output.text}</div>
        : 
        null
      }
      </div>
    </AppContext.Provider>
  )
}

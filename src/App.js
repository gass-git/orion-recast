import React, {createContext, useEffect, useReducer, useRef} from 'react'
import './styles.scss'
import { getNumberOfWords } from './functions/utilityFunctions'
import { processInput } from './functions/processInput/processInput'
import { appReducer, initialState } from './states'
import AlertBox from './components/alertBox'
import {Form, Row, Button, Container, Card,Col, InputGroup} from 'react-bootstrap'

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
  })

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <Container fluid className='max-500 min-300 mt-5 pt-3 pb-3'>
      <Row className='text-center'>
          <h2 style={{color:'#33ff00'}}>
            Orion Recast
            - 
            Intergalactic Converter
          </h2>
      </Row>
      </Container>
      <Container fluid className='max-500 min-300 form-container'>
        <Row>
          {output.success ? null : <AlertBox text={output.text} dispatch={dispatch} />}
        </Row>
        <Row className='p-5'>
          <Form className='text-center'>
            <Form.Group>
              <Form.Control
                className='input-field'
                ref={inputField}
                type='string'
                name='inputString'
                value={input} 
                onChange={handleChange}
              />
              </Form.Group>
              <Button
                variant='outline-primary'
                size='lg'
                className='button mt-3'
                onClick={() => handleClick()}
              >
                submit
              </Button>
          </Form>
        </Row>
        <Row>
          {output.success ? <div className='result'>{output.text}</div> : null}
        </Row>
      </Container>
    </AppContext.Provider>
  )
}

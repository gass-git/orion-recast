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
import InfoModal from './components/infoModal'
import useSound from 'use-sound'

// @ts-ignore
import bip from './assets/sounds/bip.wav'

// @ts-ignore
import breach from './assets/sounds/breach.wav'

export const AppContext = createContext(null)

export default function App() {
  const [state, dispatch] = useReducer(appReducer, initialState)
  const {input, output, showModal} = state
  const inputField = useRef<HTMLInputElement>(null)
  const [playSoundOne] = useSound(bip)
  const [playSoundTwo] = useSound(breach)

  function handleChange(e: React.ChangeEvent<Element>): void{
    playSoundOne()
    dispatch({
      type:'update input value', 
      value: (e.target as HTMLInputElement).value
    })
  }
  
  function handleSubmit(): void{
    playSoundTwo()
    processInput(getNumberOfWords(input), dispatch, state)
    dispatch({type: 'reset input'})
  }

  useEffect(() => {
    setTimeout(() => {
      if(inputField.current !== null) inputField.current.focus()
    }, 200)
  })

  useEffect(() => {
    if(input.length > 0) dispatch({type: 'reset output'})
  },[input])

  return (
    <AppContext.Provider value={{state, dispatch}}>
      
      <InfoModal dispatch={dispatch} showModal={showModal} />

      <Container className='max-600 min-300 mt-5 pt-3 pb-3'>
        <Title />
      </Container>

      <Container className='max-550 min-300'>
        {/* @ts-ignore */}
        <AlertBox dispatch={dispatch} output={output} />
        <FormComponent 
            dispatch={dispatch}
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

import React, {createContext, useReducer} from 'react'
import './styles.css'
import { getNumberOfWords } from './functions/utilityFunctions'
import { processInput } from './functions/processInput'
import { appReducer, initialState } from './states'

export const AppContext = createContext(null)

export default function App() {
  const [state, dispatch] = useReducer(appReducer, initialState)
  const {input, data, metals} = state

  function handleChange(e){
    dispatch({type:'update input value', value: e.target.value})
  }

  function handleClick(){
    let numberOfWords = getNumberOfWords(input)
    processInput(numberOfWords, input, dispatch, data, metals)
    dispatch({type: 'reset input'})
  }

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <input name='inputString' value={input} onChange={handleChange}/>
      <button onClick={() => handleClick()}>enter</button>
    </AppContext.Provider>
  )
}

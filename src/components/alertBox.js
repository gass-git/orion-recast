import React from 'react'
import { Alert } from 'react-bootstrap'

export default function AlertBox({text, dispatch}) {
   return (
    <Alert
        className='alert btn-close-white'
        data-testid='alert'
        variant='danger'
        onClose={() => dispatch({type:'reset output'})}
        dismissible
      >
        <Alert.Heading>Oh snap! You got an error! Make sure:</Alert.Heading>
        <span style={{fontSize:'20px'}}>- {text}</span>
      </Alert >
  )
}
import React from 'react'
import { Alert } from 'react-bootstrap'

export default function AlertBox({text, dispatch}) {
   return (
    <Alert
        className='alert'
        data-testid='alert'
        variant='danger'
        onClose={() => dispatch({type:'reset output'})}
        dismissible
      >
        <Alert.Heading>Oh snap! You got an error! Make sure:</Alert.Heading>
        - {text}<br />
      </Alert >
  )
}
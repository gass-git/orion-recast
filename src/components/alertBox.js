import React, { memo } from 'react'
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
        <Alert.Heading>Oh snap! The input is not valid! Consider the following:</Alert.Heading>
        - {text}<br />
      </Alert >
  )
}
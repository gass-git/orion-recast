import React from 'react'
import { Row, Alert } from 'react-bootstrap'

interface Output{
  output: { 
    success: boolean | string
    text: string 
  }
}

export default function AlertBox(
  {output}: Output, 
  {dispatch}: any
  ){
  if (output.success) return null

  else return (
    <Row>
      <Alert
        className='alert btn-close-white'
        data-testid='alert-test-id'
        variant='danger'
        onClose={() => dispatch({ type: 'reset output' })}
        dismissible
      >
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <span style={{ fontSize: '20px' }}>- {output.text}</span>
      </Alert >
    </Row>
  )
}
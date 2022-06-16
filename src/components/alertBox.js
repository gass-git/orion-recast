import React, { memo } from 'react'
import { Alert } from 'react-bootstrap'

export default function AlertBox({text}) {
   return (
    <Alert
        data-testid='alert'
        variant='danger'
        dismissible
      >
        <Alert.Heading>Oh snap! The input is not valid! Consider the following:</Alert.Heading>
        - {text}<br />
      </Alert >
  )
}
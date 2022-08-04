import React from 'react'
import {Row} from 'react-bootstrap'

interface Output{
  output: { 
    success: boolean | string
    text: string 
  }
}

export default function OutputComponent({output}: Output) {
  if(output.success) return (
    <Row>
        <div className='result'>{output.text}</div>
    </Row>
  )

  else return null
}

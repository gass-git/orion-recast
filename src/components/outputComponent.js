import React from 'react'
import {Row} from 'react-bootstrap'

export default function OutputComponent({output}) {
  if(output.success) return (
    <Row>
        <div className='result'>{output.text}</div>
    </Row>
  )

  else return null
}

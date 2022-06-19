import React from 'react'
import {Form, Button, Row} from 'react-bootstrap'

export default function FormComponent({input, inputField, handleChange, handleSubmit}) {
  return (
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
          onClick={() => handleSubmit()}
        >
          submit
        </Button>
      </Form>
    </Row>
  )
}

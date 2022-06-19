import React from 'react'
import {Form, Button, Row, InputGroup} from 'react-bootstrap'

export default function FormComponent({
  input, 
  inputField, 
  handleChange, 
  handleSubmit, 
  dispatch
}) {
  return (
    <Row className='p-5'>
    <Form className='text-center'>
      <InputGroup>
        <InputGroup.Text 
          id='input-field-id' 
          style={{
            color:'rgba(51, 255, 0, 0.8)',
            backgroundColor:'transparent',
            border:'1px solid transparent',
            fontSize:'33px',
            width:'35px'
          }}
        >
          &#62;
        </InputGroup.Text>
        <Form.Control
          className='input-field'
          ref={inputField}
          type='text'
          name='inputString'
          value={input} 
          onChange={handleChange}
          aria-describedby='input-field-id'
        />
        </InputGroup>
        <Button
          variant='outline-primary'
          size='lg'
          className='button font-green' 
          onClick={() => handleSubmit()}
        >
          submit
        </Button>
        <Button
          variant='outline-primary'
          size='lg'
          className='button font-orange'
          onClick={() => dispatch({type:'toggle modal'})}
        >
          how to query
        </Button>
      </Form>
    </Row>
  )
}

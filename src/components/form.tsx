import React, { ChangeEvent } from 'react'
import { Form, Button, Row, InputGroup } from 'react-bootstrap'

interface Form {
  input: string
  inputField: any
  handleChange: (e: React.ChangeEvent<Element>) => void
  handleSubmit: () => void
  dispatch: any
}

export default function FormComponent({
  input,
  inputField,
  handleChange,
  handleSubmit,
  dispatch
}: Form) {

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    handleSubmit()
  }

  return (
    <Row className='p-5'>
      <Form id='form' className='text-center' onSubmit={(e) => onSubmit(e)}>
        <InputGroup>
          <InputGroup.Text
            id='input-field-id'
            className='input-text'
          >
            &#62;
          </InputGroup.Text>
          <Form.Control
            className='input-field'
            data-testid='input-test-id'
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
          className='button'
          onClick={() => handleSubmit()}
        >
          submit
        </Button>
        <Button
          variant='outline-primary'
          size='lg'
          className='button'
          onClick={() => window.location.reload()}
        >
          reset
        </Button>
        <Button
          variant='outline-primary'
          size='lg'
          className='button'
          onClick={() => dispatch({ type: 'toggle modal' })}
        >
          how to query
        </Button>
      </Form>
    </Row>
  )
}

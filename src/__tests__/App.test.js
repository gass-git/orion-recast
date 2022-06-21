import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import App from '../App'

describe('show alert', () => {
    test('case - button is clicked with an empty input', () => {
        render(<App />)
        const button = screen.getByText('submit')
        fireEvent.click(button)
        expect(screen.getByText('Oh snap! You got an error!')).toBeInTheDocument()
    })
    test(`case - input is submited without containing the "is" word`, () => {
        render(<App />)
        const input = screen.getByTestId('input-test-id')
        const button = screen.getByText('submit')
        fireEvent.click(input, {target: {value: 'one i I'}})
        fireEvent.click(button)
        expect(screen.getByText('Oh snap! You got an error!')).toBeInTheDocument()
    })
})

describe('should output the correct answer', () => {
    test('case 1 - how much is pish tegj glob glob ?', () => {
        render(<App />)
        const input = screen.getByTestId('input-test-id')
        const button = screen.getByText('submit')
        fireEvent.change(input, {target: {value: 'glob is I'}})
        fireEvent.click(button)
        fireEvent.change(input, {target: {value: 'pish is X'}})
        fireEvent.click(button)
        fireEvent.change(input, {target: {value: 'tegj is L'}})
        fireEvent.click(button)
        fireEvent.change(input, {target: {value: 'how much is pish tegj glob glob ?'}})
        fireEvent.click(button)
        expect(screen.getByText('42')).toBeInTheDocument()
    })  
})

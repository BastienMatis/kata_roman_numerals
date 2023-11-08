import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RomanNumerals from './components/RomanNumerals';



describe('RomanNumerals Component', () => {
  it('converts user input to Roman numeral and displays the result', () => {
    // Render the component on a virtual DOM for testing
    const { getByLabelText, getByRole, getByText } = render(<RomanNumerals />);

    // Find the input field and button for interactions
    const input = screen.getByLabelText(/arabic number/i);
    const convertButton = screen.getByRole('button', { name: /convert/i });

    // Simulate user typing "10" into the input field
    fireEvent.change(input, { target: { value: '10' } });

    // Simulate user clicking the "Convert" button
    fireEvent.click(convertButton);

    // Assert that the expected output is rendered in the DOM
    expect(screen.getByText('X')).toBeInTheDocument();
  });;
});

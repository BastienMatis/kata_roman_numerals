import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RomanNumerals from './Components/RomanNumerals';

describe('RomanNumerals Component', () => {
  it('converts user input to Roman numeral and displays the result', () => {
    // Render the component on a virtual DOM for testing
    const { getByLabelText, getByRole, getByText } = render(<RomanNumerals />);

    // Find the input field and button for interactions
    const input = getByLabelText(/Convertir un chiffre arabe en chiffre romain/i);
    const convertButton = getByRole('button', { name: /convert/i });

    // Simulate user typing "10" into the input field
    fireEvent.change(input, { target: { value: '10' } });

    // Simulate user clicking the "Convert" button
    fireEvent.click(convertButton);

    // Assert that the expected output is rendered in the DOM
    expect(getByText('10: X', { selector: '.roman-result' })).toBeInTheDocument();
  });;
});

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RomanNumerals from './Components/RomanNumerals';
import ArabNumerals from './Components/ArabNumerals';

describe('RomanNumerals Component', () => {
  it('render RomanNumerals', () => {
    render(<RomanNumerals />);
  })

  it('renders the component', () => {
    render(<RomanNumerals />);
    expect(screen.getByLabelText(/Convertir un chiffre arabe en chiffre romain/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /convert/i })).toBeInTheDocument();
  });

  it('input changes update the state value', () => {
    render(<RomanNumerals />);
    const input = screen.getByLabelText(/Convertir un chiffre arabe en chiffre romain/i);
    fireEvent.change(input, { target: { value: '10' } });
    expect(input.value).toBe('10');
  });

  it('form submission updates the state 1 = 1', () => {
    render(<RomanNumerals />);
    const input = screen.getByLabelText(/Convertir un chiffre arabe en chiffre romain/i);
    const button = screen.getByRole('button', { name: /convert/i });

    fireEvent.change(input, { target: { value: '1' } });
    fireEvent.click(button);

    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('1: I');
  });

  it('form submission updates the state 5 = V', () => {
    render(<RomanNumerals />);
    const input = screen.getByLabelText(/Convertir un chiffre arabe en chiffre romain/i);
    const button = screen.getByRole('button', { name: /convert/i });

    fireEvent.change(input, { target: { value: '5' } });
    fireEvent.click(button);

    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('5: V');
  });

  it('converts user input to Roman numeral and displays the result', () => {
    // Render the component on a virtual DOM for testing
    const { getByLabelText, getByRole, getByText } = render(<RomanNumerals />);

    // Find the input field and button for interactions
    const input = screen.getByLabelText(/Convertir un chiffre arabe en chiffre romain/i);
    const convertButton = screen.getByRole('button', { name: /convert/i });

    // Simulate user typing "10" into the input field
    fireEvent.change(input, { target: { value: '10' } });

    // Simulate user clicking the "Convert" button
    fireEvent.click(convertButton);

    // Assert that the expected output is rendered in the DOM
    expect(screen.getByText('10: X', { selector: '.roman-result' })).toBeInTheDocument();
  });;
});

describe('ArabNumerals Component', () => {

  it('render ArabNumerals', () => {
    render(<ArabNumerals />);
  })

  it('renders the component', () => {
    render(<ArabNumerals />);
    expect(screen.getByLabelText(/Convertir un chiffre romain en chiffre arabe/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /convert/i })).toBeInTheDocument();
  });

  it('input changes update the state value', () => {
    render(<ArabNumerals />);
    const input = screen.getByLabelText(/Convertir un chiffre romain en chiffre arabe/i);
    fireEvent.change(input, { target: { value: 'X' } });
    expect(input.value).toBe('X');
  });


});

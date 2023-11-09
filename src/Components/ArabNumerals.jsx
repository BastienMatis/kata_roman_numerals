import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class ArabNumerals extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            roman: '',
            errorMessage: '',
            number: '',
            romanNumerals: ["I", "V", "X", "L", "C", "D", "M", "O"]
        }
    }

    handleChange = (event) => {
        const inputValue = event.target.value;
        this.setState({ value: inputValue, errorMessage: '' });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const romanNumber = this.state.value;
        // if romanNumber contains a number, special character, space, or letter not in the romanNumerals array, return error message
        if (romanNumber.match(/[0-9]/g) || romanNumber.match(/[^IVXLCDMO]/g) || romanNumber.match(/\s/g)) {
            this.setState({ errorMessage: 'Veuillez entrer un chiffre romain valide' });
        } else {
            this.setState({ number: this.convertToArab(romanNumber), roman: romanNumber });
        }

    }

    convertToArab = (romanNumber) => {
        const romanNumerals = {
            O: 0,
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
          };
        
          let result = 0;
          let prevValue = 0;
        
          for (let i = romanNumber.length - 1; i >= 0; i--) {
            const currentRoman = romanNumber[i];
            const currentValue = romanNumerals[currentRoman];
        
            if (currentValue < prevValue) {
              result -= currentValue;
            } else {
              result += currentValue;
            }
        
            prevValue = currentValue;
          }
        
          return result;
        };



    render() {
        return (
<div className="romanNumerals">
    <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label className="form-label">Convertir un chiffre romain en chiffre arabe</Form.Label>
            <Form.Control type="text" className="form-control" placeholder="Entrez un chiffre romain" onChange={this.handleChange} />
            <p className="error-message">{this.state.errorMessage}</p>
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-button">
            Convertir
        </Button>
    </Form>
    <h1 className="arab-result">{this.state.number === '' ? '' : `${this.state.roman}: ${this.state.number}`}</h1>
</div>
        );
    }
}

export default ArabNumerals;

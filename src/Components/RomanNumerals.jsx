import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class RomanNumerals extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            roman: '',
            errorMessage: '',
            number: ''
        }
    }

    handleChange = (event) => {
        const inputValue = event.target.value;
        if (inputValue >= 1 && inputValue <= 3999) {
            this.setState({ value: inputValue, errorMessage: '' });
        } else {
            this.setState({ errorMessage: 'Veuillez entrer un nombre entre 1 et 3999' });
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ roman: this.convertToRoman(this.state.value), number: this.state.value });
    }

    convertToRoman = (num) => {
        let roman = '';
        const romanNumerals = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        };

        for (let i in romanNumerals) {
            while (num >= romanNumerals[i]) {
                roman += i;
                num -= romanNumerals[i];
            }
        }
        return roman;
    }

    render() {
        return (
<div className="romanNumerals">
    <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label className="form-label">Convertir un chiffre arabe en chiffre romain</Form.Label>
            <Form.Control type="number" className="form-control" placeholder="Entrez un nombre entier" onChange={this.handleChange} />
            <p className="error-message">{this.state.errorMessage}</p>
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-button">
            Convertir
        </Button>
    </Form>
    <h1 className="roman-result">{this.state.roman === '' ? '' : `${this.state.number}: ${this.state.roman}`}</h1>
</div>
        );
    }
}

export default RomanNumerals;

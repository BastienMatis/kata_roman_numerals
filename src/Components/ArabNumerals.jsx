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
            romanNumerals: ["I", "V", "X", "L", "C", "D", "M"]
        }
    }

    handleChange = (event) => {
        const inputValue = event.target.value;
        this.setState({ value: inputValue, errorMessage: '' });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const romanNumber = this.state.value;
        const romanNumerals = this.state.romanNumerals;
        // if romanNumber contains a number, special character, space, or letter not in the romanNumerals array, return error message
        if (romanNumber.match(/[0-9]/g) || romanNumber.match(/[^IVXLCDM]/g) || romanNumber.match(/\s/g)) {
            this.setState({ errorMessage: 'Veuillez entrer un chiffre romain valide' });
        } else {
            // this.setState({ number: this.convertToArab(romanNumber) });
        }

    }


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
    <h1 className="roman-result">{this.state.number === '' ? '' : `${this.state.roman}: ${this.state.number}`}</h1>
</div>
        );
    }
}

export default ArabNumerals;

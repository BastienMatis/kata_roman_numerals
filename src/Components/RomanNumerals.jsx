import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class RomanNumerals extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            roman: ''
        }
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ roman: this.convertToRoman(this.state.value) });
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
                        <Form.Label>Arabic number</Form.Label>
                        <Form.Control type="number" placeholder="Enter number" onChange={this.handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Convert
                    </Button>
                </Form>
                <h1>{this.state.roman}</h1>
            </div>
        );
    }
}

export default RomanNumerals;
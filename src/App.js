import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './App.css';
import HomePage from './Pages/HomePage';

function App() {
  const [home, setHome] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/home")
      .then((res) => res.json())
      .then((data) => setHome(data.home));
  }, []);

  return (
    <div className="App">
      <h1>{home}</h1>

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
    </div>
  );
}

export default App

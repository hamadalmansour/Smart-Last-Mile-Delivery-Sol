
import * as React from 'react';
import  { useRef, useState } from "react";
import  { Form, Button, Card, Alert } from "react-bootstrap";
import { Container } from 'react-bootstrap';
import { AuthProvider, useAuth} from '../contexts/AuthContext';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Link, useNavigate} from 'react-router-dom';
import { Router } from 'express';



export default function Signup() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const signup  = useAuth()
    const [erorr, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return
            setError('Passwords do not match')
        }
        try {
            setError("")
            setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
        navigate('/')
        
    } catch  {
        setError('Failed to Create an account')
    }
    setLoading(false)
    }
    return(
        <AuthProvider>
        <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}>

         <div className="w-100" style={{ maxWidth: "400px" }}>
        
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Signup</h2>  
                        {erorr && <Alert variant="danger">{erorr}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required />
                            </Form.Group>
                            <Form.Group id="confirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" ref={confirmPasswordRef} required />
                            </Form.Group>
                            <Button disabled= {loading} className="w-100" type="submit">Sign Up</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                    Already have an account? <Link to="/login">Log In</Link>
                </div>
        </div>
        </Container>
        </AuthProvider>
    )
}
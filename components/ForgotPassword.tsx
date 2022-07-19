
import * as React from 'react';
import  { useRef, useState } from "react";
import  { Form, Button, Card, Alert } from "react-bootstrap";
import { Container } from 'react-bootstrap';
import { AuthProvider, useAuth} from '../contexts/AuthContext';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Link , useNavigate} from 'react-router-dom';
import { Router } from 'express';



export default function ForgotPassword() {
    const emailRef = useRef<HTMLInputElement>(null);
    const { resetPassword } = useAuth()
    const [erorr, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [message, setMessage] = useState("")


    async function handleSubmit(e){
        e.preventDefault()

        
        try {
            setMessage("")
            setError("")
            setLoading(true)
        await resetPassword(emailRef)
        setMessage("Password reset link has been sent to your email")
        //navigate('/')

    } catch  {
        setError('Failed to sign in')
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
                        <h2 className="text-center mb-4">Password Reset</h2>  
                        {erorr && <Alert variant="danger">{erorr}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Button disabled= {loading} className="w-100" type="submit">Rest Password</Button>
                        </Form>
                        <div className="w-100 text-center mt-3">
                            <Link to="/login">Log In</Link>
                        </div>

                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                    Need an account? <Link to="/signup">Sign Up</Link>
                </div>
        </div>
        </Container>
        </AuthProvider>
    )
}
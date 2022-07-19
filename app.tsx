import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
//import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import * as data from './components/DataTypes';
import { Form, Button, Card, Alert, Navbar, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
//import AuthRoute from './components/AuthRoute';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { response } from 'express';
import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from './contexts/AuthContext';






//import components
import {Home} from './components/Home';
import {Cars}from './components/Cars';
import {Drivers} from './components/Drivers';
import {Parcels} from './components/Parcels';
import {Register} from './components/Register';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import UpdateProfile from './components/UpdateProfile';







// App Class
class App extends React.Component  {
    


    render() {
        return (

            <div>
         

            

                
            <Navbar className='navbar-dark bg-dark' expand="lg">
                <Navbar.Brand href="#home">
                    <img src="https://im.ge/i/FrrNo1" alt="SLMS Logo" />
                </Navbar.Brand>
                
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/cars">Cars</Nav.Link>
                        <Nav.Link href="/drivers">Drivers</Nav.Link>
                        <Nav.Link href="/parcels">Parcels</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/logout">Logout</Nav.Link>
                        <Nav.Link href="/updateprofile">Update Profile</Nav.Link>
                    </Nav>
                
            </Navbar>
                   
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="cars" element={<Cars />} />
                            <Route path="drivers" element={<Drivers />} />
                            <Route path="parcels" element={<Parcels />} />
                            <Route path="register" element={<Register />} />
                            <Route path="login" element={<Login />} />
                            <Route path="logout" element={<Logout />} />
                            <Route path="updateprofile" element={<UpdateProfile />} />
                        </Routes>
                    


               


            

            </div>
       
        
        );
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,);




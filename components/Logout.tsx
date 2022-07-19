import * as React from 'react';
import { useContext, useState, useEffect, } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, Button, Alert } from 'react-bootstrap';
import { useNavigate , Link} from 'react-router-dom';

export default function Logout() {
  const [error, setError] = useState(null as any);
  const currentUser = useAuth();
    //const navigate = useNavigate();

  async function handleLogout() {
    setError("")

    try {
        await Logout()
       // navigate('/login')
    } catch  {
        setError('Failed to logout');
    }
    }


    return (
        <div>
            <Card>
                <Card.Header>Logout</Card.Header>
                <Card.Body>
                    <Button onClick={handleLogout}>Logout</Button>
                </Card.Body>
            </Card>
            {error && <Alert variant="danger">{error}</Alert>}
        </div>
    );
}

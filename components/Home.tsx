import * as React from 'react';
import * as data from './DataTypes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Card, Alert, Navbar, Nav } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';







export class Home extends React.Component<any, any> {
    //display number of warnings, Parcels, available cars, and available drivers
    
    state = {
        warnings: [],
        parcels: [],
        cars: [],
        drivers: []
    }

    componentDidMount() {
        fetch('/api/warnings').then(response => response.json()).then(data => {
            this.setState({ warnings: data });
        }
        ).catch(err => console.log(err));

        fetch('/api/parcels').then(response => response.json()).then(data => {
            this.setState({ parcels: data });
        }
        ).catch(err => console.log(err));

        fetch('/api/cars').then(response => response.json()).then(data => {
            this.setState({ cars: data });
        }
        ).catch(err => console.log(err));

        fetch('/api/drivers').then(response => response.json()).then(data => {
            this.setState({ drivers: data });
        }
        ).catch(err => console.log(err));
    }

    render() {
        return (
//add background color to the home page
           
            
            <div>
    
    <div className="bg-light">
                <div className="container">
                
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                            <div className='bg-light'>
                                <div className="card-body">
                                    <h2 className="card-title">Quick Overview</h2>
                                    <h5 className="card-subtitle mb-2 text-muted">
                                    </h5>
                                    <p className="card-text">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="card">
                                                    <div className="bg-danger">
                                                    <div className="card-body">
                                                        <h5 className="card-title">Warnings</h5>
                                                        <p className="card-text">
                                                            {this.state.warnings.length}
                                                        </p>
                                                    </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="card">
                                                    <div className="bg-success">
                                                    <div className="card-body">
                                                        <h5 className="card-title">Parcels</h5>
                                                        <p className="card-text">
                                                            {this.state.parcels.length}
                                                        </p>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="card">
                                                    <div className="bg-warning">
                                                    <div className="card-body">
                                                        <h5 className="card-title">Cars</h5>
                                                        <p className="card-text">
                                                            {this.state.cars.length}
                                                        </p>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="card">
                                                    <div className="bg-info">
                                                    <div className="card-body">
                                                        <h5 className="card-title">Drivers</h5>
                                                        <p className="card-text">
                                                            {this.state.drivers.length}
                                                        </p>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        
        
            


       
                
               <div>

                <Card border="warning">
                <CardHeader>
                    <Card.Title className='text-center'><h2>Warnings</h2></Card.Title>
                </CardHeader>
                </Card>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Message</th>
                            <th>Date</th>
                            <th>Severity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.warnings.map(warning => (
                            <tr className='active'>
                                <td>{warning.message}</td>
                                <td>{warning.date}</td>
                                <td>{warning.severity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <CardHeader>
                    <Card.Title className='text-center'><h2>On Delievery Parcels</h2></Card.Title>
                </CardHeader>
                <table className="table">
                    <thead className="thead-dark">
                        <tr className='active'>
                            <th scope='col'>ID</th>
                            <th scope='col'>Customer</th>
                            <th scope='col'>Phone</th>
                            <th scope='col'>Paecelstatus</th>
                            <th scope='col'>Priority</th>
                            <th scope='col'>Delivery Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.parcels.map(parcel => 
                        <tr className='active'> 
                            <td>{parcel.id}</td>
                            <td>{parcel.customer}</td>
                            <td>{parcel.phone}</td>
                            <td>{parcel.status}</td>
                            <td>{parcel.priority}</td>
                            <td>{parcel.deliveryDate}</td>
                        </tr>)}
                    </tbody>
                </table>
            <Card.Header>
                <Card.Title className='text-center'><h2>Available Cars</h2></Card.Title>
            </Card.Header>
                
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope='col'>make</th>
                            <th scope='col'>model</th>  
                            <th scope='col'>year</th>
                            <th scope='col'>status</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cars.map(car => 
                        <tr>
                            <td>{car.make}</td>
                            <td>{car.model}</td>
                            <td>{car.year}</td>
                            <td>{car.status}</td>
                        </tr>)}
                    </tbody>
                </table>


             
  
                <Card.Header>
                    
                    <Card.Title className="text-center">
                        <h2>Available Drivers</h2>
                    </Card.Title>
                    </Card.Header>
            
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope='col'>First Name</th>
                            <th scope='col'>Last Name</th>
                            <th scope='col'>Phone</th>
                            <th scope='col'>Work Status</th>
                            <th scope='col'>Score</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.drivers.map(driver => <tr>
                            <td>{driver.fname}</td>
                            <td>{driver.lname}</td>
                            <td>{driver.phone}</td>
                            <td>{driver.workStatus}</td>
                            <td>{driver.score}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
            </div>
            </div>
        );
    }
}




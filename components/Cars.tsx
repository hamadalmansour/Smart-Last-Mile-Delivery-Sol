import * as React from 'react';
import * as data from './DataTypes';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';




//cars page
export class Cars extends React.Component<any, any> {
    state = {
        cars: []
    }

    componentDidMount() {
        fetch('/api/cars').then(response => response.json()).then(data => {
            this.setState({ cars: data });
        }
        ).catch(err => console.log(err));
    }

    render() {
        return (
          



        <div>
            <h2>Available Cars</h2>
            <table>
                <thead>
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>status</th>
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
            </div>
            

        );


          
    }
}

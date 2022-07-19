import * as React from 'react';
import * as data from './DataTypes';




//drivers page
export class Drivers extends React.Component<any, any> {
    state = {
        drivers: []
    }

    componentDidMount() {
        fetch('/api/drivers').then(response => response.json()).then(data => {
            this.setState({ drivers: data });
        }
        ).catch(err => console.log(err));
    }

    render() {
        return (
            <div>
             <h2>Available Drivers</h2>
            
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>workStatus</th>
                        <th>score</th>
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
        );
    }
}




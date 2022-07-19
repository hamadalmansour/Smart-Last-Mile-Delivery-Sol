import * as React from 'react';
import * as data from './DataTypes';




//Parcels page
export class Parcels extends React.Component<any, any> {
    state = {
        parcels: []
    }

    componentDidMount() {
        fetch('/api/parcels').then(response => response.json()).then(data => {
            this.setState({ parcels: data });
        }
        ).catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                 <h2>On Delivery Parcels</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Customer</th>
                            <th>Phone</th>
                            <th>Paecelstatus</th>
                            <th>Priority</th>
                            <th>Delivery Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.parcels.map(parcel => 
                        <tr>
                            <td>{parcel.id}</td>
                            <td>{parcel.customer}</td>
                            <td>{parcel.phone}</td>
                            <td>{parcel.status}</td>
                            <td>{parcel.priority}</td>
                            <td>{parcel.deliveryDate}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

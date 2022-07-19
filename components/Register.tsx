import * as React from 'react';
import * as data from './DataTypes';









export class Register extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {}
        this.registerParcel = this.registerParcel.bind(this);
        this.registerDriver = this.registerDriver.bind(this);
        this.registerCar = this.registerCar.bind(this);
    }

    registerParcel(event) {
        event.preventDefault();
        let parcel : data.Parcel = {
            id: event.target.id.value,
            customer: event.target.customer.value,
            phone: event.target.phone.value,
            location_x: event.target.location_x.value,
            location_y: event.target.location_y.value,
            status: data.Parcelstatus.Pending,
            priority: data.ParcelPriority.Low,
            deliveryDate: new Date().toISOString().substring(0, 10)
        }
    
        let request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(parcel)
        };
        console.log(request);

        fetch('/api/parcels', request).then(response => response.json()).then(data => {
            console.log(data);
        }).catch(err => console.log(err));
    }


    registerDriver(event) {
        event.preventDefault();
        let driver : data.Driver = {
            fname: event.target.fname.value,
            lname: event.target.lname.value,
            govID: event.target.govID.value,
            Id: event.target.id.value,
            phone: event.target.phone.value,
            age: event.target.age.value,
            address: event.target.address.value,
            email: event.target.email.value,
            licenseStatus: data.LicenseStatus.valid,
            startingDate: new Date().toISOString().substring(0, 10),
            endDate: new Date().toISOString().substring(0, 10),
            score: event.target.score.value,
            workStatus: data.WorkStatus.OnDuty
        }
        let request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(driver)
        };

        console.log(request);

        fetch('/api/drivers', request).then(res => res.json()).then(data => {
            console.log(data);
        }).catch(err => console.log(err));
    }



    registerCar(event) {
        event.preventDefault();
        let car : data.Car = {
            licensePlate: event.target.licensePlate.value,
            make: event.target.make.value,
            model: event.target.model.value,
            year: event.target.year.value,
            status: data.CarStatus.available
        }

        let request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        };

        console.log(request);

        fetch('/api/cars', request).then(res => res.json()).then(data => {
            console.log(data);
        }).catch(err => console.log(err));
    }

    
    render() {
        return (
            <div>
                <h1>Register</h1>
                <h2>Register Parcel</h2>
                <form onSubmit={this.registerParcel}>
                    <label>ID:</label>
                    <input type="text" name="id" />
                    <label>Customer:</label>
                    <input type="text" name="customer" />
                    <label>Phone:</label>
                    <input type="text" name="phone" />
                    <label>Location X:</label>
                    <input type="text" name="location_x" />
                    <label>Location Y:</label>
                    <input type="text" name="location_y" />
                    <label>Status:</label>
                    <select name="status">
                        <option value="Pending">pending</option>
                        <option value="InProgress">InProgress</option>
                        <option value="Delivered">delivered</option>
                        <option value="Cancelled">cancelled</option>
                    </select>
                    <label>Priority:</label>
                    <select name="priority">
                        <option value="Low">low</option>
                        <option value="Medium">medium</option>
                        <option value="High">high</option>
                    </select>
                    <label>Delivery Date:</label>
                    <input type="date" name="deliveryDate" />
                    <input type="submit" value="Register" />
                </form>
                <h2>Register Driver</h2>
                <div>
                <h1>Register Driver</h1>
                <form onSubmit={this.registerDriver} >
                    <div>
                        <label>First Name</label>
                        <input type="text" name="fname" placeholder="John" />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" name="lname" placeholder="Doe" />
                    </div>
                    <div>
                        <label>Government ID</label>
                        <input type="text" name="govID" placeholder="123456789" />
                    </div>
                    <div>
                        <label>ID</label>
                        <input type="text" name="id" placeholder="123456789" />
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input type="text" name="phone" placeholder="1234567890" />
                    </div>
                    <div>
                        <label>Age</label>
                        <input type="text" name="age" placeholder="20" />
                    </div>
                    <div>
                        <label>Address</label>
                        <input type="text" name="address" placeholder="123 Main St" />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" name="email" placeholder="" />
                    </div>
                    <div>
                        <label>License Status</label>
                        <select name="licenseStatus">
                            <option value="data.LicenseStatus.valid">Valid</option>
                            <option value="data.LicenseStatus.invalid">Invalid</option>
                            <option value="data.LicenseStatus.pending">Pending</option>
                        </select>
                    </div>
                    <div>
                        <label>Work Status</label>
                        <select name="workStatus">
                            <option value="data.WorkStatus.OnDuty">On Duty</option>
                            <option value="data.WorkStatus.OffDuty">Off Duty</option>
                        </select>
                    </div>
                    <div>
                        <label>Score</label>
                        <input type="text" name="score" placeholder="0" />
                    </div>
                    <div>
                        <input type="submit" value="Register" />
                    </div>
                </form>
            </div>
                
                <div>
                <h2>Register Car</h2>
                <form onSubmit={this.registerCar}>
                    <div>
                        <label>License Plate:</label>
                        <input type="text" name="licensePlate" />
                    </div>
                    <div>
                        <label>Make:</label>
                        <input type="text" name="make" />
                    </div>
                    <div>
                        <label>Model:</label>
                        <input type="text" name="model" />
                    </div>
                    <div>
                        <label>Year:</label>
                        <input type="text" name="year" />
                    </div>
                    <div>
                        <input type="submit" value="Register" />
                        
                    </div>
                </form>
            </div>
            </div>
        );
    }
}


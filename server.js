const path = require('path');
const express = require('express');
const { urlencoded } = require('express');
const mongoose = require('mongoose');
const { useCallback } = require('react');
const bcrypt = require('bcrypt');
// import * as schema from './schemas.mjs';
// const schema = require('./schemas.js');

const app = express();
const port = 3000;

let StaticPath = path.join(__dirname, '/');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(StaticPath));
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

const mongoURI = 'mongodb://localhost:27017/COE558_ProjectDBCopy';
const dbName = 'COE558_ProjectDBCopy';

mongoose.connect(mongoURI + dbName, { useUnifiedTopology: true, serverSelectionTimeoutMS: 1000 });

//schema for the database
//warnings schema
const warningSchema = new mongoose.Schema({
    severity: {
        type: String,
        required: true,
        enum: ['low', 'medium', 'high']
    },
    type: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
        
    },
    date: {
        type: Date,
        required: true,
        default: new Date(). toISOString(),
    }
}
);


//Parcel schema
const parcelSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    customer: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
   location_x: {
        type: Number,
        required: true

    },
    location_y: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'InProgress','Delivered', 'Cancelled'],
        default: 'Pending'
    },
    prioirty: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Low'
    },
    deliveryDate: {
        type: Date,
        required: true,
        default: new Date().toISOString(),
    }
}
);

//car schema
const carSchema = new mongoose.Schema({
    licensePlate: {
        type: String,
        required: true,
        unique: true
    },
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['available', 'in-use', 'maintenance'],
        default: 'available'
    }
}
);

//driver schema
const driverSchema = new mongoose.Schema({
fname   : {
    type    : String,
    required : true
},
lname   : {
    type    : String,
    required : true
},
govID   : {
    type    : Number,
    required : true,
    unique  : true,
    length  : 10
},
Id      : {
    type    : Number,
    required : true,
    unique  : true
},
phone   : {
    type    : Number,
    required : true,
    unique  : true,
    length  : 10
},
age     : {
    type    : Number,
    required : true,
    min     : 18,
    max     : 60
},
address : {
    type    : String,
    required : true
},
email   : {
    type    : String,
    required : true,
    unique  : true
},
licenseStatus : {
    type    : String,
    required : true,
    enum    : ['Valid', 'Invalid', 'Pending']
},
startDate : {
    type    : String,
    default : new Date().toDateString(),
    required : true
},
endDate : {
    type    : String,
    default : new Date().toDateString(),
    required : true
},
score : {
    type    : Number,
    required : true,
    min     : 0,
    max     : 100
},
workStatus : {
    type    : String,
    required : true,
    enum    : ['On Duty', 'Off Duty', 'On Leave', 'On Training', 'On Vacation']
}
}
);

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}
);




const Warning = mongoose.model('Warning', warningSchema);
const Parcel = mongoose.model('Parcel', parcelSchema);
const Car = mongoose.model('Car', carSchema);
const Driver = mongoose.model('Driver', driverSchema);
const User = mongoose.model('User', userSchema);




//APIs
//get all warnings
app.get('/api/warnings', (req, res) => {
    const Warning = mongoose.model('Warning', warningSchema);
    Warning.find({}, (err, warnings) => {
        if (err) {
            res.send(err);
        } else {
            res.send(warnings);
        }
    }
    );
}
);


//register a new Parcel
app.post('/api/parcels', (req, res) => {
    let parcel = new Parcel({
        id: req.body.id,
        customer: req.body.customer,
        phone: req.body.phone,
        location_x: req.body.location_x,
        location_y: req.body.location_y,
        status: req.body.status,
        prioirty: req.body.prioirty,
        deliveryDate: req.body.deliveryDate
    });
    parcel.save((err, data) => {
        if (err) {
            console.log(req.body);
            console.log(parcel)
            res.status(500).send(err);
        } else {
            res.json({'message': 'Parcel registered!'});
            
        }

    }
    );
}
);

//get all Parcels
app.get('/api/parcels', (req, res) => {
    Parcel.find({}, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(data);
        }
    }
    );
}
);


//register a new car
app.post('/api/cars', (req, res) => {
    let car = new Car({
        licensePlate : req.body.licensePlate,
        make : req.body.make,
        model : req.body.model,
        year : req.body.year,
        carStatus: req.body.status
    });
    car.save((err, data) => {
        if (err) {
            console.log(req.body);
            console.log(car)
            res.status(500).send(err);
        } else {
            res.json({'message': 'Car registered'});
        }
    });
});


// display all cars in database in page Cars
app.get('/api/cars', (req, res) => {
    Car.find({}, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(data);
        }
    }
    );
}
);


//register a new driver
app.post('/api/drivers', (req, res) => {
    let driver = new Driver({
        fname : req.body.fname,
        lname : req.body.lname,
        govID : req.body.govID,
        Id : req.body.Id,
        phone : req.body.phone,
        age : req.body.age,
        address : req.body.address,
        email : req.body.email,
        licenseStatus : req.body.licenseStatus,
        startDate : req.body.startDate,
        endDate : req.body.endDate,
        score : req.body.score,
        workStatus : req.body.workStatus
    });
    driver.save((err, data) => {
        if (err) {
            console.log(req.body);
            console.log(driver)
            res.status(500).send(err);
        } else {
            res.json({'message': 'Driver registered'});
        }
    });
}
);



//get all drivers
app.get('/api/drivers', (req, res) => {
    const Driver = mongoose.model('Driver', driverSchema);
    Driver.find({}, (err, drivers) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(drivers);
        }
    }
    );
}
);










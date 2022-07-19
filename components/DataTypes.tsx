// data types





export enum WarningSeverity {
    low = "Low",
    medium = "Medium",
    high = "High",
    critical = "Critical"
}

export type warning = {
    severity: WarningSeverity;
    message: string;
    date: string;
}

//signup
export type signup = {
    username: string;
    password: string;
}

//Signin
export type signin = {
    username: string;
    password: string;
}


export type Parcel = {
    id: number;
    customer: string;
    phone: number;
    location_x: number;
    location_y: number;
    status: Parcelstatus;
    priority: ParcelPriority;
    deliveryDate: string;
}

export enum Parcelstatus {
    Pending = "Pending",
    InProgress = "InProgress",
    Delivered = "Delivered",
    Cancelled = "Cancelled"
}

export enum ParcelPriority {
    Low = "Low",
    Medium = "Medium",
    High = "High"
}



export type Driver = {
    fname: string;
    lname: string;
    govID: number;
    Id: number;
    phone: number;
    age: number;
    address: string;
    email: string;
    licenseStatus: LicenseStatus;
    startingDate: string;
    endDate: string;
    score: number;
    workStatus: WorkStatus;

}


export enum WorkStatus {
    OnDuty = "On Duty",
    OffDuty = "Off Duty",
    OnLeave = "On Leave",
    OnTraining = "On Training",
    OnVacation = "On Vacation"
}
export enum LicenseStatus {
    valid = "Valid",
    invalid ="Invalid",
    pending = "Pending"
}
export type Car = {
    licensePlate: string;
    make: string;
    model: string;
    year: number;
    status: CarStatus;
    
}
export enum CarStatus {
    available = "Available",
    unavailable = "Unavailable"
}
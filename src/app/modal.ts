export interface User {
    id? : number,
    userName : string,
    userEmail : string,
    phoneNumber : number,
    country : string
}
export interface Result {
    id : number,
    userName : string,
    userEmail : string,
    phoneNumber : number,
    country : string
}
export interface Atten {
    id : number,
    dateOfAttendance : Date,
    studentName : string,
    status : string
}
export interface displayData {
    data : string,
    label : Date,
    colours : [{
        fillColor : string,
        strokeColor : string,
        highlightFill : string,
        highlightStroke : string
    }]
}

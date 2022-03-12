import * as Valid from '../Validation/SharedValidation.js';

export default class Doctor {



    constructor(...arg) {
        if (arguments.length == 1) {
            this.fireID =  arguments[0].fireID;
            this.id =  arguments[0].id;
            this.NAME = arguments[0].NAME;
            this.phone = arguments[0].phone ;
            this.specialization = arguments[0].specialization;
            this.address =  arguments[0].address;
            this.degree =  arguments[0].degree;
            this.gender =  arguments[0].gender;
            this.password =arguments[0].password;
            this.email =  arguments[0].email;
        } 
        else if (arguments.length != 0) {
            this.fireID =  arguments[0];
            this.id = { Value:  arguments[1], _Valid: true };
            this.NAME = { Value:  arguments[2], _Valid: true };
            this.phone = { Value:  arguments[3], _Valid: true };
            this.specialization = { Value:  arguments[4], _Valid: true };
            this.address =  arguments[5];
            this.degree =  arguments[6];
            this.gender =  arguments[7];
            this.password = { Value:  arguments[8], _Valid: true };
            this.email = { Value:  arguments[9], _Valid: true };
        }  
        else  {
            this.fireID = "";
            this.id ='';
            this.NAME = '';
            this.phone = '';
            this.specialization = '';
            this.address =  '';
            this.degree =  '';
            this.gender =  '';
            this.password ='';
        }
    }

    //======================================set's=========================================
    set FireId(val) {
        this.fireID = val;
    }
    set Id(val) {
        this.id = { Value: val, _Valid: Valid.ValidId(val) };
    }
    set Name(val) {
        this.NAME = { Value: val, _Valid: Valid.ValidName(val) };
    }
    set Phone(val) {
        this.phone = { Value: val, _Valid: Valid.ValidPhone(val) };
    }
    set Specialization(val) {
        this.specialization = { Value: val, _Valid: Valid.ValidName(val) };
    }
    set Address(val) {
        this.address = val;
    }
    set Degree(val) {
        this.degree = val;
    }
    set Gender(val) {
        this.gender = val;
    }

    set Password(val) {
        this.password = { Value: val, _Valid: Valid.ValidPassword(val) };
    }
    set Email(val) {
        this.email = { Value: val, _Valid: Valid.ValidEmail(val) };
    }


    //======================================get's=========================================
    get FireId() {
        return this.fireID;
    }
    get Id() {
        return this.id;
    }
    get Name() {
        return this.NAME;
    }
    get Phone() {
        return this.phone;
    }
    get Specialization() {
        return this.specialization;
    }
    get Address() {
        return this.address;
    }
    get Degree() {
        return this.degree;
    }
    get Gender() {
        return this.gender;
    }

    get Password() {
        return this.password;
    }
    get Email() {
        return this.email;
    }


}
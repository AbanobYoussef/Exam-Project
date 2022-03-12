import * as Valid from '../Validation/SharedValidation.js';
export default class Patient {


    constructor(...arg) {
        if(arguments.length == 1){
            this.fireID = arguments[0].fireID;
            this.id = arguments[0].id;
            this.NAME =arguments[0].NAME;
            this.phone = arguments[0].phone;
            this.birth_date = arguments[0].birth_date;
            this.address = arguments[0].address;
            this.blood_type = arguments[0].blood_type;
            this.gender = arguments[0].gender;
            this.password = arguments[0].password ;
            this.email = arguments[0].email; 
        }
        else if (arguments.length != 0) {
            this.fireID = arguments[0];
            this.id = { Value: arguments[1], _Valid: true };
            this.NAME = { Value: arguments[2], _Valid: true };
            this.phone = { Value: arguments[3], _Valid: true };
            this.birth_date = arguments[4];
            this.address = arguments[5];
            this.blood_type = { Value: arguments[6], _Valid: true };
            this.gender = arguments[7];
            this.password = { Value: arguments[8], _Valid: true };
            this.email = { Value: arguments[9], _Valid: true };   
        }   
        else  {
            this.fireID = "";  
             this.id = '';
            this.NAME = '';
            this.phone = '';
            this.birth_date = '';
            this.address = '';
            this.blood_type = '';
            this.gender = '';
            this.password = '';
            this.email = '';
            this.prescriptopn= [];
            this.doctor =[];
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
    set Birth_Date(val) {
        this.birth_date = val;
    }
    set Address(val) {
        this.address = val;
    }
    set Blood_Type(val) {
        this.blood_type = { Value: val, _Valid: Valid.ValidBloodType(val) };
    }
    set Gender(val) {
        this.gender = val;
    }

    set Password(val) {
        this.password = { Value: val, _Valid: Valid.ValidPassword(val) };
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
    get Birth_Date() {
        return this.birth_date;
    }
    get Address() {
        return this.address;
    }
    get Blood_Type() {
        return this.blood_type;
    }
    get Gender() {
        return this.gender;
    }

    get Password() {
        return this.password;
    }
}




//==================================Validation============================
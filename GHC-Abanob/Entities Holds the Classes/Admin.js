import * as Valid from '../Validation/SharedValidation.js';
export default class Admin {




    constructor(...arg) {
          if (arguments.length != 0) {
            this.fireID =   arguments[0];
            this.id = { Value:   arguments[1], _Valid: true };
            this.NAME = { Value:   arguments[2], _Valid: true };
            this.phone = { Value:   arguments[3], _Valid: true };
            this.address =   arguments[4];
            this.gender =   arguments[5];
            this.password = { Value:   arguments[6], _Valid: true };
            this.email = { Value:   arguments[7], _Valid: true };
        } 
        else  {
            this.fireID = "";
             this.id = '';
            this.NAME = '';
            this.phone = '';
            this.address =   '';
            this.gender =  '';
            this.password = '';
            this.email = '';
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
    set Address(val) {
        this.address = val;
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
    get Address() {
        return this.address;
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
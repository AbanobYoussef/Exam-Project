//==========Name Valitaion================


export function ValidId(Val) {
    let id = /^\d{14}$/;
    return id.test(Val);
}

export function ValidName(Val) {
    let letters = /^[a-zA-Z ]+$/;
    return letters.test(Val);
}


export function ValidEmail(Val) {
    let email = /^\S+(@)\S+(.com)$/;

    return email.test(Val);
}

export function ValidPhone(Val) {
    let phone = /^(010|011|012|015)\d{8}$/;

    return phone.test(Val);
}

export function ValidBloodType(Val) {
    let types = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];
    return types.includes(Val);
}



export function ValidPassword(Val) {
    var lowerCaseLetters = /[a-z]/g;
    if (!lowerCaseLetters.test(Val)) {
        return [false, 'lowercase letter'];
    }


    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (!upperCaseLetters.test(Val)) {
        return [false, 'uppercase letter'];
    }


    // Validate numbers
    var numbers = /[0-9]/g;
    if (!numbers.test(Val)) {
        return [false, 'Number'];
    }

    // Validate length
    if (Val.length < 8) {
        return [false, 'Minimum 8 characters'];
    }

    return true;
}
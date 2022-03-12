import * as poreations from '../../../FireBase Holds the fuctions on the objects/PatOperation.js'
import patient from '../../../Entities Holds the Classes/patient.js'



    var submit = document.getElementById("submit");
    var txtNId = document.getElementById('txtNId');
    var txtName = document.getElementById('txtName');
    var txtBirthDate = document.getElementById('txtBirthDate');
    var phone = document.getElementById('phone');
    var blood = document.getElementById('blood');
    var txtAddress = document.getElementById('txtAddress');
    var password = document.getElementById('password');
    var conPassword = document.getElementById('conPassword');
    let Gender = document.getElementsByName("gender");

    let p = new patient();
    console.log(p);

submit.onclick = function() {
        p.Id = txtNId.value;//
        p.Name = txtName.value;//
        p.birth_date = txtBirthDate.value;//
        p.Address = txtAddress.value;//
        p.Phone = phone.value;//
        p.Blood_Type = blood.value;//
        p.Password = password.value;
        if (Gender[0].checked) {
            p.Gender = 'Male';
        } else {
            p.Gender = 'Female';
        }



        if (!p.Id._Valid) {
            txtNId.value='';
            txtNId.placeholder="  invalid National Id" ;
        } 


        if (!p.Name._Valid) {
            txtName.value='';
            txtName.placeholder="  invalid Name";
        } 
        


        if (!p.Phone._Valid) {
            phone.value='';
            phone.placeholder="  invalid phone";
        } 
        

        if (!p.Blood_Type._Valid) {
            blood.value='';
            blood.placeholder="  invalid Blood Type";
        } 


         if (!p.Password._Valid) {
            password.value='';
            password.placeholder="  invalid Password";
        }

        if (p.Password.Value == conPassword.value) {
            conPassword.value='';
            conPassword.placeholder="  not mactch";
        } 
        
        if (p.Id._Valid && p.Name._Valid && p.Phone._Valid && p.Blood_Type._Valid) {
            poreations.Add(p);
            window.location.replace("http://localhost:8080/GHC%20with%20login/sign%20in.html");
        }


    };
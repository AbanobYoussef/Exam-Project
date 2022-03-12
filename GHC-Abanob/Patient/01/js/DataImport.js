import * as p from '../../../FireBase Holds the fuctions on the objects/PatOperation.js'
import * as pre from '../../../FireBase Holds the fuctions on the objects/preOperation.js'
import * as d from '../../../FireBase Holds the fuctions on the objects/DocOperation.js'

const decrypt = data => {
	 return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
};
    let url = window.location.href;
   console.log(window.location.href);
    let smiID =url.split("?")[1];
   console.log(smiID);
    let ID =smiID.split("=")[1];
   console.log(ID);
   let pat_id=decrypt(ID);
   console.log(pat_id);

var tbody4 = document.getElementById('tbody4');
var appendinfo = document.querySelector(".appendinfo");
var EditBtn = document.querySelector(".donere");
var National_IDE = document.getElementById('National_IDE');
var NameE = document.getElementById('NameE');
var BirthE = document.getElementById('BirthE');
var AddressE = document.getElementById('AddressE');
var PhoneE = document.getElementById('PhoneE');
var BloodE = document.getElementById('BloodE');
let Gender = document.getElementsByName("optradioE");
var view = false;

p.getAll().then((data) => {
    let user = data.find(user => user.FireId === pat_id);


    pre.getAll_For_Patient(pat_id).then((data) => {
        console.log(data);
        DoctorCard(data);

        btn_profile.onclick = function() {
            if (!view) {
                FillPres(data);
            }
            viewProfile(user);
        };
    });






    Edite_profile.onclick = function() {
        viewprofile.style.display = "none";
        editprofile.style.display = "block";
        Mydoctors.style.display = "none";
        home.style.display = "none";
        editProfile(user);
    };



    EditBtn.onclick = function() {
        user.Id = National_IDE.value;
        user.Name = NameE.value;
        user.birth_date = BirthE.value;
        user.Address = AddressE.value;
        user.Phone = PhoneE.value;
        user.Blood_Type = BloodE.value;
        if (Gender[0].checked) {
            user.Gender = 'Male';
        } else {
            user.Gender = 'Female';
        }



        if (!user.Id._Valid) {

            National_IDE.classList.add('error');
            document.getElementById('ID_error').style.display = 'inline';
        } else {

            National_IDE.classList.remove('error');
            document.getElementById('ID_error').style.display = 'none';
        }


        if (!user.Name._Valid) {

            NameE.classList.add('error');
            document.getElementById('Name_error').style.display = 'inline';
        } else {

            NameE.classList.remove('error');
            document.getElementById('Name_error').style.display = 'none';
        }


        if (!user.Phone._Valid) {

            PhoneE.classList.add('error');
            document.getElementById('Phone_error').style.display = 'inline';
        } else {

            PhoneE.classList.remove('error');
            document.getElementById('Phone_error').style.display = 'none';

        }


        if (!user.Blood_Type._Valid) {

            BloodE.classList.add('error');
            document.getElementById('Blood_error').style.display = 'inline';
        } else {

            BloodE.classList.remove('error');
            document.getElementById('Blood_error').style.display = 'none';

        }

        if (user.Id._Valid && user.Name._Valid && user.Phone._Valid && user.Blood_Type._Valid) {
            p.Update(user);
            viewProfile(user);
        }


        view = false;
        appendinfo.innerHTML = '';
    };



});


//==========================end od p.getall =========================================== 

function setProfile(user) {

    document.getElementById('National_Id').value = user.Id.Value;
    document.getElementById('Name').value = user.Name.Value;
    document.getElementById('Birth_Date').value = user.birth_date;
    document.getElementById('Address').value = user.Address;
    document.getElementById('Phone').value = user.Phone.Value;
    document.getElementById('Blood_Type').value = user.blood_type.Value;
    let x = document.getElementsByName("optradio");
    if (user.Gender == 'Male') {
        x[0].checked = true;
        x[1].checked = false;
    } else {

        x[0].checked = false;
        x[1].checked = true;
    }
}





function editProfile(user) {
    National_IDE.value = user.Id.Value;
    NameE.value = user.Name.Value;
    BirthE.value = user.birth_date;
    AddressE.value = user.Address;
    PhoneE.value = user.Phone.Value;
    BloodE.value = user.blood_type.Value;
    if (user.Gender == 'Male') {
        Gender[0].checked = true;
        Gender[1].checked = false;
    } else {

        Gender[0].checked = false;
        Gender[1].checked = true;
    }
}


function viewProfile(user) {
    viewprofile.style.display = "block";
    editprofile.style.display = "none";
    Mydoctors.style.display = "none";
    home.style.display = "none";

    setProfile(user);
}



function FillPres(pres) {
    Headers();
    view = true;
    
    for (let pre of pres) {
        console.log(pre);
        let row = document.createElement('div');
        let department = document.createElement('div');
        let date = document.createElement('div');
        let Doctor_Name = document.createElement('div');
        let Doctor_Mobile = document.createElement('div');
        let Button = document.createElement('div');

        row.classList.add('row');
        row.classList.add('rows');
        department.classList.add('col');
        date.classList.add('col');
        Doctor_Name.classList.add('col');
        Doctor_Mobile.classList.add('col');

        Button.classList.add('col');


        department.setAttribute("id", "department");
        date.setAttribute("id", "date");
        Doctor_Name.setAttribute("id", "Doctor_Name");
        Doctor_Mobile.setAttribute("id", "Doctor_Mobile");

        Button.setAttribute("id", "Button");


        var btn = document.createElement('button');
        btn.innerHTML = 'Details';
        btn.classList.add('w3-circle');
        btn.classList.add('w3-green');
        btn.setAttribute("data-target", "#myModal");
        btn.setAttribute("data-toggle", "modal");
        btn.onclick = function() {
             d.GetByID(pre.DOC_ID).then(doc=>{
             
            let Doctor_Name = document.querySelector("#DoctorName");
            let Dater = document.querySelector("#Date");
            let Department = document.querySelector("#Department");
            let Disease = document.querySelector("#Disease");
            let Medicines_List = document.querySelector("#Medicines_List");
            let Diagnose = document.querySelector("#Diagnose");
            Doctor_Name.value =doc.NAME.Value;
            Dater.value = pre.data;
            Department.value = pre.Department;
            Disease.value = '';
            tbody4.innerHTML ='';
              for(let MED of pre.Medicines_List)
                {
                    console.log(MED.med );
                    console.log(MED.doce);
                    let tr=`<tr>
                        <td>`+ MED.med +`</td>
                        <td>`+ MED.doce  +`</td>
                        <td>`+ MED.note  +`</td>
                        </tr>`;
                    tbody4.innerHTML +=tr;

                }
            Diagnose.textContent = pre.Diagnoses;
         });
            
        }
        Button.appendChild(btn);

             d.GetByID(pre.DOC_ID).then(doc=>{
             
            department.innerHTML = pre.Department;
            date.innerHTML = pre.data;
            Doctor_Name.innerHTML = doc.NAME.Value;
            Doctor_Mobile.innerHTML = doc.phone.Value;



            row.appendChild(department);
            row.appendChild(date);
            row.appendChild(Doctor_Name);
            row.appendChild(Doctor_Mobile);
            row.appendChild(Button);
            appendinfo.appendChild(row);
         });
        
        
    }
}



function Headers() {
    let row = document.createElement('div');
    let department = document.createElement('div');
    let date = document.createElement('div');
    let Doctor_Name = document.createElement('div');
    let Doctor_Mobile = document.createElement('div');
    let Button = document.createElement('div');
    row.classList.add('row');
    row.classList.add('appendinfo');
    department.classList.add('col');
    date.classList.add('col');
    Doctor_Name.classList.add('col');
    Doctor_Mobile.classList.add('col');
    Button.classList.add('col');

    department.innerHTML = 'Department';
    date.innerHTML = 'Data';
    Doctor_Name.innerHTML = 'Doctor Name';
    Doctor_Mobile.innerHTML = 'Doctor Mobile';
    Button.innerHTML = 'Details';

    row.appendChild(department);
    row.appendChild(date);
    row.appendChild(Doctor_Name);
    row.appendChild(Doctor_Mobile);
    row.appendChild(Button);
    appendinfo.appendChild(row);
}








function DoctorCard(pres) {
    for (let pre of pres) {
         d.GetByID(pre.DOC_ID).then(doc=>{
            let Card = document.createElement('div');
            let img = document.createElement('img');

            let card_body = document.createElement('div');
            let h41 = document.createElement('h4');
            let h42 = document.createElement('h4');
            let h43 = document.createElement('h4');
            let BtnDiv = document.createElement('div');
            let Btn = document.createElement('button');

            Card.classList.add('card');
            Card.classList.add('doc');
            Card.classList.add('CARDSTYLE');

            img.src = "https://theshifaclinic.com/wp-content/uploads/2016/10/DR-avatar.png";
            img.alt = "Card image cap";
            img.classList.add('card-img-top');



            Card.appendChild(img);
            Card.appendChild(card_body);



            card_body.appendChild(h41);
            card_body.appendChild(h42);
            card_body.appendChild(h43);
            card_body.appendChild(BtnDiv);
            BtnDiv.appendChild(Btn);

            Btn.innerHTML = 'Read More';
            Btn.classList.add('btn');
            Btn.classList.add('ReadMore');


            h41.innerHTML = "DR, " + doc.NAME.Value;
            h42.innerHTML = "Address, " + doc.Address;
            h43.innerHTML = "Phone, " + doc.Phone.Value;


            Mydoctors.appendChild(Card);
         });
    }






    let Cards = document.getElementsByClassName('card');
    console.log(Cards);
    setInterval(() => {

        for (let card of Cards) {
            if (window.innerWidth <= 900 && window.innerWidth >= 600) {
                console.log(window.innerWidth);
                card.classList.remove('CARDSTYLE');
                card.classList.add('CARDSTYLE2');
                card.classList.remove('CARDSTYLE3');
            } else if (window.innerWidth < 600) {
                card.classList.remove('CARDSTYLE1');
                card.classList.remove('CARDSTYLE2');
                card.classList.add('CARDSTYLE3');
            } else {
                card.classList.add('CARDSTYLE');
                card.classList.remove('CARDSTYLE2');
                card.classList.remove('CARDSTYLE3');
            }
        }


    }, 1000);
}





MY_DOCTORS.onclick = function() {
    viewprofile.style.display = "none";
    editprofile.style.display = "none";
    Mydoctors.style.display = "contents";
    home.style.display = "none";
    view = false;
    appendinfo.innerHTML = '';
};
homebtn.onclick = function() {
    viewprofile.style.display = "none";
    editprofile.style.display = "none";
    Mydoctors.style.display = "none";
    home.style.display = "block";
    view = false;
    appendinfo.innerHTML = '';
};




// Mydoctors.innerHTML +=`
//     <div class="card doc CARDSTYLE col-md-3">
//                 <img class="card-img-top"
//                     src="https://theshifaclinic.com/wp-content/uploads/2016/10/DR-avatar.png"
//                     alt="Card image cap">
//                 <div class="card-body" style="width: 100%">
//                     <h4>DR,........</h4>
//                     <h4>Address,........</h4>
//                     <h4>Phone,........</h4>
//                     <div class="text-center" style="width: 100%">
//                     <button class="btn ReadMore">Read More</button>
//                     </div>
//                 </div>
//     </div>`;
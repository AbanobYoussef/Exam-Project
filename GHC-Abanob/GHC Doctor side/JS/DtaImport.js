import * as d from '../../../FireBase Holds the fuctions on the objects/DocOperation.js';
import * as p from '../../../FireBase Holds the fuctions on the objects/PatOperation.js';
import * as pre from '../../../FireBase Holds the fuctions on the objects/preOperation.js';
import * as APP from '../../../FireBase Holds the fuctions on the objects/AppOperation.js';
import Prescriptopn from '../../../Entities Holds the Classes/prescriptopn.js';


const decrypt = data => {
	 return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
};
    let url = window.location.href;
   console.log(window.location.href);
    let smiID =url.split("?")[1];
   console.log(smiID);
    let ID =smiID.split("=")[1];
   console.log(ID);
   let doc_id=decrypt(ID);
   console.log(doc_id);




var patientNumber = document.getElementById('Patientnumber');
var TBody = document.getElementById('TBody');
var tbody2 = document.getElementById('tbody2');
var DOCTORSlist = document.getElementById('DOCTORSlist');
var patientCard = document.getElementById('patientCard');
var AppointmentsNumber = document.getElementById('AppointmentsNumber');
var diagnose=  document.getElementById('diagnoseTxtarea');
var RadiologyRequired=  document.getElementById('RadiologyRequired');
var MedicalAnalyzesRequired=  document.getElementById('MedicalAnalyzesRequired');
var medName= document.getElementById('dropSearch');
var DoceDes=document.getElementById('dropSearch2');
var medicineNotes=document.getElementById('medicineNote');


var PatientNID = document.getElementById('PatientNID');
var PatientName = document.getElementById('PatientName');
var PatientBirthDate = document.getElementById('PatientBirthDate');
var PatientPhone = document.getElementById('PatientPhone');
var PatientAddress = document.getElementById('PatientAddress');
var PatientBloodType = document.getElementById('PatientBloodType');
let Gender = document.getElementsByName("Gender");





d.getAll().then((data) => {

    // console.log(data);
    getAllDocs(data)
});

pre.getAll_For_Doctor(doc_id).then((data) => {

    //console.log(data);
    patientNumber.innerHTML = Patientnumber(data).size;
    let SET = Patientnumber(data);
    //console.log(data);
    for (let pre of data) {
        if (SET.has(pre.PAT_DOC_ID)) {
            SET.delete(pre.PAT_DOC_ID);
            getAllPatients(pre.PAT_DOC_ID);
        }
    }




    APP.getAll_For_Doctor(doc_id).then((apps) => {

       // console.log(apps);
        AppointmentsNumber.innerHTML = apps.length;




        for (let app of apps) {
            p.GetByID(app.PAT_DOC_ID).then(pat => {
              //  console.log(app);
               // console.log(pat);
                getAllAppointments(app, pat);
            });
        }

    });


});








function Patientnumber(pres) {
    let patients = [];
    for (let pre of pres) {
        patients.push(pre.PAT_DOC_ID);
    }
    // console.log(patients);
    let set = new Set(patients);
    // console.log(set);
    return set
}
















function getAllDocs(docs) {

    for (let doc of docs) {

        let docCard = ` 
                    <div class="col-lg-4 col-sm-6">
                    <div class="card doctorsCard">
                        <img class="card-img-top doctorsCardImg" src="doc2.webp" alt="Card image cap">
                        <!-- <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div> -->

                            <div class="card-body " style="margin-top: -30px;">
                            <hr class="doctorsCardHr">` +
            doc.NAME.Value

            +`<hr class="doctorsCardHr">` +
            doc.Address

            +`<hr class="doctorsCardHr">` +
            doc.Phone.Value

            +`<hr class="doctorsCardHr">` +
            doc.Email.Value +
            `<hr class="doctorsCardHr">

                            </div>
                        </div>
                    </div>`;

        DOCTORSlist.innerHTML += docCard;

    }
}







function getAllPatients(Pat_id) {

    p.GetByID(Pat_id).then(patient=>{
   // console.log(patient);
    let patCard = ` 
                    <div class="col-lg-4 col-sm-6">
                    <div class="card patientCard">
                        <img class="card-img-top doctorsCardImg" src="patient2.jpg" alt="Card image cap">
                        <!-- <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div> -->

                        <div class="card-body " style="margin-top: -30px;">
                        <hr class="doctorsCardHr">` +
        patient.NAME.Value

        +`<hr class="doctorsCardHr">` +
        patient.Address

        +`<hr class="doctorsCardHr">` +
        patient.blood_type.Value

        +`<hr class="doctorsCardHr">` +
        patient.gender +
        `<hr class="doctorsCardHr">

                        </div>
                    </div>
                    </div>`;

    patientCard.innerHTML += patCard;
});
    

}





function getAllAppointments(app, patient) {


    let Approw = document.createElement('tr');
    let tdNAME = document.createElement('td');
    let tdPhone = document.createElement('td');
    let tdAddress = document.createElement('td');
    let tddate = document.createElement('td');
    let tdBtns = document.createElement('td');


    Approw.setAttribute('data-id', app.fireID);
    Approw.setAttribute('data-patid', patient.FireId);
    tdNAME.innerHTML = patient.NAME.Value;
    tdPhone.innerHTML = patient.Phone.Value;
    tdAddress.innerHTML = patient.Address;
    tddate.innerHTML = app.Date;




    let BtnDel = document.createElement('button');
    let BtnId = document.createElement('button');

    BtnDel.classList.add('btn');
    BtnDel.classList.add('btn-danger');
    BtnDel.classList.add('tblBtn');
    BtnDel.classList.add('btnDteteRow');


    BtnId.classList.add('btn');
    BtnId.classList.add('btn-primary');
    BtnId.classList.add('tblBtn');
    BtnId.classList.add('btnEnterId');

    BtnId.style.textAlign = 'center';
    BtnDel.style.textAlign = 'center';


    BtnId.onclick = function() {



        console.log(Approw.dataset.patid);

        p.GetByID(Approw.dataset.patid).then(pat => {

            patientIdForm.style.display = 'none';
            PatientProfileShownByDoctor.style.display = 'block';
            appointmentContainer.style.display = "none";
            DoctorsContainer.style.display = "none";
            profilecontainer.style.display = "none";
            PatientsHistoryContainer.style.display = "none";

            PatientNID.value = pat.Id.Value;
            PatientName.value = pat.Name.Value;
            PatientBirthDate.value = pat.birth_date;
            PatientAddress.value = pat.Address;
            PatientPhone.value = pat.Phone.Value;
            PatientBloodType.value = pat.blood_type.Value;


            if (pat.Gender == 'Male') {
                Gender[0].checked = true;
                Gender[1].checked = false;
            } else {

                Gender[0].checked = false;
                Gender[1].checked = true;
            }
        });







       LoadANDupdate(Approw.dataset.patid);

    }




    BtnDel.onclick = function() {
        // var btn=this.parentElement.parentElement.remove();
        //////////////////////////////////////////////////////////
        var z = this;

        confirm.style.display = 'block';
        patientIdForm.style.display = 'none';

        //  var message1=document.getElementsByClassName("message1");
        var yes = document.getElementById("yes1");
        var No = document.getElementById("No1");
        yes.onclick = function() {
            var btn = z.parentElement.parentElement.remove();
            console.log(z);

            confirm.style.display = 'none';
            console.log(Approw.dataset.id);
            APP.Delete(Approw.dataset.id);

        }
        No.onclick = function() {
            confirm.style.display = 'none';
            patientIdForm.style.display = 'none';
        }


    };

    let ieye = document.createElement('i');
    let itrash = document.createElement('i');



    ieye.classList.add('far');
    ieye.classList.add('fa-eye');
    itrash.classList.add('far');
    itrash.classList.add('fa-trash-alt');



    BtnDel.appendChild(itrash);
    BtnId.appendChild(ieye);


    tdBtns.appendChild(BtnDel);
    tdBtns.appendChild(BtnId);



    Approw.appendChild(tdNAME);
    Approw.appendChild(tdPhone);
    Approw.appendChild(tdAddress);
    Approw.appendChild(tddate);
    Approw.appendChild(tdBtns);



    TBody.appendChild(Approw);

}

















var btnAddNewDiagnose = document.getElementById('btnAddNewDiagnose');
//=====================add new Diagnose====================================
  btnAddNewDiagnose.onclick=()=>{
       
      
        var medLIST=[];
         diagnose.value='';
         RadiologyRequired.value='';
         MedicalAnalyzesRequired.value='';
         medName.value='';
         DoceDes.value='';
         medicineNotes.value='';
        var meds=document.getElementsByClassName('med');
        console.log(meds);
        for(let m of meds){
            m.onclick=()=>{
                dropSearch.value=m.innerHTML;
            }
        }
        var dos=document.getElementsByClassName('dos');
        console.log(dos);
        for(let d of dos){
            d.onclick=()=>{
                    dropSearch2.value=d.innerHTML;

                }
        }
        document.getElementById('medicineNote');
        var tbody3=document.getElementById('tbody3');
    tbody3.innerHTML='';
    //=====================add new Medicine====================================
        document.getElementById('btnAddMedicine').onclick=()=>{

               medLIST.push({med:medName.value , doce:DoceDes.value,note:medicineNotes.value});
                let tr = document.createElement('tr');
                let tdmed = document.createElement('td');
                let tddoce = document.createElement('td');
                let tdBtn = document.createElement('td');


                    tdmed.innerHTML=medName.value ;
                    tddoce.innerHTML=DoceDes.value ;

                let BtnDel = document.createElement('button');

                BtnDel.classList.add('btn');
                BtnDel.classList.add('btn-danger');
                BtnDel.classList.add('tblBtn');
                BtnDel.classList.add('btnDteteRow');
                


                let itrash = document.createElement('i');


                itrash.setAttribute('data-med',medName.value  );
                itrash.setAttribute('data-docs', DoceDes.value);

                itrash.classList.add('far');
                itrash.classList.add('fa-trash-alt');



                    BtnDel.appendChild(itrash);
                    itrash.onclick=()=>{
                    event.target.parentElement.parentElement.parentElement.style.display='none';
                        // console.log(event.target.parentElement.parentElement.parentElement);
                        // console.log(event.target.dataset.med);
                        // console.log(event.target.dataset.docs);

                        medLIST = medLIST.filter(function(MeD){ 
                            if(MeD.med !== event.target.dataset.med &&  MeD.doce !== event.target.dataset.docs)
                                return MeD ;
                        });
                        console.log(medLIST);
                    }

                tdBtn.appendChild(BtnDel);



                tr.appendChild(tdmed);
                tr.appendChild(tddoce);
                tr.appendChild(tdBtn);
                tbody3.appendChild(tr);

       }
    //=====================end of add new Medicine====================================
    var SavePes = document.getElementById('SavePes');
    
    
        var today = new Date();
        var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
         var mod = medLIST.map(obj => {

                    return  JSON.stringify(obj);
                });

        SavePes.onclick=()=>{
            console.log(medLIST);
        let obj = new Prescriptopn();
         obj.DOC_ID=tbody2.dataset.docid;
         obj.PAT_DOC_ID=tbody2.dataset.patid;
         obj.Department='';
         obj.Note=medicineNotes.value;
         obj.Dignoses=diagnose.value.toString();
         obj.Medicines_List=medLIST;
         obj.data=date;
         obj.Medical_analyzes_required = MedicalAnalyzesRequired.value ;
         obj.Radiology_required=RadiologyRequired.value;
        
        pre.Add(obj);

        
       LoadANDupdate(tbody2.dataset.patid);
        }

  }
//=====================end of add new Diagnose====================================



 function LoadANDupdate(id){
     pre.Get_By_Doc_Pat_ID(doc_id,id).then(pres => {
            console.log(pres);
            tbody2.innerHTML='';
            for(let pre of pres){
                p.GetByID(pre.PAT_DOC_ID).then(pat=>{
                Fill_Pat_Pre(pre, pat)
                });
            }
        });
 }

function Fill_Pat_Pre(pre, patient) {
    let Approw = document.createElement('tr');
    let tdNAME = document.createElement('td');
    let tdgentder = document.createElement('td');
    let tdBtn = document.createElement('td');

    tdNAME.innerHTML = patient.NAME.Value;
    tdgentder.innerHTML = patient.Gender;

    let Details = document.createElement('button');


    Details.innerHTML = 'Details';
    tdBtn.appendChild(Details);



    Details.classList.add('btnShowDiagonesDetails');

    Approw.setAttribute('data-preid', pre.fireID);
    Approw.setAttribute('data-toggle', 'modal');
    Approw.setAttribute('data-target', '#mdl');




    Details.onclick=()=>{
        var diagnoseTxtareaDetails = document.getElementById('diagnoseTxtareaDetails');
        var tbody4 = document.getElementById('tbody4');
        var RadiologyRequiredDetails = document.getElementById('RadiologyRequiredDetails');
        var MedicalAnalyzesRequiredDetails = document.getElementById('MedicalAnalyzesRequiredDetails');
        var Close = document.getElementById('Close');

        diagnoseTxtareaDetails.value=pre.Diagnoses;
        RadiologyRequiredDetails.value=pre.Radiology_required;
        MedicalAnalyzesRequiredDetails.value=pre.Medical_analyzes_required;

        console.log(pre.Medicines_List);

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

        Close.onclick=()=>{
            diagnoseTxtareaDetails.value='';
            RadiologyRequiredDetails.value='';
            MedicalAnalyzesRequiredDetails.value='';
            tbody4.innerHTML ='';
        }
       
    }



    Approw.appendChild(tdNAME);
    Approw.appendChild(tdgentder);
    Approw.appendChild(tdBtn);


    tbody2.setAttribute('data-docid',doc_id );
    tbody2.setAttribute('data-patid', patient.FireId);

    tbody2.appendChild(Approw);

}


/* <tr>
<td>sssss </td>
<td>Germany</td>
<td>
<button type="button" class="btn btn-danger tblBtn btnDteteRow"><i class="far fa-trash-alt"></i></button>
</td>
</tr> */
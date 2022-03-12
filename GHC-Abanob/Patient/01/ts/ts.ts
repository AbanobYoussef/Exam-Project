var btn_profile:HTMLElement=document.querySelector(".btnprofile") as HTMLElement
var Edite_profile:HTMLElement=document.querySelector(".Edite_profile") as HTMLElement
var MY_DOCTORS:HTMLElement=document.querySelector(".MY_DOCTORS") as HTMLElement
var SITTINGS:HTMLElement=document.querySelector(".SITTINGS") as HTMLElement
var Mydoctors:HTMLElement=document.querySelector(".Mydoctors") as HTMLElement
var viewprofile:HTMLElement=document.querySelector(".viewprofile") as HTMLElement
var editprofile:HTMLElement=document.querySelector(".editprofile") as HTMLElement
var appendinfo:HTMLElement=document.querySelector(".appendinfo") as HTMLElement
var home :HTMLElement=document.querySelector(".home") as HTMLElement
var homebtn :HTMLElement=document.querySelector(".btnhome") as HTMLElement
var func=[
    ["0","aaaaaaaaa","Dr.ssssssss","4/5/ddddddd","vvvvvv"],
    ["1","prescription1","Dr.Mohamed","4/5/2020","covid"],
    ["2","prescription1","Dr.Mohamed","4/5/2020","covid"],
    ["3","prescription1","Dr.Mohamed","4/5/2020","covid"],
    ["4","prescription1","Dr.Mohamed","4/5/2020","covid"],
    ["5","prescription1","Dr.Mohamed","4/5/2020","covid"],

]

btn_profile.onclick=()=>{
    viewprofile.style.display ="block"
    editprofile.style.display ="none"
    Mydoctors.style.display ="none"
    home.style.display ="none"
}
Edite_profile.onclick=()=>{
    viewprofile.style.display ="none"
    editprofile.style.display ="block"
    Mydoctors.style.display ="none"
    home.style.display ="none"

}
MY_DOCTORS.onclick=()=>{
    viewprofile.style.display ="none"
    editprofile.style.display ="none"
    Mydoctors.style.display ="contents"
    home.style.display ="none"

}
homebtn.onclick=()=>{
    viewprofile.style.display ="none"
    editprofile.style.display ="none"
    Mydoctors.style.display ="none"
    home.style.display ="block"

}
function appendDaTable()
{for (let i=0;i<func.length;i++)
    {
        appendinfo.innerHTML+=`
        <hr>
        <div class="row">
         <div class="col">${parseInt(func[i][0])+1}</div>
         <div class="col"> ${func[i][1]}</div>
         <div class="col">${func[i][2]} </div>
         <div class="col"> ${func[i][3]}</div>
         <div class="col"> ${func[i][4]} Name</div>
         <div class="col"> ${func[i][5]} Mobile</div>
         <div class="col"> <button data-toggle="modal" data-target="#myModal" onclick="getid(event)" class="w3-circle w3-green" id="${i}a">Details</button></div>
        </div>
        `
    }
   
}
function getid(event){
    //console.log(event.target.id)
    //console.log(event.target.id.substring(0, event.target.id.length - 1))
    var eve=parseInt(event.target.id.substring(0, event.target.id.length - 1))
bindtabledata(eve)
}
appendDaTable();

function bindtabledata(eve:number){
var Doctor_Name:HTMLInputElement=document.querySelector("#Doctor_Name")as HTMLInputElement
var Dater:HTMLInputElement=document.querySelector("#Date")as HTMLInputElement
var Department:HTMLInputElement=document.querySelector("#Department")as HTMLInputElement
var Disease:HTMLInputElement=document.querySelector("#Disease")as HTMLInputElement
var Medicines_List:HTMLInputElement=document.querySelector("#Medicines_List")as HTMLInputElement
var Diagnose:HTMLInputElement=document.querySelector("#Diagnose")as HTMLInputElement
 Doctor_Name.value=func[eve][0]
 Dater.value=func[eve][1]
 Department.value=func[eve][2]
 Disease.value=func[eve][3]
 Medicines_List.textContent=func[eve][4]
 Diagnose.textContent=func[eve][4]

}
var editedPersonalData=new Array()
var updatebtn:HTMLElement=document.querySelector(".donere")
updatebtn
.onclick=function Edit_Patient()
{

    var E_P1:HTMLInputElement = document.querySelector("#National_IDedite").value as HTMLInputElement
    var E_P2:HTMLInputElement = document.querySelector("#Birthe").value as HTMLInputElement
    var E_P3:HTMLInputElement = document.querySelector("#Bloode").value as HTMLInputElement
    var E_P4:HTMLInputElement = document.querySelector("#Namee").value  as HTMLInputElement
    var E_P5:HTMLInputElement = document.querySelector("#Phoneee").value as HTMLInputElement
    var E_P6:HTMLInputElement = document.querySelector("#Addressede").value as HTMLInputElement
    var E_P7:HTMLInputElement = document.getElementsByClassName("form-check-input")[2].value as HTMLInputElement
    var E_P8:HTMLInputElement = document.getElementsByClassName("form-check-input")[3].value as HTMLInputElement
 
    editedPersonalData[0]=E_P1
    editedPersonalData[1]=E_P2
    editedPersonalData[2]=E_P3
    editedPersonalData[3]=E_P4
    editedPersonalData[4]=E_P5
    editedPersonalData[5]=E_P6
    editedPersonalData[6]=E_P7
    editedPersonalData[7]=E_P8
   
console.log(editedPersonalData)

alert("You have been Updated")
    

}
function show_doctors()
{for(let i=0;i<15;i++)
    {
        Mydoctors.innerHTML +=`
        <div class="card doc" style="width: 18rem;">
        <img class="card-img-top"
            src="https://theshifaclinic.com/wp-content/uploads/2016/10/DR-avatar.png"
            alt="Card image cap">
        <div class="card-body">
            <h4>DR,........</h4>
            <h4>Address,........</h4>
            <h4>Phone,........</h4>
            <div class="text-center">
                <button class="btn ReadMore">Read More</button>
            </div>
        </div>
    </div>
        `
    }
     
}
show_doctors()

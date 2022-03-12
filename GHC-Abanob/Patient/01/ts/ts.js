var btn_profile = document.querySelector(".btnprofile");
var Edite_profile = document.querySelector(".Edite_profile");
var MY_DOCTORS = document.querySelector(".MY_DOCTORS");
var SITTINGS = document.querySelector(".SITTINGS");
var Mydoctors = document.querySelector(".Mydoctors");
var viewprofile = document.querySelector(".viewprofile");
var editprofile = document.querySelector(".editprofile");
var home = document.querySelector(".home");
var homebtn = document.querySelector(".btnhome");
var func = [
    ["0", "aaaaaaaaa", "Dr.ssssssss", "4/5/ddddddd", "vvvvvv"],
    ["1", "prescription1", "Dr.Mohamed", "4/5/2020", "covid"],
    ["2", "prescription1", "Dr.Mohamed", "4/5/2020", "covid"],
    ["3", "prescription1", "Dr.Mohamed", "4/5/2020", "covid"],
    ["4", "prescription1", "Dr.Mohamed", "4/5/2020", "covid"],
    ["5", "prescription1", "Dr.Mohamed", "4/5/2020", "covid"],
];



// function appendDaTable() {
//     for (var i = 0; i < func.length; i++) {
//         appendinfo.innerHTML += "\n        <hr>\n        <div class=\"row\">\n         <div class=\"col\">" + (parseInt(func[i][0]) + 1) + "</div>\n         <div class=\"col\"> " + func[i][1] + "</div>\n         <div class=\"col\">" + func[i][2] + " </div>\n         <div class=\"col\"> " + func[i][3] + "</div>\n         <div class=\"col\"> " + func[i][4] + " Name</div>\n         <div class=\"col\"> " + func[i][5] + " Mobile</div>\n         <div class=\"col\"> <button data-toggle=\"modal\" data-target=\"#myModal\" onclick=\"getid(event)\" class=\"w3-circle w3-green\" id=\"" + i + "a\">Details</button></div>\n        </div>\n        ";
//     }
// }
// function getid(event) {
//     //console.log(event.target.id)
//     //console.log(event.target.id.substring(0, event.target.id.length - 1))
//     var eve = parseInt(event.target.id.substring(0, event.target.id.length - 1));
//     bindtabledata(eve);
// }
// appendDaTable();
// function bindtabledata(eve) {
//     var Doctor_Name = document.querySelector("#Doctor_Name");
//     var Dater = document.querySelector("#Date");
//     var Department = document.querySelector("#Department");
//     var Disease = document.querySelector("#Disease");
//     var Medicines_List = document.querySelector("#Medicines_List");
//     var Diagnose = document.querySelector("#Diagnose");
//     Doctor_Name.value = func[eve][0];
//     Dater.value = func[eve][1];
//     Department.value = func[eve][2];
//     Disease.value = func[eve][3];
//     Medicines_List.textContent = func[eve][4];
//     Diagnose.textContent = func[eve][4];
// }
var editedPersonalData = new Array();

// function show_doctors() {
//     for (var i = 0; i < 15; i++) {
//         Mydoctors.innerHTML += "\n        <div class=\"card doc\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\"\n            src=\"https://theshifaclinic.com/wp-content/uploads/2016/10/DR-avatar.png\"\n            alt=\"Card image cap\">\n        <div class=\"card-body\">\n            <h4>DR,........</h4>\n            <h4>Address,........</h4>\n            <h4>Phone,........</h4>\n            <div class=\"text-center\">\n                <button class=\"btn ReadMore\">Read More</button>\n            </div>\n        </div>\n    </div>\n        ";
//     }
// }
// show_doctors();
import Prescriptopn from '../Entities Holds the Classes/prescriptopn.js';
import Doctors from '../Entities Holds the Classes/Doctors.js';
import Patient from '../Entities Holds the Classes/patient.js';
import * as d from './DocOperation.js'
import * as p from './PatOperation.js'
import db from './dbInstance.js'



                // new Patient(JSON.parse(doc.data().patient)),
                // new Doctors(JSON.parse(doc.data().doctor)),
var table = 'Diagnoses';
var prescriptopn = [];
export async function getAll() {
    await db.collection(table).get().then(snapshot => {
        prescriptopn.push(snapshot.docs.map(doc => {
            let obj = new Prescriptopn(doc.id,
                doc.data().DOC_ID,
                doc.data().PAT_DOC_ID, 
                doc.data().Department,
                doc.data().Dignose,
                doc.data().Medicines_List,
                doc.data().data,
                doc.data().Medical_analyzes_required,
                doc.data().Radiology_required);

            return obj;
        }));
        prescriptopn = prescriptopn[0];
    });
    return prescriptopn;
}


export async function getAll_For_Doctor(id) {
    await db.collection(table).where("DOC_ID", "==", id).get().then(snapshot => {
       // console.log(snapshot.docs);
        prescriptopn.push(snapshot.docs.map(doc => {
            let obj = new Prescriptopn(doc.id,
                doc.data().DOC_ID,
                doc.data().PAT_DOC_ID, 
                doc.data().Department,
                doc.data().Dignose,
                doc.data().Medicines_List,
                doc.data().data,
                doc.data().Medical_analyzes_required,
                doc.data().Radiology_required);

            return obj;
        }));

      //  console.log(prescriptopn);
        if(prescriptopn.length==1)
            prescriptopn = prescriptopn[0];

        
    });
    return prescriptopn;
}



export async function getAll_For_Patient(id) {
    await db.collection(table).where("PAT_DOC_ID", "==", id).get().then(snapshot => {
        prescriptopn.push(snapshot.docs.map(doc => {
            let obj = new Prescriptopn(doc.id,
                doc.data().DOC_ID,
                doc.data().PAT_DOC_ID, 
                doc.data().Department,
                doc.data().Dignose,
                doc.data().Medicines_List,
                doc.data().data,
                doc.data().Medical_analyzes_required,
                doc.data().Radiology_required);

            return obj;
        }));
        prescriptopn = prescriptopn[0];
    });
    return prescriptopn;
}



export function Add(Obj) {
    console.log(Obj.Medicines_List);
    db.collection(table).add({
        DOC_ID: Obj.DOC_ID,
        PAT_DOC_ID: Obj.PAT_DOC_ID,
        Department: Obj.Department,
        Dignose: Obj.Dignose,
        Medicines_List: Obj.Medicines_List,
        data: Obj.data,
        Medical_analyzes_required: Obj.Medical_analyzes_required,      
        Radiology_required: Obj.Radiology_required
    });
}

export function Update(Obj) {
    let id = Obj.FireId;
    db.collection(table).doc(id).update({
        DOC_ID: Obj.DOC_ID,
        PAT_DOC_ID: Obj.PAT_DOC_ID,
        Department: Obj.Department,
        Dignose: Obj.Diagnoses,
        Medicines_List: Obj.Medicines_List,
        data: Obj.data,
        Medical_analyzes_required: Obj.Medical_analyze
    });
}



export async function Get_By_Doc_Pat_ID(DocId, PatId) {
    let obj;
    let objs = [];
    await db.collection(table)
        .where("DOC_ID", "==", DocId)
        .where("PAT_DOC_ID", "==", PatId)
        .get().then((snap) => {
            objs.push(snap.docs.map(doc => {
                let obj =  new Prescriptopn(doc.id,
                doc.data().DOC_ID,
                doc.data().PAT_DOC_ID,
                doc.data().Department,
                doc.data().Dignose,
                doc.data().Medicines_List,
                doc.data().data,
                doc.data().Medical_analyzes_required,
                doc.data().Radiology_required);

                return obj;
            }));
            console.log(objs);
        if(objs.length==1)
            objs = objs[0];
        });
    return objs;
}


export async function Get_By_Pat_ID(PatId) {
    let obj;
    let objs = [];
    await db.collection(table)
        .where("PAT_DOC_ID", "==", PatId)
        .get().then((snap) => {
            objs.push(snap.docs.map(doc => {
                let obj =  new Prescriptopn(doc.id,
                doc.data().DOC_ID,
                doc.data().PAT_DOC_ID,
                doc.data().Department,
                doc.data().Diseases,
                doc.data().Medicines_List,
                doc.data().data,
                doc.data().Medical_analyzes_required,
                doc.data().Radiology_required);

                return obj;
            }));
            objs = objs[0];
        });
    return objs;
}






export function GetByID(){
    console.log('hello');
}


// export async function getAll_For_Patient(id) {
//     await db.collection(table).where("PAT_DOC_ID", "==", id).get().then(snapshot => {
//         prescriptopn.push(snapshot.docs.map(doc => {
//             let obj = new Prescriptopn(doc.id,
//                 doc.data().DOC_ID,
//                 doc.data().PAT_DOC_ID,
//                 doc.data().Department,
//                 doc.data().Dignose,
//                 doc.data().Disease,
//                 doc.data().Medicines_List,
//                 new Patient(JSON.parse(doc.data().patient)),
//                 new Doctors(JSON.parse(doc.data().doctor)),
//                 doc.data().data);

//             return obj;
//         }));
//         prescriptopn = prescriptopn[0];
//     });
//     return prescriptopn;
// }




export function Delete(id) {
    db.collection(table).doc(id).delete();
}


// var objPat = new Patient("Q8BZq9SLE5abI6msq9K4",
//     'Id',
//     'Name',
//     'Phone',
//     'birth_date',
//     'Address',
//     'A+',
//     'Gender',
//     'Password',
//     'Email');
//     console.log(objPat);
//     let objStr=JSON.stringify(objPat);
//     console.log(objStr);
//     let objJson=JSON.parse(objStr);
//     console.log(objJson);
//     var objPat2 = new Patient(objJson);
//     console.log(objPat2);



// var objDoc = new Doctors("MVi4y5cBAvOg7GEzZYc4", 'Id', 'Abanob', 'Phone', 'specialization', 'Address', 'Degree', 'Gender', 'Password', 'Email');




// let obj= new Prescriptopn(' ',
//                 'MQxPrLvbR3uPx62p7UqD',
//                 'wBOn2MmOb9fooF6GVdl6',
//                 'Department',
//                 'Dignose',
//                 'Disease',
//                 'Medicines_List',
//                  objPat,
//                  objDoc,
//                  '20/20/2021');

// Add(obj);


// getAll().then((data) => {

//     console.log(data);
// });

//Update(obj)
//Delete(obj)

// GetByID('H0rmoKgUEDS9CYevIy5Z').then(data=>{
//     console.log(data);
// });
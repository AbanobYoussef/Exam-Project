import Appoientments from '../Entities Holds the Classes/Appoientments.js';

import db from './dbInstance.js'
var table = 'Appointments';
var appoientments = [];
export async function getAll() {
    await db.collection(table).get().then(snapshot => {
        appoientments.push(snapshot.docs.map(doc => {
            let obj = new Appoientments(doc.id,
                doc.data().DOC_ID,
                doc.data().PAT_DOC_ID,
                doc.data().data);

            return obj;
        }));
        appoientments = appoientments[0];
    });
    return appoientments;
}


export async function getAll_For_Doctor(id) {
    await db.collection(table).where("DOC_ID", "==", id).get().then(snapshot => {
        appoientments.push(snapshot.docs.map(doc => {
            let obj = new Appoientments(doc.id,
                doc.data().DOC_ID,
                doc.data().PAT_DOC_ID,
                doc.data().Date);

            return obj;
        }));
        appoientments = appoientments[0];
    });
    return appoientments;
}



export async function getAll_For_Patient(id) {
    await db.collection(table).where("PAT_DOC_ID", "==", id).get().then(snapshot => {
        appoientments.push(snapshot.docs.map(doc => {
            let obj = new Appoientments(doc.id,
                doc.data().DOC_ID,
                doc.data().PAT_DOC_ID,
                doc.data().Date);

            return obj;
        }));
        appoientments = appoientments[0];
    });
    return appoientments;
}



export function Add(Obj) {
    db.collection(table).add({
        DOC_ID: Obj.DOC_ID,
        PAT_DOC_ID: Obj.PAT_DOC_ID,
        Date: Obj.Date,
    });
}

export function Update(Obj) {
    let id = Obj.FireId;
    db.collection(table).doc(id).update({
        DOC_ID: Obj.DOC_ID,
        PAT_DOC_ID: Obj.PAT_DOC_ID,
        Date: Obj.Date
    });
}



export async function GetByID(id) {
    let obj;
    await db.collection(table).doc(id).get().then((doc) => {
        console.log(doc);
        obj = new Appoientments(doc.id,
            doc.data().DOC_ID,
            doc.data().PAT_DOC_ID,
            doc.data().Date);
    });
    return obj;
}
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
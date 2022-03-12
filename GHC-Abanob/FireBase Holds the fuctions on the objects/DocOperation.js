import Doctors from '../Entities Holds the Classes/Doctors.js'
import db from './dbInstance.js'
var table = 'Doctors';
var doctors = [];

export async function getAll() {
    await db.collection(table).get().then(snapshot => {
        doctors.push(snapshot.docs.map(doc => {
            // console.log(doc.data().ID);
            return new Doctors(doc.id,
                doc.data().ID,
                doc.data().NAME,
                doc.data().phone,
                doc.data().specialization,
                doc.data().address,
                doc.data().degree,
                doc.data().gender,
                doc.data().password,
                doc.data().email)
        }));
        doctors = doctors[0];
    });
    return doctors;
}




export function Add(Obj) {
    db.collection(table).add({
        ID: Obj.Id['Value'],
        NAME: Obj.Name['Value'],
        phone: Obj.Phone['Value'],
        specialization: Obj.specialization['Value'],
        address: Obj.Address,
        degree: Obj.Degree,
        gender: Obj.Gender,
        password: Obj.Password['Value'],
        email: Obj.Email['Value']
    });
}

export function Update(Obj) {
    let id = Obj.FireId;
    db.collection(table).doc(id).update({
        ID: Obj.Id['Value'],
        NAME: Obj.Name['Value'],
        phone: Obj.Phone['Value'],
        specialization: Obj.specialization,
        address: Obj.Address,
        degree: Obj.Degree,
        gender: Obj.Gender,
        password: Obj.Password['Value'],
        email: Obj.Email['Value']
    });
}



export async function GetByID(id) {
    let obj;
    await db.collection(table).doc(id).get().then((doc) => {
        obj = new Doctors(doc.id,
            doc.data().ID,
            doc.data().NAME,
            doc.data().phone,
            doc.data().specialization,
            doc.data().address,
            doc.data().degree,
            doc.data().gender,
            doc.data().password,
            doc.data().email);
    });
    return obj;
}

export function Delete(id) {
    db.collection(table).doc(id).delete();
}


export async function Get_By_DOC_ID_AND_PASSWORD(Id , Password) {
    let obj;
    console.log(Id);
    console.log(Password);
    await db.collection(table)
        .where("ID", "==", Id)
        .where("password", "==", Password)
        .get().then(snap => {
         snap.docs.forEach(doc => {
             
            console.log(doc.id);
            obj= doc.id;
         });
    });
     return obj;
}


// getAll().then((data) => {
//     console.log('Before');
//     console.log(data);
//     console.log('After');
// });
//Add(obj)
//Update(obj)
//Delete(obj);

//  GetByID('MQxPrLvbR3uPx62p7UqD').then(data=>{
//      console.log(data);
//  });
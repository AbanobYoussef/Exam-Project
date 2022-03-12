import Admin from '../Entities Holds the Classes/Admin.js'
var body = document.getElementById('body');
var table = 'Admins';
var Admins = [];


export async function getAll() {
    var i = 0;
    await db.collection(table).get().then(snapshot => {
        Admins.push(snapshot.docs.map(doc => {
            return new Admin(doc.id, doc.data().ID,
                doc.data().NAME,
                doc.data().phone,
                doc.data().address,
                doc.data().gender,
                doc.data().password,
                doc.data().email)
        }));
        Admins = Admins[0];
    });
    return Admins;
}



export function Add(Obj) {
    db.collection(table).add({
        ID: Obj.Id['Value'],
        NAME: Obj.Name['Value'],
        phone: Obj.Phone['Value'],
        address: Obj.Address,
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
        address: Obj.Address,
        gender: Obj.Gender,
        password: Obj.Password['Value'],
        email: Obj.Email['Value']
    });
}

export function Delete(id) {
    db.collection(table).doc(id).delete();
}
var obj = new Admin('2kcCDfUhgifBzwudCak6', 'ID',
    'Abanob',
    'phone',
    'address',
    'gender',
    'password',
    'email');

// getAll().then((data) => {

//     loadData(data);
// });


//Add(obj);
//Update(obj);
//Delete(obj);
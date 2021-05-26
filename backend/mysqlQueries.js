// ici, on se connecte à la base de données. Ainsi, on pourra utiliser
// db (l'équivalent de PDO) pour réaliser les requêtes mySQL.
const config = require('./mysqlConfig');
//const db = require ('./mysqlConnect');
const sqlPromise = require('./mysqlConnect').sqlPromise;

function ListeUsers () {
    const query = `
        SELECT * FROM ${config.mysqlTableUtilisateur}`;
    const data = [];

    return sqlPromise(query,data,"SELECT","rows");
}
module.exports.ListeUsers = ListeUsers; // on exporte la fonction

function getIdUser(_email){
    const query =  `
        SELECT idUser FROM ${config.mysqlTableUtilisateur}
        WHERE email = ?`;
    const data = [_email];

    return sqlPromise(query,data,"SELECT","row");
}
module.exports.getIdUser = getIdUser;

function isUserExistName(_email,_password){
    const query =  `
        SELECT idUser FROM ${config.mysqlTableUtilisateur}
        WHERE email = ? AND password = ?`;
    const data = [_email,_password];

    return sqlPromise(query,data,"SELECT","row");
}
module.exports.isUserExistName = isUserExistName;

function isAdminExistName(_email,_password){
    const query =  `
        SELECT idadmin FROM ${config.mysqlTableAdministrateur}
        WHERE email = ? AND password = ?`;
    const data = [_email,_password];

    return sqlPromise(query,data,"SELECT","row");
}
module.exports.isAdminExistName = isAdminExistName;

function  isUserExistEmail(_email){
    const query =  `
        SELECT idUser FROM ${config.mysqlTableUtilisateur}
        WHERE email = ?`;
    const data = [_email];
    return sqlPromise(query,data,"SELECT","row");

}
module.exports.isUserExistEmail = isUserExistEmail;

function insertUser(_nom,_prenom,_email,_password,_profil){
    const query1 = `
        INSERT INTO ${config.mysqlTableUtilisateur} (prenom,nom,email,password,profil)
        VALUES (?,?,?,?,?)`;
    const data1 = [_prenom,_nom,_email,_password,_profil];

    const query2 =  `
        SELECT idUser FROM ${config.mysqlTableUtilisateur}
        WHERE email = ?`;
    const data2 = [_email];
    sqlPromise(query1,data1,"INSERT","");
    return sqlPromise(query2,data2,"SELECT","row");
}
module.exports.insertUser = insertUser;

//                      ANNONCES QUERIES

function getAllAnnonces(){
    const query = `
        SELECT * FROM ${config.mysqlTableAnnonce} `;
    const data = [];

    return sqlPromise(query,data,"SELECT","rows");
}
module.exports.getAllAnnonces = getAllAnnonces;

function getAnnonceByUser(_iduser){
    const query = `
        SELECT * FROM ${config.mysqlTableAnnonce}
        WHERE iduser = ?`;
    console.log(" iduser dans la fonction getAnnoncebyuser: ",_iduser);
    const data = [_iduser];

    return sqlPromise(query,data,"SELECT","rows");
}
module.exports.getAnnonceByUser = getAnnonceByUser;

function searchingByCibleType(_type, _cible){
    const query = `
        SELECT * FROM ${config.mysqlTableAnnonce}
        WHERE type = ? AND cible = ?`;
    const data = [_type, _cible];

    return sqlPromise(query,data,"SELECT","rows");
}
module.exports.searchingByCibleType = searchingByCibleType;

function insertAnnonce(_type, _titre, _date_fin, _description, _cible, _fichier, _idUser, _duree, _vue, _candidature){
    const query1 = `
        INSERT INTO ${config.mysqlTableAnnonce} (type,titre,date_fin,description,cible,fichier,iduser,duree,vue,candidature)
        VALUES (?,?,?,?,?,?,?,?,?,?)`;

    const data1 = [_type,_titre,_date_fin,_description, _cible, _fichier, _idUser, _duree, _vue, _candidature];

    const query2 =  `
        SELECT idannonce FROM ${config.mysqlTableAnnonce}
        WHERE description = ?`;
    const data2 = [_description];

    sqlPromise(query1,data1,"INSERT","");
    return sqlPromise(query2,data2,"SELECT","row");
}
module.exports.insertAnnonce = insertAnnonce;


//test des functions
/*
async function test(){
    /*
    const listeuser = await ListeUsers();
    //console.log(listeuser);
    const iduser = await isUserExistName("christiann1v5@gmail.com", "1234")
   // console.log(iduser);
    const idadmin = await isAdminExistName("christiann1v6@gmail.com", "1234")
    //console.log(idadmin);
    const isuserexistemail = await isUserExistEmail("christiann1v5@gmail.com")
    //console.log(isuserexistemail);
    const newiduser = await insertUser("Abdoul","OUEDRAOGO","christiann1v7@gmail.com","1234","Etudiant");
    //console.log(newiduser);
    const annonces = await getAllAnnonces();
    //console.log(annonces);
    const annoncesbyuser = await getAnnonceByUser("18");
    console.log(annoncesbyuser);
    const searchingbycibletype = await  searchingByCibleType("Stage", "4 années");
    //console.log(searchingbycibletype);
    const idnewanonce = await  insertAnnonce("Alternance","Alternance BTP", "2021-05-30","Alternance BTP à Marseille","5 années","ffff","14","30 jours","0","0");
    //console.log(idnewanonce);
}
test();
*/


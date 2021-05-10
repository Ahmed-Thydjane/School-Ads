// ici, on se connecte à la base de données. Ainsi, on pourra utiliser
// db (l'équivalent de PDO) pour réaliser les requêtes mySQL.
const config = require('./mysqlConfig');
//const db = require ('./mysqlConnect');
const sqlPromise = require('./mysqlConnect').sqlPromise;

function ListeUsers () {
    const query = `
        SELECT * FROM ${config.mysqlTableUtilisateur}`;
    const data = [];

    return sqlPromise(query,data,"SELECT","rows")
}
module.exports.ListeUsers = ListeUsers; // on exporte la fonction
/*
//test des functions
async function test(){
    listeuser = await ListeUsers();
    console.log(listeuser);
}
test();

 */

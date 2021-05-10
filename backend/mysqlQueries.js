// ici, on se connecte à la base de données. Ainsi, on pourra utiliser
// db (l'équivalent de PDO) pour réaliser les requêtes mySQL.
const config = require('./mysqlConfig');
const db = require('./mysqlConnect').db;
const sqlPromise = require('./mysqlConnect').sqlPromise;


// chaque requête correspond à une fonction qui renverra ce que l'on appelle
// une Promise (promesse). Une promesse est un objet qui contient une
// fonction (dont on sait qu'elle sera exécutée dans le futur). La promesse
// est renvoyée avant que la fonction ne soit exécutée (fonctionnement donc
// asynchrone). Quand la fonction a été exécutée, la callback appelle la
// fonction resolve qui indique à la promesse qu'elle peut renvoyer la
// réponse en question. Dans le fichier getUtilisateur.js, les lignes ??? et ???
// (celles avec les await) récupèrent ces Promises. L'opérateur await attend
// alors que la promesse soit résolue (resolve) et récupère alors la
// réponse. Ainsi, même si tout ce fonctionnement est asynchrone,
// résultat de la requête mysql quand celui-ci aura été renvoyé par le
// serveur MySQL.

function getUtilisateur(){
    const query = `
        SELECT * FROM ${config.mysqlTableUtilisateur}`;
    const data = [];

    return sqlPromise(query,data,"SELECT","rows");
}
module.exports.getUtilisateur = getUtilisateur;

//test des fonctions
async function test (){
    const getUser = await getUtilisateur();
    console.log(getUser);
}
test();


const mysqlConfig = {
    // paramètres de connexion à la base de données
    mysqlHost:     '127.0.0.1',
    mysqlDatabase: 'school-ads',
    charset:       'utf8',
    mysqlLogin:    'root',
    mysqlPassword: '',

    // les noms des tables
    mysqlTableAdministrateur: 'administrateur',
    mysqlTableAnnonce: 'annonce',
    mysqlTableUtilisateur: 'utilisateur'
};

// on exporte la mysqlConfig. En l'exportant comme ci-dessous, on pourra utiliser la
// syntaxe suivante pour la charger dans d'autres fichiers :
// const mysqlConfig = require ('./mysqlConfig');
module.exports = mysqlConfig;


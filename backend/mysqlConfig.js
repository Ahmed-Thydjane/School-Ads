const config = {
    // paramètres de connexion à la base de données
    mysqlHost:             'localhost',
    mysqlDatabase:         'school-ads',
    charset:               'utf8',
    mysqlLogin:            'root',
    mysqlPassword:         '',

    //les noms des tables
    mysqlTableAdministrateur:       'administrateur',
    mysqlTableAnnonce:               'annonce',
    mysqlTableUtilisateur:          'utilisateur'
};

// on exporte la config. En l'exportant comme ci-dessous, on pourra utiliser la
// syntaxe suivante pour la charger dans d'autres fichiers :
// const config = require ('./config');
module.exports = config;

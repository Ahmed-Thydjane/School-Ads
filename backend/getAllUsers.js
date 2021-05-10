// le fichier mysqlQuerys contient des fonctions qui réalisent
// les querys dans la base de données.
const queries = require('./mysqlQueries');

// ici, on utilise ce que l'on appelle l'object destructuring de
// JavaScript afin de récupérer les fonctions sendError et sendMessage.
// ce sont les équivalents des fonctions du même nom que vous aviez
// utilisées en PHP (voir helper.php). L'intérêt de l'object destructuring
// réside dans le fait que l'on va pouvoir appeler directement les fonctions
// sendError et sendMessage. Si l'on avait écrit :
// const message = require ("./message");
// on aurait dû, par la suite, appeler message.sendError () et
// message.sendMessage ().
const{sendError, sendMessage} = require("./message");

// permettra de réaliser l'authentification
const auth = require('./auth');

// ici, pour réaliser séquentiellement plusieurs requêtes mySQL (ce
// qui devra être fait pour répondre à certaines requêtes de votre
// appli Angular, on va utiliser l'opérateur "await "(voir ci-dessous).
// A noter que toutes les fonctions qui utilisent ce mot clef doivent
// être déclarées comme asynchrones via le mot clef async
async function getcours (req,res){
    // on récupère la variable de session et, dans celle-ci, on
    // va récupérer le LOGIN du user. C'est équivalent en PHP à :
    // session_start();
    // $login = $_SESSION['login'];
    const  session = auth.getSession(req);
    const userId = auth.getUserId(session);
    if (userId == -1)
        return sendError (res, 'not authenticated');
    // contrairement à Apache/PHP, qui conserve les sessions sur le
    // serveur, en Node/Express, on ne conserve pas cette information.
    // il faut donc renvoyer le cookie de session après chaque requête
    auth.setSessionCookie (req, res, session);
    /*
        // ici, on récupère les data passées à la route : on suppose
        // que l'utilisateur a envoyé une donnée appelée Login
        if (typeof req.body.login === 'undefined')
            return sendError(res, 'Vous n\'avez pas envoyé la donnée login');
        const login = req.body.login;
    */
    // console.log(userId);
    // maintenant que l'on est identifié et que l'on a récupéré la valeur
    // de Login, on peut réaliser les requêtes mySQL.
    // Grâce au mot clef "await", celles-ci sont réalisées séquentiellement :
    // même si les requêtes mysql sont asynchrones, await va attendre la
    // réponse de la requête avant de passer à la suite.
    // Précisons ici que ces requêtes n'ont d'autre intérêt que de vous montrer
    // comment réaliser des requêtes séquentielles à la manière de PHP : ici,
    // on aurait pu se contenter d'une seule requête MySQL pour obtenir le
    // même résultat.
    let login = userId;
    const iduser = await  queries.getIdUser(login);
    //console.log(iduser);
    const lesidcoursL = await queries.getIdCoursLink(iduser.id_user);
    //console.log(lesidcoursL);
    let lesCours = [] ;
    for(let i =0 ; i<lesidcoursL.length ; i++){
        lesCours[i] =  await  queries.getUserCours(lesidcoursL[i].id_coursL);
    }
    //console.log(lesCours);

    // on renvoie au format JSON la liste des cours demandés par l'utilisateur
    sendMessage(res, lesCours);
}
module.exports.getcours = getcours;


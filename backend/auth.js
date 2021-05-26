const sessionJwt = require ('./sessionJWT');
const {sendError, sendMessage} = require ("./message");
const querys = require('./mysqlQueries');

// ici, on récupère le contenu du cookie de session JWT.
// celui-ci contient le userId mais également des informations
// concernant sa date d'expiration.
function getSession (req) {
    return sessionJwt.decodeSessionCookie(req);
}
module.exports.getSession = getSession;


// cette fonction ajoute le cookie de session au headers du
// message qui sera renvoyé à Angular. Si le cookie actuel
// est "vieux", on en recrée ici un nouveau.
function setSessionCookie (req, res, session) {
    sessionJwt.createSessionCookie(req, res, session);
}
module.exports.setSessionCookie = setSessionCookie;


// fonction pour récupérer le userId provenant du cookie
// de session. Si ce dernier n'existe pas, on renvoie
// l'ID -1.
function getUserId(session) {
    if (typeof session.userId === 'undefined') return -1;
    return session.userId;
}
module.exports.getUserId = getUserId;
//userId est le login

async function authenticate(req,res){
    const email = req.body.email;
    const password = req.body.password;
    if(typeof(email) !== "undefined" && typeof(password) !== "undefined"){
        //console.log("test1 if");
        const iduser = await querys.isUserExistName(email,password);
        //console.log(iduser);
        if(typeof(iduser) !== "undefined" ){
           // console.log("test2 if");
            setSessionCookie(req,res,{userId:iduser});
            return true;
        }else {
           // console.log("test2 else");
            const idAdmin = await querys.isAdminExistName(email,password);
           // console.log(idAdmin);
            if(typeof(idAdmin) !== "undefined" ){
               // console.log("test3 if");
                setSessionCookie(req,res,{userId:idAdmin});
                return true;
            }
        }
    }else {// console.log("test1 else");
         return false;}
}
module.exports.authenticate = authenticate;


async function isAdmin(req,res){
    const user =  await querys.isUserExistName(req.body.email, req.body.password);
    if(typeof(user) !== "undefined"){
       // console.log("teste isadmin",user);
        return true;
    }else {
        //console.log("teste isadmin",user);
        return  false;
    }
}
module.exports.isAdmin = isAdmin;

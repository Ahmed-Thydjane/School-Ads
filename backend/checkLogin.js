const auth = require("./auth");
const {sendError, sendMessage}= require("./message");

async function checklogin(req, res){
    const  session = auth.getSession(req);
    auth.setSessionCookie (req, res, session);
    const isAuth = await auth.authenticate(req,res);
    if(isAuth){
        const isadmin = await auth.isAdmin(req,res);
        if(isadmin){
            let data1 = [session.userId, "utilisateur"];
            console.log("data1:",session.userId);
            sendMessage(res,data1);
        }else {
            let data2 = [session.userId, "administrateur"];
            console.log("data2:",session.userId);
            sendMessage(res,data2);
        }
    }else{
        sendError(res,'Login ou Password incorrecte');
    }
}
module.exports.checklogin = checklogin;

// renvoie un message au format JSON. On a besoin de passer en paramètre
// res, la réponse que l'on envoie au client (Angular). Le paramètre
// data est un objet JavaScript.
function sendMessage (res, data) {
    res.json ({status:'ok', data: data});
}

function  sendError (res, reason0) {
    res.json ({status: 'error', data: {reason: reason0}});
}

module.exports = {sendMessage, sendError};

<?php

require_once 'mysql/mysqlAnnonce.php';
require_once 'helper.php';

if(isset($_POST['idUser'])){
    $userannonce2 = getAnnonceByUserCp($_POST['idUser']);
    if (!empty($userannonce2)) {
        sendMessage($userannonce2);
    }
    else {
        sendError("Vous n'avez poster aucune annonce pour le moment !");
    }
}
else{
    sendError('oups !');
}

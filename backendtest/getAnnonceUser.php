<?php
 require_once 'mysql/mysqlAnnonce.php';
 require_once 'helper.php';

if (!isset($_SESSION['idUser'])) {
    if(isset($_SESSION['idAdmin'])){
        $userannonce1 = getAnnonceByAdmin($_SESSION['idAdmin']);
        if (!empty($userannonce1)) {
            sendMessage($userannonce1);
        } else {
            sendError("Vous n'avez poster aucune annonce pour le moment !");
        }

    }
}
else{
    $userannonce2 = getAnnonceByUser($_SESSION['idUser']);
    if (!empty($userannonce2)) {
        sendMessage($userannonce2);
    } else {
        sendError("Vous n'avez poster aucune annonce pour le moment !");
    }
}
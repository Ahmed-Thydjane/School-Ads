<?php
 require_once 'mysql/mysqlAnnonce.php';
 require_once 'helper.php';


if(isset($_SESSION['idUser'])){
    $userannonce2 = getAnnonceByUser($_SESSION['idUser']);
    if (!empty($userannonce2)) {
        sendMessage($userannonce2);
    }
    else {
        sendError("Vous n'avez poster aucune annonce pour le moment !");
    }
}


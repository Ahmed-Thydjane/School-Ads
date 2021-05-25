<?php

require_once "mysql/mysqlAnnonce.php";
require_once "helper.php";


if(!isset($_SESSION['idUser'])){

    if(isset($_SESSION['idAdmin'])){
        $allannonces1 = getAllAnnonces();
        if(!empty($allannonces1)){
            sendMessage($allannonces1);
        }
        else{
            sendError("Il n y a aucune annonces pour l'instant");
        }
    }

}
else{
    $allannonces2 = getAllAnnonces();
    if(!empty($allannonces2)){
        sendMessage($allannonces2);
    }
    else{
        sendError("Il n y a aucune annonces pour l'instant");
    }
}
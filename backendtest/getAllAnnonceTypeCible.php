<?php

require_once "mysql/mysqlAnnonce.php";
require_once "helper.php";

if (isset($_POST['type']) && isset($_POST['cible'])){
    $allannonces1 = getAllAnnoncesTC($_POST['type'], $_POST['cible']);
    if(!empty($allannonces1)){
        sendMessage($allannonces1);
    }
    else{
        sendError("Il n y a aucune annonces pour l'instant");
    }
}

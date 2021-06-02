<?php

require_once "mysql/mysqlAnnonce.php";
require_once "helper.php";


$allannonces1 = getAllAnnonces();
if(!empty($allannonces1)){
    sendMessage($allannonces1);
}
else{
    sendError("Il n y a aucune annonces pour l'instant");
}

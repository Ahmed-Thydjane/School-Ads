<?php

require_once 'mysql/mysqlAnnonce.php';
require_once 'helper.php';

if(!isset($_SESSION['idUser'])){
    if(isset($_SESSION['idAdmin'])){
        $annonce = getAnnonceByIdAnnonce($_POST['idAnnonce']);
        sendMessage($annonce);
    }
}
else{
    $annonce = getAnnonceByIdAnnonce($_POST['idAnnonce']);
    sendMessage($annonce);
}
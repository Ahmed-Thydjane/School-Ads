<?php

require_once 'mysql/mysqlAnnonce.php';
require_once  'helper.php';

if ($_SESSION['idAdmin']){
    if($_POST['idAnnonce']){
        $valider = validateAnnonce($_POST['idAnnonce']);
        sendMessage($valider);
    }
    else{
        sendError('Cette annonce n existe pas ');
    }
}
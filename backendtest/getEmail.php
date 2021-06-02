<?php

require_once 'helper.php';
require_once 'mysql/mysqlAuth.php';

if(!isset($_SESSION['idUser'])){
    if(isset($_SESSION['idAdmin'])){
        sendMessage(getAdminEmail($_SESSION['idAdmin']));
    }
    else {
        sendError('No connection');
    }
}
else{
    sendMessage(getUserEmail($_SESSION['idUser']));
}
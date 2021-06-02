<?php

require_once 'helper.php';
require_once 'mysql/mysqlAuth.php';

if(!isset($_SESSION['idUser'])){
    if(isset($_SESSION['idAdmin'])){
        sendMessage(getAdminId($_SESSION['idAdmin']));
    }
    else {
        sendError('No connection');
    }
}
else{
        sendMessage(getUserId($_SESSION['idUser']));
}
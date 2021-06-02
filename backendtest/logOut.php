<?php

require_once 'helper.php';
require_once 'mysql/mysqlAuth.php';

if (!isset($_SESSION['idUser'])){
    if (isset($_SESSION['idAdmin'])){
        unset($_SESSION['idAdmin']);
    }
    else{
        sendError('Already disconnected !');
    }
}
else{
    unset($_SESSION['idUser']);
}
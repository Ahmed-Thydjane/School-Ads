<?php
 require_once "helper.php";
 require_once "mysql/mysqlAuth.php";

if (!isset($_SESSION['idUser'])){
    if (isset($_SESSION['idAdmin'])){
        if (isset($_POST['nom'])){
            $modifynomA = modifyNomA($_POST['nom'],$_SESSION['idAdmin']);
            sendMessage($modifynomA);
        }
    }
    else{
        sendError('Already disconnected !');
    }
}
else{
    if (isset($_POST['nom'])){
        $modifynomU = modifyNomU($_POST['nom'], $_SESSION['idUser']);
        sendMessage($modifynomU);
    }
}
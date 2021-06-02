<?php

require_once 'mysql/mysqlAuth.php';
require_once 'helper.php';

if(!isset($_SESSION['idUser'])){
    if(isset($_SESSION['idAdmin'])){
        sendMessage(modifyProfilA( $_POST['nom'], $_POST['prenom'], $_POST['email'], $_POST['password'], $_SESSION['idAdmin']));
    }
}
else{
    sendMessage(modifyProfilU($_POST['nom'], $_POST['prenom'], $_POST['email'], $_POST['password'], $_SESSION['idUser']));
}
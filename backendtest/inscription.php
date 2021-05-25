<?php
require_once 'mysql/mysqlAuth.php';
require_once 'helper.php';

if (isset($_POST['nom']) && isset($_POST['prenom'] ) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['profil'])) {
    $existingemail = isUserExistEmail($_POST['email']);
    if ($existingemail){
        $adduser = insertUser($_POST['nom'],$_POST['prenom'],$_POST['email'],$_POST['password'],$_POST['profil']);
        sendMessage($adduser);
    }
    else{
        sendError("Email existant !");
    }
}
else{
    sendError("Tous les champs sont obligatoire à compléter !");
}
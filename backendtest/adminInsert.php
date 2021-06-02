<?php

require_once 'helper.php';
require_once 'mysql/mysqlAuth.php';

if(isset($_SESSION['idAdmin'])){
    if (isset($_POST['nom']) && isset($_POST['prenom'] ) && isset($_POST['email']) && isset($_POST['password'])  && isset($_POST['profil'])){
        $adminexist = isAdminExistEmail($_POST['email']);
        if ($adminexist){
            $addadmin = insertAdmin($_POST['nom'],$_POST['prenom'],$_POST['email'],$_POST['password'],$_POST['profil']);
            sendMessage($addadmin);
        }

    }else{
        sendError('Tous les champs sont obligatoires ! ');
    }
}
else{
    sendError("Vous n'êtes pas connecté !");
}
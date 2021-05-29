<?php
require_once 'helper.php';
require_once 'mysql/mysqlAnnonce.php';


if (!isset($_SESSION['idUser'])){
    if(isset($_SESSION['idAdmin'])){
        if(isset($_POST['type']) && isset($_POST['titre'])  && isset($_POST['description']) && isset($_POST['cible'])  && isset($_POST['duree']) && isset($_POST['vue']) && isset($_POST['candidature']) && isset($_POST['duree_max']) && isset($_POST['duree_min']) && isset($_POST['tel_responsable']) && isset($_POST['email_responsable']) && isset($_POST['fichier'])){
            $insererannonce = insertAnnonce($_POST['type'],$_POST['titre'], $_POST['description'], $_POST['cible'], 0, $_POST['duree'], $_POST['vue'], $_POST['candidature'] , $_POST['duree_max'], $_POST['duree_min'], $_POST['tel_responsable'], $_POST['email_responsable'], $_POST['postuler'], $_POST['status'], $_SESSION['idAdmin'], $_POST['fichier']);
            if($insererannonce) {
                sendMessage($insererannonce);
            }
        }
        else{
            sendError("Y a quelque chose qui manque");
        }
    }
}
else{
    if(isset($_POST['type']) && isset($_POST['titre'])  && isset($_POST['description']) && isset($_POST['cible'])  && isset($_POST['duree']) && isset($_POST['vue']) && isset($_POST['candidature']) && isset($_POST['duree_max']) && isset($_POST['duree_min']) && isset($_POST['tel_responsable']) && isset($_POST['email_responsable'])  && isset($_POST['postuler'])  && isset($_POST['status']) && isset($_POST['fichier'])){
        $insererannonce1 = insertAnnonce($_POST['type'],$_POST['titre'], $_POST['description'], $_POST['cible'], $_SESSION['idUser'], $_POST['duree'], $_POST['vue'], $_POST['candidature'] , $_POST['duree_max'], $_POST['duree_min'], $_POST['tel_responsable'], $_POST['email_responsable'], $_POST['postuler'], $_POST['status'], 0, $_POST['fichier']);
        if($insererannonce1) {
            sendMessage($insererannonce1);
        }
    }
    else{
        sendError("Y a quelque chose qui manque");
    }
}
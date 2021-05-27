<?php
require_once 'helper.php';
require_once 'mysql/mysqlAnnonce.php';


if (isset($_SESSION['idUser'])){
    if(isset($_POST['type']) && isset($_POST['titre']) && isset($_POST['date_fin']) && isset($_POST['description']) && isset($_POST['cible']) && isset($_POST['fichier']) && isset($_POST['duree']) && isset($_POST['vue']) && isset($_POST['candidature'])){
        if ($_POST['type'] != '' && $_POST['titre'] != '' && $_POST['date_fin'] != '' && $_POST['description'] != '' && $_POST['cible'] != '' && $_POST['fichier'] != '' && $_POST['duree'] != '' && $_POST['vue'] != '' && $_POST['candidature'] != ''){
            $insererannonce = insertAnnonce($_POST['type'],$_POST['titre'], $_POST['date_fin'], $_POST['description'], $_POST['cible'], $_POST['fichier'], $_SESSION['idUser'], $_POST['duree'], $_POST['vue'], $_POST['candidature'] );
            if($insererannonce) {
                sendMessage($insererannonce);
            }
        }
        else{
            sendError("Y a quelque chose qui manque");
        }
    }
}
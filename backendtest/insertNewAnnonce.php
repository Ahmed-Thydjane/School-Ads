<?php
require_once 'helper.php';
require_once 'mysql/mysqlAnnonce.php';


if (!isset($_SESSION['idUser'])){
    if(isset($_SESSION['idAdmin'])){
                $adminannonce = insertAnnonce($_POST['type'], $_POST['titre'], $_POST['description'], $_POST['cible'], $_POST['idUser'] , $_POST['duree'], 0, 0, $_POST['duree_max'], $_POST['duree_min'], $_POST['tel_responsable'], $_POST['email_responsable'], $_POST['postuler'], $_POST['status'], $_SESSION['idAdmin'], $_POST['fichier']);
                if($adminannonce){
                    sendMessage($adminannonce);
                }
                else{
                    sendError('error');
                }
    }
}
else{
        $adminannonce = insertAnnonce($_POST['type'], $_POST['titre'], $_POST['description'], $_POST['cible'], $_SESSION['idUser'] , $_POST['duree'],0, 0, $_POST['duree_max'], $_POST['duree_min'], $_POST['tel_responsable'], $_POST['email_responsable'], $_POST['postuler'], $_POST['status'], $_POST['idAdmin'], $_POST['fichier']);
        sendMessage($adminannonce);
}
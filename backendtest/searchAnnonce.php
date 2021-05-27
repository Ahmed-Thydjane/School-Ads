<?php

require_once 'mysql/mysqlAnnonce.php';
require_once 'helper.php';

if(isset($_SESSION['idUser']) == false){
    if(isset($_SESSION['idAdmin'])){
        if (isset($_POST['type']) && isset($_POST['cible'])){
            $gettypecibleA = searchingByCibleType($_POST['type'], $_POST['cible']);
            if(!empty($gettypecibleA)){
                sendMessage($gettypecibleA);
            }
            else{
                sendError("il n'y a pas d'annonces ! ");
            }
        }
    }
    else {
        sendError('no one is connected !');
    }
}
else{
    if (isset($_POST['type']) && isset($_POST['cible'])){
        $gettypecibleU = searchingByCibleType($_POST['type'], $_POST['cible']);
        if(!empty($gettypecibleU)){
            sendMessage($gettypecibleU);
        }
        else{
            sendError("il n'y a pas d'annonces ! ");
        }
    }
}
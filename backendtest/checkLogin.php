<?php
require_once 'auth.php';
require_once 'helper.php';

if (authenticate1())  {
    if (isAdmin()){
        $data1 = array($_SESSION['idAdmin'], "administrateur");
        sendMessage($data1);
    }
    else{
        $data2 = array($_SESSION['idUser'], "utilisateur");
        sendMessage($data2);
    }
}
else{
    sendError("not authantified ! ");
}

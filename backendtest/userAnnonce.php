<?php

require_once 'mysql/mysqlAnnonce.php';
require_once 'mysql/mysqlAuth.php';
require_once 'helper.php';

//getAllAnnonces --> idAdmin + idUser

$data = getIdAdminIdUser();
//print_r($data);
$res1 = array();
$res2 = array();
foreach ($data as $i){
    if($i['idAdmin']!=0 && $i['idUser']==0){
        $res1[] = getAdminId($i['idAdmin']);
    }
    else if($i['idUser']!=0 && $i['idAdmin']==0){
        $res2[] = getUserId($i['idUser']);
    }
}
$tab = array($res1,$res2);
sendMessage($tab);
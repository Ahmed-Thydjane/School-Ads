<?php

require_once 'mysql/mysqlAuth.php';
require_once 'helper.php';

if (isset($_SESSION['idAdmin'])){
    $allusers = getAllUsers();
    sendMessage($allusers);
}
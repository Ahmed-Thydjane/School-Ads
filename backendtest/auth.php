<?php

session_start();

require_once 'mysql/mysqlAuth.php';

function authenticate1(){
    if (isset($_POST['email']) && isset($_POST['password'])){
        $user = isUserExistName($_POST['email'], $_POST['password']);
        if (!empty($user) && isset($user['idUser'])){
            $_SESSION['idUser'] = $user['idUser'];
            $_SESSION['email'] = $_POST['email'];
            return true;
        }
        else{
            $admin = isAdminExistName($_POST['email'], $_POST['password']);
            if (!empty($admin) && isset($admin['idAdmin'])){
                $_SESSION['idAdmin'] = $admin['idAdmin'];
                $_SESSION['email'] = $_POST['email'];
                return true;
            }
            return false;
        }
    }
}

function isAdmin(){
    $user = isUserExistName($_POST['email'], $_POST['password']);
    if(empty($user)){
        return true;
    }
    return false;
}

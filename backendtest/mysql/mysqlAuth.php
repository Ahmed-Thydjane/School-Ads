<?php
require_once 'mysqlConnect.php';

function isUserExistName($email, $password){

    global $PDO;
    $query = "SELECT idUser FROM utilisateur WHERE email = ? AND password = ? ;";

    $data = array($email, $password);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);

    $results = $statement->fetch(PDO::FETCH_ASSOC);

    return $results;
}

function isAdminExistName($email, $password){

    global $PDO;
    $query = "SELECT idAdmin FROM administrateur WHERE email = ? AND password = ? ;";

    $data = array($email, $password);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);

    $results = $statement->fetch(PDO::FETCH_ASSOC);

    return $results;
}

function deleteUser($idUser){
    global $PDO;
    $query = "DELETE FROM utilisateur WHERE utilisateur.idUser = ?;";

    $data = array($idUser);
    $statement = $PDO->prepare($query);
    return $statement->execute($data);
}

function getAllUsers(){
    global $PDO;
    $query = "SELECT * FROM utilisateur;";

    $statement = $PDO->prepare($query);
    $exec = $statement->execute();

    $results = $statement->fetchAll(PDO::FETCH_ASSOC);

    return $results;
}

function getUserId($idUser){
    global $PDO;
    $query = "SELECT * FROM utilisateur WHERE utilisateur.idUser = ? ;";

    $data = array($idUser);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);

    $results = $statement->fetch(PDO::FETCH_ASSOC);

    return $results;
}

function getAdminId($idAdmin){
    global $PDO;
    $query = "SELECT * FROM administrateur WHERE administrateur.idAdmin = ? ;";

    $data = array($idAdmin);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);

    $results = $statement->fetch(PDO::FETCH_ASSOC);

    return $results;
}

function isUserExistEmail($email){
    global $PDO;
    $query = "SELECT idUser FROM utilisateur WHERE email = ? ;";

    $data = array($email);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);

    $results = $statement->fetch(PDO::FETCH_ASSOC);

    if (empty($results)) return true;
    return false;
}

function isAdminExistEmail($email){
    global $PDO;
    $query = "SELECT idAdmin FROM administrateur WHERE email = ? ;";

    $data = array($email);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);

    $results = $statement->fetch(PDO::FETCH_ASSOC);

    if (empty($results)) return true;
    return false;
}

function insertUser($nom, $prenom, $email, $password, $profil){
    global $PDO;
    $query = "INSERT INTO utilisateur (idUser, nom, prenom, email, password, profil) VALUES (NULL, ?, ?, ?, ?, ?);";
    $data = array($nom, $prenom, $email, $password, $profil);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);
    if($exec) return $PDO->lastInsertId();
}

function insertAdmin($nom, $prenom, $email, $password, $profil){
    global $PDO;
    $query = "INSERT INTO administrateur (idAdmin, nom, prenom, email, password, profil) VALUES (NULL, ?, ?, ?, ?, ?);";
    $data = array($nom, $prenom, $email, $password, $profil);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);
    if($exec) return $PDO->lastInsertId();
}

function getUserEmail($idUser){
    global $PDO;
    $query = "SELECT email FROM utilisateur WHERE utilisateur.idUser = ? ;";

    $data = array($idUser);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);

    $results = $statement->fetch(PDO::FETCH_ASSOC);

    return $results;
}

function getAdminEmail($idAdmin){
    global $PDO;
    $query = "SELECT email FROM administrateur WHERE administrateur.idAdmin = ? ;";

    $data = array($idAdmin);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);

    $results = $statement->fetch(PDO::FETCH_ASSOC);

    return $results;
}

function modifyProfilU($idUser,$nom,$prenom, $email,$password){
    global $PDO;
    $query = "UPDATE utilisateur SET utilisateur.nom = ? , utilisateur.prenom = ? , utilisateur.email = ? , utilisateur.password = ?  WHERE utilisateur.idUser = ?;";
    $data = array($idUser,$nom,$prenom, $email,$password);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);
    return $exec;
}

function modifyProfilA($nom,$prenom, $email,$password,$idUser){
    global $PDO;
    $query = "UPDATE administrateur SET administrateur.nom = ? , administrateur.prenom = ? , administrateur.email = ? , administrateur.password = ?  WHERE administrateur.idAdmin = ?;";
    $data = array($nom,$prenom, $email,$password, $idUser);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);
    return $exec;
}

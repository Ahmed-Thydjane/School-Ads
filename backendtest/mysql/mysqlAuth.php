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

function modifyNomU($nom, $idUser){
    global $PDO;
    $query = "UPDATE utilisateur SET utilisateur.nom = ? WHERE utilisateur.idUser = ?;";
    $data = array($nom, $idUser);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);
    return $exec;
}

function modifyPrenomU($prenom, $idUser){
    global $PDO;
    $query = "UPDATE utilisateur SET utilisateur.prenom = ? WHERE utilisateur.idUser = ?;";
    $data = array($prenom, $idUser);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);
    return $exec;
}

function modifyEmailU($email, $idUser){
    global $PDO;
    $query = "UPDATE utilisateur SET utilisateur.email = ? WHERE utilisateur.idUser = ?;";
    $data = array($email, $idUser);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);
    return $exec;
}

function modifyPasswordU($password, $idUser){
    global $PDO;
    $query = "UPDATE utilisateur SET utilisateur.password = ? WHERE utilisateur.idUser = ?;";
    $data = array($password, $idUser);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);
    return $exec;
}

function modifyNomA($nom, $idAdmin){
    global $PDO;
    $query = "UPDATE administrateur SET administrateur.nom = ? WHERE administrateur.idAdmin = ?;";
    $data = array($nom, $idAdmin);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);
    return $exec;
}

function modifyPrenomA($prenom, $idAdmin){
    global $PDO;
    $query = "UPDATE administrateur SET administrateur.prenom = ? WHERE administrateur.idAdmin = ?;";
    $data = array($prenom, $idAdmin);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);
    return $exec;
}

function modifyEmailA($email, $idAdmin){
    global $PDO;
    $query = "UPDATE administrateur SET administrateur.email = ? WHERE administrateur.idAdmin = ?;";
    $data = array($email, $idAdmin);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);
    return $exec;
}

function modifyPasswordA($password, $idAdmin){
    global $PDO;
    $query = "UPDATE administrateur SET administrateur.password = ? WHERE administrateur.idAdmin = ?;";
    $data = array($password, $idAdmin);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);
    return $exec;
}

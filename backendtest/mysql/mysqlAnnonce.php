<?php

require_once 'mysqlConnect.php';

function getAllAnnonces(){
    global $PDO;
    $query = "SELECT * FROM annonces;";

    $statement = $PDO->prepare($query);
    $exec = $statement->execute();

    $results = $statement->fetchAll(PDO::FETCH_ASSOC);
    return $results;
}

function getAllAnnoncesTC($type, $cible){
    global $PDO;
    $query = "SELECT * FROM annonces WHERE annonces.type = ? AND annonces.cible = ?;";

    $data = array($type, $cible);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);

    $results = $statement->fetchAll(PDO::FETCH_ASSOC);
    return $results;
}

function getAnnonceByIdAnnonce($idAnnonce){
    global $PDO;
    $query = "SELECT * FROM annonces WHERE annonces.idAnnonce = ?;";

    $data = array($idAnnonce);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);

    $results = $statement->fetch(PDO::FETCH_ASSOC);
    return $results;
}

function getIdAdminIdUser(){
    global $PDO;
    $query = "SELECT idAdmin, idUser FROM annonces;";

    $statement = $PDO->prepare($query);
    $exec = $statement->execute();

    $results = $statement->fetchAll(PDO::FETCH_ASSOC);
    return $results;
}

function searchingByCibleType($type, $cible){
    global $PDO;
    $query = "SELECT idAdmin, idUser FROM annonces WHERE annonces.type = ? AND annonces.cible = ?;";

    $data = array($type, $cible);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);

    $results = $statement->fetchAll(PDO::FETCH_ASSOC);
    return $results;
}

function getAnnonceByUser($idUser){
    global $PDO;
    $query = "SELECT * FROM annonces WHERE annonces.idUser = ?;";

    $data = array($idUser);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);

    $results = $statement->fetchAll(PDO::FETCH_ASSOC);
    return $results;

}

function getAnnonceByUserCp($idUser){
    global $PDO;
    $query = "SELECT COUNT(*) FROM annonces WHERE annonces.idUser = ? AND annonces.status = 1;";

    $data = array($idUser);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);

    $results = $statement->fetchAll(PDO::FETCH_ASSOC);
    return $results;

}

function getAnnonceByAdmin($idAdmin){
    global $PDO;
    $query = "SELECT * FROM annonces WHERE annonces.idAdmin = ?;";

    $data = array($idAdmin);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);

    $results = $statement->fetchAll(PDO::FETCH_ASSOC);
    return $results;

}

function insertAnnonce($type, $titre, $description, $cible, $idUser, $duree, $vue, $candidature, $duree_max, $duree_min, $tel_responsable, $email_responsable, $postuler, $status, $idAdmin, $fichier){
    global $PDO;
    $query = "INSERT INTO annonces (idAnnonce, type, titre, description, cible, idUser, duree, vue, candidature, duree_max, duree_min, tel_responsable, email_responsable, postuler, status,idAdmin, fichier)".
        " VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ? , ?, ?, ?, ?, ?, ?, ?) ";
    $data = array($type, $titre, $description, $cible, $idUser, $duree, $vue, $candidature, $duree_max, $duree_min, $tel_responsable, $email_responsable, $postuler, $status, $idAdmin, $fichier);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);
    if($exec) return $PDO->lastInsertId();
}

function validateAnnonce($idAnnonce){
    global $PDO;
    $query = "UPDATE annonces SET annonces.status = 1 WHERE annonces.idAnnonce = ?";
    $data = array($idAnnonce);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);
    return $exec;
}

function deleteA($idAnnonce){
    global $PDO;
    $query = "DELETE FROM annonces WHERE annonces.idAnnonce = ?;";

    $data = array($idAnnonce);
    $statement = $PDO->prepare($query);
    return $statement->execute($data);
}
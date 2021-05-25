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

function getAnnonceByUser($idUser){
    global $PDO;
    $query = "SELECT * FROM annonces WHERE annonces.idUser = ?;";

    $data = array($idUser);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);

    $results = $statement->fetchAll(PDO::FETCH_ASSOC);
    return $results;

}

function getAnnonceByAdmin($idUser){
    global $PDO;
    $query = "SELECT * FROM annonces WHERE annonces.idAdmin = ?;";

    $data = array($idUser);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);

    $results = $statement->fetchAll(PDO::FETCH_ASSOC);
    return $results;

}


function searchingByCibleType($type, $cible){
    global $PDO;
    $query = "SELECT * FROM annonces WHERE annonces.type = ? AND annonces.cible = ? ;";

    $data = array($type, $cible);
    $statment = $PDO->prepare($query);
    $exec = $statment->execute($data);

    $results = $statment->fetchAll(PDO::FETCH_ASSOC);
    return $results;
}

function insertAnnonce($type, $titre, $date_fin, $description, $cible, $fichier, $idUser, $duree, $vue, $candidature){
    global $PDO;
    $query = "INSERT INTO annonces (idAnnonce, type, titre, date_fin, description, cible, fichier, idUser, duree, vue, candidature)"
                ."VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";

    $data = array($type, $titre, $date_fin, $description, $cible, $fichier, $idUser, $duree, $vue, $candidature);
    $statement = $PDO->prepare($query);
    $exec = $statement->execute($data);
    if($exec) return $PDO->lastInsertId();
}
print_r(getAnnonceByAdmin(1));
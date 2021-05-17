-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 17 mai 2021 à 23:43
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `school-ads`
--

-- --------------------------------------------------------

--
-- Structure de la table `administrateur`
--

DROP TABLE IF EXISTS `administrateur`;
CREATE TABLE IF NOT EXISTS `administrateur` (
  `idadmin` int(11) NOT NULL AUTO_INCREMENT,
  `prenom` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `nom` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `password` varchar(256) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `role` int(1) NOT NULL COMMENT '0 ^pour un etudiant\r\n1 pour un professeur',
  PRIMARY KEY (`idadmin`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `annonce`
--

DROP TABLE IF EXISTS `annonce`;
CREATE TABLE IF NOT EXISTS `annonce` (
  `idannonce` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `titre` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `date_fin` date NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `cible` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `fichier` varchar(250) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `iduser` int(11) NOT NULL,
  `duree` varchar(256) COLLATE utf8_unicode_ci DEFAULT NULL,
  `vue` int(11) NOT NULL,
  `candidature` int(11) NOT NULL,
  `duree_max` varchar(30) CHARACTER SET utf32 COLLATE utf32_unicode_ci DEFAULT NULL,
  `duree_min` varchar(30) CHARACTER SET utf32 COLLATE utf32_unicode_ci DEFAULT NULL,
  `tel_responsable` varchar(40) CHARACTER SET utf32 COLLATE utf32_unicode_ci DEFAULT NULL,
  `email_responsable` varchar(100) CHARACTER SET utf32 COLLATE utf32_unicode_ci DEFAULT NULL,
  `postuler` tinyint(1) DEFAULT NULL,
  `status` int(1) DEFAULT NULL,
  PRIMARY KEY (`idannonce`),
  KEY `iduser` (`iduser`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `iduser` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `prenom` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `nom` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `password` varchar(256) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `role` varchar(20) COLLATE utf32_unicode_ci NOT NULL,
  PRIMARY KEY (`iduser`)
) ENGINE=MyISAM DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

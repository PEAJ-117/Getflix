-- MariaDB dump 10.19  Distrib 10.6.11-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: getflix
-- ------------------------------------------------------
-- Server version	10.6.11-MariaDB-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `fav`
--

DROP TABLE IF EXISTS `fav`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fav` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) NOT NULL,
  `Sinopsis` varchar(255) NOT NULL,
  `Anio` varchar(4) NOT NULL,
  `Elenco` varchar(255) NOT NULL,
  `Creado` varchar(255) NOT NULL,
  `Clasificacion_edad` varchar(255) NOT NULL,
  `Generos` varchar(255) NOT NULL,
  `Activo` char(1) NOT NULL,
  `Subido` timestamp NOT NULL DEFAULT current_timestamp(),
  `Modificado` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fav`
--

LOCK TABLES `fav` WRITE;
/*!40000 ALTER TABLE `fav` DISABLE KEYS */;
/*!40000 ALTER TABLE `fav` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) NOT NULL,
  `Sinopsis` varchar(255) NOT NULL,
  `Duracion` char(10) NOT NULL,
  `Anio` varchar(4) NOT NULL,
  `Elenco` varchar(255) NOT NULL,
  `Direccion` varchar(255) NOT NULL,
  `Guion` varchar(255) NOT NULL,
  `Clasificacion_edad` varchar(255) NOT NULL,
  `Generos` varchar(255) NOT NULL,
  `Idiomas` varchar(255) NOT NULL,
  `Idiomas_Subtitulos` varchar(255) NOT NULL,
  `Activo` char(1) NOT NULL,
  `Subido` timestamp NOT NULL DEFAULT current_timestamp(),
  `Modificado` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `season`
--

DROP TABLE IF EXISTS `season`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `season` (
  `ID_Temporada` int(11) NOT NULL AUTO_INCREMENT,
  `Temporada` char(4) NOT NULL,
  `Numero_Capitulos` varchar(255) NOT NULL,
  `Activo_Temporada` char(1) NOT NULL,
  `Subido_Temporada` timestamp NOT NULL DEFAULT current_timestamp(),
  `Modificado_Temporada` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `ID_coleccion` int(11) NOT NULL,
  PRIMARY KEY (`ID_Temporada`),
  KEY `ID_coleccion` (`ID_coleccion`),
  CONSTRAINT `season_ibfk_1` FOREIGN KEY (`ID_coleccion`) REFERENCES `fav` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `season`
--

LOCK TABLES `season` WRITE;
/*!40000 ALTER TABLE `season` DISABLE KEYS */;
/*!40000 ALTER TABLE `season` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `viewers`
--

DROP TABLE IF EXISTS `viewers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `viewers` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Correo` varchar(255) NOT NULL,
  `Contrasena` varchar(255) NOT NULL,
  `Telefono` varchar(10) DEFAULT NULL,
  `Forma_Pago` varchar(255) NOT NULL,
  `Plan` varchar(255) NOT NULL,
  `Fecha_Facturacion` date NOT NULL,
  `Plan_Activo` char(1) NOT NULL,
  `Activo` char(1) NOT NULL,
  `Creado` timestamp NOT NULL DEFAULT current_timestamp(),
  `Modificado` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `viewers`
--

LOCK TABLES `viewers` WRITE;
/*!40000 ALTER TABLE `viewers` DISABLE KEYS */;
INSERT INTO `viewers` VALUES (1,'poledwin@gmail.com','$2a$10$AYQm8.jThbfyJHDsWYBW4OAuggOFS/uIjg.1DBaQSA1rFuaaQ06Rm','2871072276','Credito','XBigPlus','2015-12-22','Y','Y','2022-12-15 10:29:53','2022-12-15 10:29:53'),(2,'elia@gmail.com','$2a$10$KWAhtAAjxBau9vbP/B/Nx.ijrBdVBp9WwiuZu2sRU9P.ZJOiBq4aK','2871839180','Credito','Mini','2015-12-22','Y','Y','2022-12-15 10:37:25','2022-12-15 10:37:25'),(3,'paul@gmail.com','$2a$10$tDFY0QEdLLWOq.XN5so5hui4vXJFOtBnykmq8mQNqnc1BhIUk6iGW','2871839180','Credito','Mini','2015-12-22','Y','Y','2022-12-15 20:02:50','2022-12-15 20:02:50'),(4,'dervis@gmail.com','$2a$10$wd4qjSuInmrz5TfxGki51eyZ2NlfFZozSYr.5hm17uRK6C09TdGWC','2871839180','Credito','Mini','2015-12-22','Y','Y','2022-12-15 20:07:37','2022-12-15 20:07:37'),(5,'soles@gmail.com','$2a$10$X1/8pI./WAz7fdtE2kivRu5af9jYjWCUqbzyFsBuFEJSBcHAOvqgO','2871839180','Credito','Mini','2015-12-22','Y','Y','2022-12-15 22:08:07','2022-12-15 22:08:07');
/*!40000 ALTER TABLE `viewers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-15 16:40:54

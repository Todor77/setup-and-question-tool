-- MySQL dump 10.17  Distrib 10.3.22-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: setup_question_tool
-- ------------------------------------------------------
-- Server version	10.3.22-MariaDB

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
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `answer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `answer` longtext COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer`
--

LOCK TABLES `answer` WRITE;
/*!40000 ALTER TABLE `answer` DISABLE KEYS */;
INSERT INTO `answer` VALUES (2,'That answer if you read come from database, that means connection work perfectly');
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question` varchar(255) COLLATE utf8_bin NOT NULL,
  `answer` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `answer` (`answer`),
  CONSTRAINT `question_ibfk_1` FOREIGN KEY (`answer`) REFERENCES `answer` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES (2,'compile vs impplementation gradle ?',2),(3,'TsLint in anauglar , etwas mit configuration ?',NULL),(4,'spring.jpa.hibernate.use-new-id-generator-mappings= false',NULL),(5,'Junit vs Integration test,  ?',NULL),(7,'Wie einen spring boot mit angular app mit docker zu bauen ?',NULL),(8,'@EnableJpaAuditing annotation ?',NULL),(9,'routerLink vs routerActiveLink angular 9 ?',NULL),(10,'was ist serialversionnumber beim entitäten, und warum brauchen wir ?',NULL),(11,'jar vs war spring build files ?',NULL),(12,'types of tomcat, embedded vs sandalone. ?',NULL),(13,'views in databases ? Warum wie ?',NULL),(14,'runtime gradle dependency ?',NULL),(15,'compile vs impplementation gradle ?',NULL),(16,'maven scope test convert in gradle ?',NULL),(17,'Junit vs Integration test  ?',NULL),(18,'gradle compile vs implement dependency ?',NULL),(19,'kann man einen local feature branch entfernen und dann wieder zurück bringen, ?',NULL),(20,'RequestParam vs PathParam ?',NULL),(21,'Streams mapToInt() ich vestehe nicht (steam-sum anschauen von baeldung) ?',NULL),(22,'Runtime exception vs Exception, welche kann nested sein, und wie genauer funktioniert welchen kann vor der Exception e sein ... Runtime .. oder was ?',NULL),(23,'Runtime exception vs Exception, welche kann nested sein, und wie genauer funktioniert welchen kann vor der Exception e sein ... Runtime .. oder was ?',NULL),(24,'Runtime exception vs Exception, welche kann nested sein, und wie genauer funktioniert  ?',NULL),(25,'spring vs spring boot ?',NULL),(26,'anotation @Operation ( spring) ?',NULL),(27,'wo ist mergesort verwenden ?',NULL),(28,'was ist Websocket (web protocol) ?',NULL),(29,'was ist Servlet ?',NULL),(30,'was ist Kubernetis ?',NULL),(31,'warum eine aplication ist gut oder schlecht wenn die läuft im Cloud, wir,  ?',NULL),(32,'kubernetis. ?',NULL),(33,'URI.js Link bauen einen JS library, schaust du bitte kurz was macht diese library. ?',NULL),(34,'NamedParameterJdbcOperations jdbcTemplate ?',NULL),(35,'@EnableWebMvc spring annotation ?',NULL),(36,'primitive type vs wrapper class ?',NULL),(37,'git fragen ?',NULL),(38,'test',NULL),(39,'Http vs Http2 ?',NULL),(40,'@Configuraiton annotation Spring ?',NULL),(41,'@EnableWebSecurity annotation Spring ?',NULL);
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_bin NOT NULL,
  `email` varchar(255) COLLATE utf8_bin NOT NULL,
  `password` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin','admin@admin.com','admin');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-08 12:00:36

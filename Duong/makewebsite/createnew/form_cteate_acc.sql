-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 06, 2020 at 04:20 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `login`
--

-- --------------------------------------------------------

--
-- Table structure for table `form_cteate_acc`
--

CREATE TABLE `form_cteate_acc` (
  `Id` int(11) NOT NULL,
  `Lastname` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `Date` datetime DEFAULT NULL,
  `Sex` varchar(255) DEFAULT NULL,
  `Firstname` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `form_cteate_acc`
--

INSERT INTO `form_cteate_acc` (`Id`, `Lastname`, `Email`, `Password`, `Date`, `Sex`, `Firstname`) VALUES
(0, 'ping', 'pingkinh@gmail.com', '123', '2020-06-11 17:06:27', 'Male', 'kinh'),
(1, 'Duong', 'Duongret110@gmail.com', '123', '2020-06-15 16:47:06', 'Female', 'koeun'),
(2, 'Ret', 'duongret110@gmail.com', '123', '2020-06-11 17:00:53', 'Female', 'Duong');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `form_cteate_acc`
--
ALTER TABLE `form_cteate_acc`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `Firstname` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2026 at 10:00 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_sipbot`
--

-- --------------------------------------------------------

--
-- Table structure for table `alamat`
--

CREATE TABLE `alamat` (
  `id` int(11) NOT NULL,
  `idPegawai` int(11) NOT NULL,
  `alamatKTP` text NOT NULL,
  `alamatDomisili` text NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `alamat`
--

INSERT INTO `alamat` (`id`, `idPegawai`, `alamatKTP`, `alamatDomisili`, `userId`, `createdAt`, `updatedAt`) VALUES
(2, 1, 'Jalan Syeikh Abdul Rauf, Desa Kopelma Darussalam, Kecamatan Syiah Kuala, Kota Banda Aceh, Provinsi Aceh', 'Jalan Syeikh Abdul Rauf, Desa Kopelma Darussalam, Kecamatan Syiah Kuala, Kota Banda Aceh, Provinsi Aceh', 1, '2026-04-23 07:06:59', '2026-05-20 02:29:26'),
(4, 6, 'Jln Padat Karya', 'Jln Padat Karya', 1, '2026-05-03 15:07:46', '2026-05-03 15:07:46'),
(5, 7, 'Jl. Setia Budi No. 12, Kel. Tanjung Rejo, Kec. Medan Sunggal, Kota Medan, Sumatera Utara 20122', 'Jl. Setia Budi No. 12, Kel. Tanjung Rejo, Kec. Medan Sunggal, Kota Medan, Sumatera Utara 20122', 1, '2026-05-19 14:08:10', '2026-05-19 14:08:10'),
(6, 8, 'Jl. Krakatau Ujung No. 39, Kel. Pulo Brayan Darat I, Kec. Medan Timur, Kota Medan, Sumatera Utara 20239', 'Jl. Cemara Asri No. 88, Kel. Sampali, Kec. Percut Sei Tuan, Deli Serdang, Sumatera Utara 20371', 1, '2026-05-19 14:20:51', '2026-05-19 14:20:51'),
(7, 9, 'Jl. Kapten Muslim No. 55, Kel. Dwikora, Kec. Medan Helvetia, Kota Medan, Sumatera Utara 20124', 'Jl. Amal Luhur No. 11, Kel. Helvetia Tengah, Kec. Medan Helvetia, Kota Medan, Sumatera Utara 20124', 1, '2026-05-19 14:27:28', '2026-05-19 14:27:28'),
(8, 10, 'Jl. Pelajar Timur No. 18, Kel. Binjai, Kec. Medan Denai, Kota Medan, Sumatera Utara 20228', 'Jl. Pelajar Timur No. 18, Kel. Binjai, Kec. Medan Denai, Kota Medan, Sumatera Utara 20228', 1, '2026-05-19 14:33:42', '2026-05-19 14:33:42'),
(9, 11, 'Jl. Yos Sudarso Km. 8 No. 120, Kel. Tanjung Mulia, Kec. Medan Deli, Kota Medan, Sumatera Utara 20241', 'Jl. Aluminium Raya No. 33, Kel. Tanjung Mulia Hilir, Kec. Medan Deli, Kota Medan, Sumatera Utara 20241', 1, '2026-05-19 14:39:28', '2026-05-19 14:39:28'),
(10, 12, 'Jl. Brigjen Katamso No. 76, Kel. Kampung Baru, Kec. Medan Maimun, Kota Medan, Sumatera Utara 20159', 'Jl. Multatuli No. 28, Kel. Hamdan, Kec. Medan Maimun, Kota Medan, Sumatera Utara 20151', 1, '2026-05-19 14:58:36', '2026-05-19 14:58:36');

-- --------------------------------------------------------

--
-- Table structure for table `anak`
--

CREATE TABLE `anak` (
  `id` int(11) NOT NULL,
  `idPegawai` int(11) NOT NULL,
  `namaAnak` varchar(255) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `anak`
--

INSERT INTO `anak` (`id`, `idPegawai`, `namaAnak`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'gibran', 1, '2026-04-22 04:15:42', '2026-04-22 04:15:42'),
(2, 1, 'gokil ', 1, '2026-04-22 04:18:21', '2026-04-22 04:18:21'),
(3, 2, 'erpan w', 1, '2026-04-22 04:18:31', '2026-04-26 05:06:40'),
(4, 2, 'amna', 1, '2026-05-03 15:00:11', '2026-05-03 15:00:11'),
(5, 2, 'manda', 1, '2026-05-03 15:00:11', '2026-05-03 15:00:11'),
(6, 6, 'Chena', 1, '2026-05-03 15:20:53', '2026-05-03 15:20:53'),
(7, 6, 'Donny', 1, '2026-05-03 15:20:53', '2026-05-03 15:20:53'),
(8, 6, 'Agam', 1, '2026-05-03 15:20:53', '2026-05-03 15:20:53'),
(9, 7, 'Rizky Pratama', 1, '2026-05-19 14:16:16', '2026-05-19 14:16:16'),
(10, 7, 'Nabila Putri', 1, '2026-05-19 14:16:16', '2026-05-19 14:16:16'),
(11, 8, 'Farrel Akbar', 1, '2026-05-19 14:23:25', '2026-05-19 14:23:25'),
(12, 8, 'Nayla Azahra', 1, '2026-05-19 14:23:25', '2026-05-19 14:23:25'),
(13, 9, 'Alif Ramadhan', 1, '2026-05-19 14:29:26', '2026-05-19 14:29:26'),
(14, 9, 'Kayla Putri', 1, '2026-05-19 14:29:26', '2026-05-19 14:29:26'),
(15, 9, 'Fathan', 1, '2026-05-19 14:29:26', '2026-05-19 14:29:26'),
(16, 10, 'Aisyah Humaira', 1, '2026-05-19 14:35:52', '2026-05-19 14:35:52'),
(17, 11, '-', 1, '2026-05-19 14:41:31', '2026-05-19 14:41:31'),
(18, 12, '-', 1, '2026-05-19 15:00:32', '2026-05-19 15:00:32');

-- --------------------------------------------------------

--
-- Table structure for table `fisik`
--

CREATE TABLE `fisik` (
  `id` int(11) NOT NULL,
  `idPegawai` int(11) NOT NULL,
  `tinggiBadan` int(11) DEFAULT NULL,
  `beratBadan` int(11) DEFAULT NULL,
  `jenisRambut` varchar(255) DEFAULT NULL,
  `warnaRambut` varchar(255) DEFAULT NULL,
  `bentukWajah` varchar(255) DEFAULT NULL,
  `warnaKulit` varchar(255) DEFAULT NULL,
  `ciriKhusus` varchar(255) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fisik`
--

INSERT INTO `fisik` (`id`, `idPegawai`, `tinggiBadan`, `beratBadan`, `jenisRambut`, `warnaRambut`, `bentukWajah`, `warnaKulit`, `ciriKhusus`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 1, 170, 80, 'lurus', 'coklat', 'lonjong', 'putih', 'Tahi lalat', 1, '2026-04-20 03:06:31', '2026-04-25 14:42:46'),
(2, 2, 166, 59, 'lurus', 'hitam', 'persegi', 'coklat', 'Tahi Lalat', 1, '2026-04-25 10:32:33', '2026-04-25 10:32:33'),
(3, 5, 166, 60, 'lurus', 'hitam', 'bulat', 'kuning langsat', 'Tahi Lalat', 1, '2026-05-03 14:50:23', '2026-05-03 14:50:23'),
(4, 6, 170, 60, 'bergelombang', 'hitam', 'persegi', 'kuning langsat', 'Tahi Lalat', 1, '2026-05-03 15:08:15', '2026-05-03 15:08:15'),
(5, 7, 170, 68, 'lurus', 'hitam', 'bulat', 'sawo matang', 'Memiliki tahi lalat di pipi kanan', 1, '2026-05-19 14:13:15', '2026-05-19 14:13:15'),
(6, 8, 168, 58, 'bergelombang', 'hitam', 'hati', 'kuning langsat', 'Tahi lalat di leher', 1, '2026-05-19 14:22:29', '2026-05-19 14:22:29'),
(7, 9, 175, 80, 'keriting', 'pirang', 'bulat', 'sawo matang', 'Berkumis tipis', 1, '2026-05-19 14:28:55', '2026-05-19 14:28:55'),
(8, 10, 162, 53, 'bergelombang', 'coklat', 'bulat', 'putih', 'Menggunakan behel', 1, '2026-05-19 14:35:17', '2026-05-19 14:35:17'),
(9, 11, 180, 85, 'ikal', 'merah', 'berlian', 'hitam', 'Bekas luka di tangan kanan', 1, '2026-05-19 14:40:46', '2026-05-19 14:40:46'),
(10, 12, 167, 60, 'bergelombang', 'hitam', 'persegi', 'putih', 'Memiliki tahi lalat di dagu', 1, '2026-05-19 14:59:45', '2026-05-19 14:59:45');

-- --------------------------------------------------------

--
-- Table structure for table `identitas`
--

CREATE TABLE `identitas` (
  `id` int(11) NOT NULL,
  `idPegawai` int(11) NOT NULL,
  `nik` varchar(255) DEFAULT NULL,
  `nomorKK` varchar(255) DEFAULT NULL,
  `nomorBPJS` varchar(255) DEFAULT NULL,
  `nomorTaspen` varchar(255) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `identitas`
--

INSERT INTO `identitas` (`id`, `idPegawai`, `nik`, `nomorKK`, `nomorBPJS`, `nomorTaspen`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 1, '2147483647', '4564342325434552', '2147483647313', '435423', 1, '2026-04-20 02:09:44', '2026-04-23 13:00:27'),
(2, 5, '1174032610010001', '2147483647000092', '2147483647313', '435423', 1, '2026-05-03 14:39:22', '2026-05-03 14:39:22'),
(3, 6, '2147483647313777', '2147483647251251', '3253235465234', '435423', 1, '2026-05-03 15:07:53', '2026-05-03 15:07:53'),
(4, 7, '1271031205870001', '1271031504210001', '0001457823912', 'TSP19870512001', 1, '2026-05-19 14:09:29', '2026-05-19 14:09:29'),
(5, 8, '1671022511970006', '1671022009210006', '0006348923145', 'TSP19971125006', 1, '2026-05-19 14:21:17', '2026-05-19 14:21:17'),
(6, 9, '1471081709890007', '1471081106170007', '0007451239876', 'TSP19890917007', 1, '2026-05-19 14:27:52', '2026-05-19 14:27:52'),
(7, 10, '3471150804950008', '3471151408200008', '0008567412398', 'TSP19950408008', 1, '2026-05-19 14:34:11', '2026-05-19 14:34:11'),
(8, 11, '1212030112820009', '1212032509100009', '0009678523410', 'TSP19821201009', 1, '2026-05-19 14:39:46', '2026-05-19 14:39:46'),
(9, 12, '3273011508980010', '3273010507190010', '0001789634521', 'TSP19980815010', 1, '2026-05-19 14:58:56', '2026-05-19 14:58:56');

-- --------------------------------------------------------

--
-- Table structure for table `kepegawaian`
--

CREATE TABLE `kepegawaian` (
  `id` int(11) NOT NULL,
  `idPegawai` int(11) NOT NULL,
  `statusKepegawaian` varchar(255) DEFAULT NULL,
  `jabatan` varchar(255) DEFAULT NULL,
  `tmtJabatan` date DEFAULT NULL,
  `bagianKerja` varchar(255) DEFAULT NULL,
  `eselon` varchar(255) DEFAULT NULL,
  `angkatanPejim` varchar(255) DEFAULT NULL,
  `ppns` varchar(255) DEFAULT NULL,
  `tmtPensiun` date DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kepegawaian`
--

INSERT INTO `kepegawaian` (`id`, `idPegawai`, `statusKepegawaian`, `jabatan`, `tmtJabatan`, `bagianKerja`, `eselon`, `angkatanPejim`, `ppns`, `tmtPensiun`, `userId`, `createdAt`, `updatedAt`) VALUES
(2, 2, 'PPPK', 'Kepala subtikkim', '2026-04-01', 'INTELDAKIM', 'Eselon IV/b', 'XIV', '1', '2026-04-16', 1, '2026-04-19 09:40:41', '2026-04-19 09:40:41'),
(4, 1, 'PPNS', 'KTU', '2026-04-05', 'Kepegawaian', 'Eselon II/b', '33', '1', '2026-04-30', 1, '2026-04-25 10:34:44', '2026-04-25 10:34:44'),
(6, 6, 'PPNS', 'KASUBSI', '2026-05-09', 'INTELDAKIM', 'Eselon IV/b', 'XXI', '0', '2026-05-13', 1, '2026-05-03 15:07:18', '2026-05-03 15:07:18'),
(7, 7, 'PPNS', 'Kepala Seksi Intelijen dan Penindakan Keimigrasian', '2022-01-01', 'Bidang Intelijen dan Penindakan Keimigrasian', 'Eselon III/a', 'PEJIM 2012', '1', '2045-01-01', 1, '2026-05-19 14:03:43', '2026-05-19 14:03:43'),
(8, 8, 'PPNS', 'Kepala Kantor Imigrasi Kelas I Khusus', '2020-10-01', 'Pimpinan Kantor Imigrasi', 'Eselon II/b', 'PEJIM 2005', '1', '2055-10-01', 1, '2026-05-19 14:19:16', '2026-05-19 14:19:16'),
(9, 9, 'PPPK', 'Arsiparis Keimigrasian', '2022-04-06', 'Bagian Tata Usaha', 'Non Eselon', 'PEJIM 2019', '0', '2054-04-09', 1, '2026-05-19 14:26:06', '2026-05-19 14:26:06'),
(10, 10, 'PPNS', 'Kepala Seksi Dokumen Perjalanan', '2018-07-11', 'Seksi Dokumen Perjalanan', 'Eselon II/a', 'PEJIM 2009', '1', '2056-09-11', 1, '2026-05-19 14:32:18', '2026-05-19 14:32:18'),
(11, 11, 'CPNS', 'Petugas Pemeriksa Keimigrasian', '2025-03-01', 'Tempat Pemeriksaan Imigrasi (TPI)', 'Non Eselon', 'PEJIM 2024', '0', '2057-07-17', 1, '2026-05-19 14:38:21', '2026-05-19 14:38:21'),
(12, 12, 'Out Sourcing', 'Kepala Seksi Dokumen Perjalanan', '2018-04-11', 'Seksi Dokumen Perjalanan', 'Eselon III/a', 'PEJIM 2009', '0', '2056-08-10', 1, '2026-05-19 14:57:26', '2026-05-19 14:57:26'),
(13, 3, 'PPNS', 'Analis Keimigrasian Ahli Pertama', '2019-06-13', 'Bidang Teknologi Informasi dan Komunikasi Keimigrasian', 'Eselon III/a', 'PEJIM 2012', '1', '2044-10-18', 1, '2026-05-19 15:02:19', '2026-05-19 15:02:19');

-- --------------------------------------------------------

--
-- Table structure for table `pangkat`
--

CREATE TABLE `pangkat` (
  `id` int(11) NOT NULL,
  `idPegawai` int(11) NOT NULL,
  `pangkat` varchar(255) DEFAULT NULL,
  `golonganRuang` varchar(255) DEFAULT NULL,
  `tanggalSKPangkat` date DEFAULT NULL,
  `nomorSKPangkat` varchar(255) DEFAULT NULL,
  `SKPangkatDari` varchar(255) DEFAULT NULL,
  `uraianSKPangkat` varchar(255) DEFAULT NULL,
  `tmtPangkat` date DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pangkat`
--

INSERT INTO `pangkat` (`id`, `idPegawai`, `pangkat`, `golonganRuang`, `tanggalSKPangkat`, `nomorSKPangkat`, `SKPangkatDari`, `uraianSKPangkat`, `tmtPangkat`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 2, 'Penata', 'II/A', '2026-04-02', '001/SK/2025', 'Kementerian Hukum dan HAM RI', 'Penyesuaian pangkat jabatan struktural', '2026-04-02', 1, '2026-04-20 01:14:22', '2026-05-19 15:04:15'),
(2, 1, 'Penata Tingkat I', 'III/B', '2026-04-02', '88/SKB/22', 'Kepala Kanwil', 'Diberikan untuk kenaikan pangkat', '2026-04-09', 1, '2026-04-25 10:18:05', '2026-05-19 15:04:41'),
(4, 6, 'Brigadir', 'II/C', '2026-05-20', '001/SK/2025', 'Kepala Kanwil', 'Kenaikan Pangkat', '2026-05-06', 1, '2026-05-03 15:07:35', '2026-05-19 15:04:57'),
(5, 7, 'Penata Muda', 'III/A', '2021-03-15', 'SK-IMI/IIIa/2021/001', 'Kementerian Hukum dan HAM RI', 'Kenaikan pangkat reguler menjadi Penata Muda', '2021-04-01', 1, '2026-05-19 14:07:14', '2026-05-19 14:07:14'),
(6, 8, 'Pembina Tingkat I', 'IV/b', '2017-09-01', 'SK-IMI/IVb/2017/017', 'Menteri Hukum dan HAM RI', 'Kenaikan pangkat struktural tingkat madya', '2017-10-01', 1, '2026-05-19 14:20:31', '2026-05-19 14:20:31'),
(7, 9, 'Pembina Utama Muda', 'IV/C', '2016-06-02', 'SK-IMI/IVc/2016/004', 'Presiden Republik Indonesia', 'Kenaikan pangkat pejabat administrator', '2016-07-06', 1, '2026-05-19 14:27:12', '2026-05-19 14:27:12'),
(8, 10, 'Pengatur Muda', 'II/a', '2023-01-12', 'SK-IMI/IIa/2023/031', 'Kantor Wilayah Kemenkumham Sumut', 'Pengangkatan CPNS menjadi PNS', '2023-02-16', 1, '2026-05-19 14:33:28', '2026-05-19 14:33:28'),
(9, 11, 'Pengatur Muda Tingkat I', 'II/b', '2024-09-15', 'SK-IMI/IIb/2024/009', 'Direktorat Jenderal Imigrasi', 'Penyesuaian golongan ruang pegawai teknis', '2024-10-15', 1, '2026-05-19 14:39:06', '2026-05-19 14:39:06'),
(10, 12, 'Pengatur', 'II/C', '2021-03-04', 'SK-IMI/IIc/2021/027', 'Kantor Imigrasi Kelas I Medan', 'Kenaikan pangkat reguler pegawai administrasi', '2021-04-15', 1, '2026-05-19 14:58:22', '2026-05-19 14:58:22'),
(11, 3, 'Pengatur', 'II/c', '2020-11-12', 'SK-IMI/IIIa/2021/334', 'Kantor Imigrasi Kelas I Medan', 'Kenaikan pangkat reguler pegawai administrasi', '2020-02-12', 1, '2026-05-19 15:06:02', '2026-05-19 15:06:02');

-- --------------------------------------------------------

--
-- Table structure for table `pasangan`
--

CREATE TABLE `pasangan` (
  `id` int(11) NOT NULL,
  `idPegawai` int(11) NOT NULL,
  `namaPasangan` varchar(255) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pasangan`
--

INSERT INTO `pasangan` (`id`, `idPegawai`, `namaPasangan`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Ada Wong', 1, '2026-04-20 04:20:56', '2026-04-20 04:20:56'),
(2, 2, 'Clara', 1, '2026-04-25 10:05:40', '2026-04-25 10:05:40'),
(3, 6, 'Cut Mulia', 1, '2026-05-03 15:20:53', '2026-05-03 15:20:53'),
(4, 7, 'Dewi Kartika', 1, '2026-05-19 14:16:16', '2026-05-19 14:16:16'),
(5, 8, 'Yusuf Hidayat', 1, '2026-05-19 14:23:25', '2026-05-19 14:23:25'),
(6, 9, 'Siska Maharani', 1, '2026-05-19 14:29:26', '2026-05-19 14:29:26'),
(7, 10, 'Ahmad Fauzan', 1, '2026-05-19 14:35:52', '2026-05-19 14:35:52'),
(8, 11, 'Maria Angelina', 1, '2026-05-19 14:41:31', '2026-05-19 14:41:31'),
(9, 12, 'Bagas', 1, '2026-05-19 15:00:32', '2026-05-19 15:00:32');

-- --------------------------------------------------------

--
-- Table structure for table `pegawai`
--

CREATE TABLE `pegawai` (
  `id` int(11) NOT NULL,
  `nip` varchar(255) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `gelarDepan` varchar(255) DEFAULT NULL,
  `gelarBelakang` varchar(255) DEFAULT NULL,
  `namaDenganGelar` varchar(255) NOT NULL,
  `tempatLahir` varchar(255) DEFAULT NULL,
  `tanggalLahir` date DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `agama` varchar(255) DEFAULT NULL,
  `statusPegawai` tinyint(1) DEFAULT NULL,
  `emailPribadi` varchar(255) DEFAULT NULL,
  `emailDinas` varchar(255) DEFAULT NULL,
  `noHp` varchar(255) DEFAULT NULL,
  `hobi` varchar(255) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pegawai`
--

INSERT INTO `pegawai` (`id`, `nip`, `nama`, `gelarDepan`, `gelarBelakang`, `namaDenganGelar`, `tempatLahir`, `tanggalLahir`, `gender`, `agama`, `statusPegawai`, `emailPribadi`, `emailDinas`, `noHp`, `hobi`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, '198705122010011001', 'Andi Pratama', 'Drs.', 'M.Si', 'Drs. Andi Pratama, M.Si', 'Medan', '1987-05-12', 'Laki-Laki', 'Islam', 1, 'andi.pratama87@gmail.com', 'andi.pratama@imigrasi.go.id', '081362451210', 'Futsal', 1, '2026-04-17 05:32:07', '2026-05-19 13:50:44'),
(2, '199002182015022003', 'Siti Rahmawati', 'Hj.', 'S.H.', 'Hj. Siti Rahmawati, S.H.', 'Banda Aceh', '1990-02-18', 'Perempuan', 'Islam', 1, 'siti.rahma90@yahoo.com', 'siti.rahmawati@imigrasi.go.id', '082174563298', 'Memasak', 1, '2026-04-19 09:34:54', '2026-05-19 13:52:31'),
(3, '198811302011031004', 'Budi Santoso', 'Ir.', 'M.T.', 'Ir. Budi Santoso, M.T.', 'Surabaya', '1988-11-30', 'Laki-Laki', 'Kristen Protestan', 0, 'budi.santoso88@gmail.com', 'budi.santoso@imigrasi.go.id', '081298765431', 'Memancing', 1, '2026-04-29 02:07:42', '2026-05-19 13:54:15'),
(6, '199305062018041005', 'Clara Wijaya', '', '', 'Clara Wijaya,', 'Jakarta', '1993-05-06', 'Perempuan', 'Katolik', 1, 'clara.wijaya@gmail.com', 'clara.wijaya@imigrasi.go.id', '085261734890', 'Membaca', 1, '2026-05-03 15:07:01', '2026-05-19 13:56:10'),
(7, '198406142009051006', 'Dedi Kurniawan', 'Dr.', 'M.H.', 'Dr. Dedi Kurniawan, M.H.', 'Padang', '1984-06-14', 'Laki-Laki', 'Islam', 1, 'dedi.kurniawan84@gmail.com', 'dedi.kurniawan@imigrasi.go.id', '081377654122', 'Bersepeda', 1, '2026-05-19 13:58:11', '2026-05-19 13:58:11'),
(8, '199711252020061007', 'Elsa Natalia', '', 'S.Psi.', 'Elsa Natalia, S.Psi.', 'Palembang', '1997-11-12', 'Perempuan', 'Kristen Protestan', 1, 'elsa.natalia97@gmail.com', 'elsa.natalia@imigrasi.go.id', '082288731245', 'Fotografi', 1, '2026-05-19 14:17:45', '2026-05-20 02:25:39'),
(9, '198909172012071008', 'Farhan Hidayat', 'H.', 'S.E.', 'H. Farhan Hidayat, S.E.', 'Pekanbaru', '1989-05-09', 'Laki-Laki', 'Islam', 1, 'farhan.hidayat@gmail.com', 'farhan.hidayat@imigrasi.go.id', '081234987650', 'Badminton', 1, '2026-05-19 14:25:05', '2026-05-19 14:25:05'),
(10, '199504082019081009', 'Gina Maharani', 'Dra.', 'M.Pd.', 'Dra. Gina Maharani, M.Pd.', 'Yogyakarta', '1995-01-09', 'Perempuan', 'Hindu', 1, 'gina.maharani95@gmail.com', 'gina.maharani@imigrasi.go.id', '085712349876', 'Menulis', 1, '2026-05-19 14:31:12', '2026-05-19 14:31:12'),
(11, '198212012008091010', 'Henry Simanjuntak', 'Ir.', '', 'Ir. Henry Simanjuntak,', 'Balige', '1982-08-24', 'Laki-Laki', 'Kristen Protestan', 0, 'henry.simanjuntak@gmail.com', 'henry.simanjuntak@imigrasi.go.id', '081398761245', 'Catur', 1, '2026-05-19 14:37:21', '2026-05-19 14:37:21'),
(12, '199808152021101011', 'Intan Permata', '', 'S.Ak.', 'Intan Permata, S.Ak.', 'Bandung', '1998-10-07', 'Perempuan', 'Islam', 1, 'intan.permata98@gmail.com', 'intan.permata@imigrasi.go.id', '082165478923', 'Traveling', 1, '2026-05-19 14:55:38', '2026-05-19 14:55:38');

-- --------------------------------------------------------

--
-- Table structure for table `pendidikan`
--

CREATE TABLE `pendidikan` (
  `id` int(11) NOT NULL,
  `idPegawai` int(11) NOT NULL,
  `pendidikanTerakhir` varchar(255) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pendidikan`
--

INSERT INTO `pendidikan` (`id`, `idPegawai`, `pendidikanTerakhir`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'S1', 1, '2026-04-20 02:59:37', '2026-04-25 14:18:54'),
(2, 2, 'D1', 1, '2026-04-23 13:33:03', '2026-04-23 13:33:03'),
(3, 5, 'S2', 1, '2026-05-03 14:46:14', '2026-05-03 14:46:14'),
(4, 6, 'D3', 1, '2026-05-03 15:08:01', '2026-05-03 15:08:01'),
(5, 7, 'S2', 1, '2026-05-19 14:10:46', '2026-05-19 14:10:46'),
(6, 8, 'S1', 1, '2026-05-19 14:21:49', '2026-05-19 14:21:49'),
(7, 9, 'S2', 1, '2026-05-19 14:28:11', '2026-05-19 14:28:11'),
(8, 10, 'S3', 1, '2026-05-19 14:34:43', '2026-05-19 14:34:43'),
(9, 11, 'S3', 1, '2026-05-19 14:40:19', '2026-05-19 14:40:19'),
(10, 12, 'S1', 1, '2026-05-19 14:59:23', '2026-05-19 14:59:23');

-- --------------------------------------------------------

--
-- Table structure for table `rekening`
--

CREATE TABLE `rekening` (
  `id` int(11) NOT NULL,
  `idPegawai` int(11) NOT NULL,
  `nomorRekGaji` varchar(255) DEFAULT NULL,
  `namaBank` varchar(255) DEFAULT NULL,
  `kantorCabang` varchar(255) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rekening`
--

INSERT INTO `rekening` (`id`, `idPegawai`, `nomorRekGaji`, `namaBank`, `kantorCabang`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 1, '31421232232', 'Bank Mandiri', 'KC Bathupat, Lhokseumawe', 1, '2026-04-20 02:27:30', '2026-04-20 02:27:30'),
(3, 2, '89688282', 'Bank BCA', 'KCP Blang Pulo', 1, '2026-04-25 10:18:27', '2026-04-25 10:18:27'),
(5, 6, '314212366777', 'Bank Syariah Indonesia (BSI)', 'KC Bathupat, Lhokseumawe, Muara Dua', 1, '2026-05-03 15:07:59', '2026-05-03 15:07:59'),
(6, 7, '1320019876543', 'Bank Mandiri', 'KC Medan Balai Kota', 1, '2026-05-19 14:10:31', '2026-05-19 14:10:31'),
(7, 8, '4512098765432', 'Bank Tabungan Negara', 'KC Medan Pemuda', 1, '2026-05-19 14:21:43', '2026-05-19 14:21:43'),
(8, 9, '314212366777', 'Bank BCA', 'KCP Lhokseumawe', 1, '2026-05-19 14:28:06', '2026-05-19 14:28:06'),
(9, 10, '7120345678', 'Bank Syariah Indonesia (BSI)', 'KC Medan Utama', 1, '2026-05-19 14:34:38', '2026-05-19 14:34:38'),
(10, 11, '990087654321', 'Permata Bank', 'KC Medan Asia', 1, '2026-05-19 14:40:13', '2026-05-19 14:40:13'),
(11, 12, '721009872', 'Bank Syariah Indonesia (BSI)', 'KC Bathupat', 1, '2026-05-19 14:59:20', '2026-05-19 14:59:20');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`sid`, `expires`, `data`, `createdAt`, `updatedAt`) VALUES
('1NdLhK6ftnczZqUPrJmxISKVg4iwamIC', '2026-05-22 07:21:31', '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2026-05-22T07:21:31.672Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"lax\"}}', '2026-05-21 07:21:31', '2026-05-21 07:21:31'),
('BTOfZHhksHuYhgZx4Rl7q0klwowQCMKa', '2026-05-22 07:20:53', '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2026-05-22T07:20:53.365Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"lax\"}}', '2026-05-21 07:20:53', '2026-05-21 07:20:53'),
('p5V8bBvvoN4hDn6e_8vYrxB59LiuuZFz', '2026-05-22 07:21:18', '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2026-05-22T07:21:18.431Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"lax\"}}', '2026-05-21 07:21:18', '2026-05-21 07:21:18'),
('zidjZ6AD_sE-oqoPClekeCF4kFrZ0sXk', '2026-05-23 00:31:53', '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2026-05-22T02:06:10.650Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"lax\"}}', '2026-05-21 02:06:10', '2026-05-22 00:31:53');

-- --------------------------------------------------------

--
-- Table structure for table `ukuran`
--

CREATE TABLE `ukuran` (
  `id` int(11) NOT NULL,
  `idPegawai` int(11) NOT NULL,
  `ukuranPadDivamot` varchar(255) DEFAULT NULL,
  `ukuranSepatu` varchar(255) DEFAULT NULL,
  `ukuranTopi` varchar(255) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ukuran`
--

INSERT INTO `ukuran` (`id`, `idPegawai`, `ukuranPadDivamot`, `ukuranSepatu`, `ukuranTopi`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 2, 'XXXL', '46', '58', 1, '2026-04-20 04:16:14', '2026-04-25 14:42:55'),
(2, 1, 'L', '39', '53', 1, '2026-04-25 10:32:42', '2026-04-25 10:32:42'),
(3, 5, 'S', '39', '54', 1, '2026-05-03 14:51:09', '2026-05-03 14:51:09'),
(4, 6, 'M', '44', '59', 1, '2026-05-03 15:08:19', '2026-05-03 15:08:19'),
(5, 7, 'XL', '43', '60', 1, '2026-05-19 14:13:23', '2026-05-19 14:13:23'),
(6, 8, 'L', '41', '55', 1, '2026-05-19 14:22:39', '2026-05-19 14:22:39'),
(7, 9, 'XXL', '45', '61', 1, '2026-05-19 14:29:01', '2026-05-19 14:29:01'),
(8, 10, 'XL', '42', '58', 1, '2026-05-19 14:35:23', '2026-05-19 14:35:23'),
(9, 11, 'XL', '37', '53', 1, '2026-05-19 14:40:53', '2026-05-19 14:40:53'),
(10, 12, 'XXXL', '36', '57', 1, '2026-05-19 14:59:51', '2026-05-19 14:59:51');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `uuid`, `username`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(1, '11d88ded-5706-4167-add2-09537e98acd0', 'admin', 'admin@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$Zn7Of/pOyDcvcDyFbPGuig$y+4VmjNhLbjfk/c8d48tHNc4Xzs/4WIffHATD1U5Hjw', 'admin', '2026-04-13 13:16:49', '2026-04-27 04:09:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alamat`
--
ALTER TABLE `alamat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idPegawai` (`idPegawai`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `anak`
--
ALTER TABLE `anak`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fisik`
--
ALTER TABLE `fisik`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `identitas`
--
ALTER TABLE `identitas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kepegawaian`
--
ALTER TABLE `kepegawaian`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idPegawai` (`idPegawai`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `pangkat`
--
ALTER TABLE `pangkat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idPegawai` (`idPegawai`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `pasangan`
--
ALTER TABLE `pasangan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pegawai`
--
ALTER TABLE `pegawai`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `pendidikan`
--
ALTER TABLE `pendidikan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rekening`
--
ALTER TABLE `rekening`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `ukuran`
--
ALTER TABLE `ukuran`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alamat`
--
ALTER TABLE `alamat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `anak`
--
ALTER TABLE `anak`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `fisik`
--
ALTER TABLE `fisik`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `identitas`
--
ALTER TABLE `identitas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `kepegawaian`
--
ALTER TABLE `kepegawaian`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `pangkat`
--
ALTER TABLE `pangkat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `pasangan`
--
ALTER TABLE `pasangan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `pegawai`
--
ALTER TABLE `pegawai`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `pendidikan`
--
ALTER TABLE `pendidikan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `rekening`
--
ALTER TABLE `rekening`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `ukuran`
--
ALTER TABLE `ukuran`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `alamat`
--
ALTER TABLE `alamat`
  ADD CONSTRAINT `alamat_ibfk_1` FOREIGN KEY (`idPegawai`) REFERENCES `pegawai` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `alamat_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `kepegawaian`
--
ALTER TABLE `kepegawaian`
  ADD CONSTRAINT `kepegawaian_ibfk_1` FOREIGN KEY (`idPegawai`) REFERENCES `pegawai` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `kepegawaian_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `pangkat`
--
ALTER TABLE `pangkat`
  ADD CONSTRAINT `pangkat_ibfk_1` FOREIGN KEY (`idPegawai`) REFERENCES `pegawai` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pangkat_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `pegawai`
--
ALTER TABLE `pegawai`
  ADD CONSTRAINT `pegawai_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

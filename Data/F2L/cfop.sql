--
-- Current Database: `cfop`
--
CREATE DATABASE 
/*!32312 IF NOT EXISTS*/
`cfop` 
/*!40100 DEFAULT CHARACTER SET utf8mb4 */
;
USE `cfop`;
--
-- Table structure for table `f2l`
--
DROP 
  TABLE IF EXISTS `f2l`;
CREATE TABLE `f2l` (
  `id` int(3) NOT NULL, 
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
-- Dumping data for table `f2l`
--
LOCK TABLES `f2l` WRITE;
INSERT INTO `f2l` 
VALUES 
  (1), 
  (2), 
  (3), 
  (4), 
  (5), 
  (6), 
  (7), 
  (8), 
  (9), 
  (10), 
  (11), 
  (12), 
  (13), 
  (14), 
  (15), 
  (16), 
  (17), 
  (18), 
  (19), 
  (20), 
  (21), 
  (22), 
  (23), 
  (24), 
  (25), 
  (26), 
  (27), 
  (28), 
  (29), 
  (30), 
  (31), 
  (32), 
  (33), 
  (34), 
  (35), 
  (36), 
  (37), 
  (38), 
  (39), 
  (40), 
  (41), 
  (42), 
  (43), 
  (44), 
  (45), 
  (46), 
  (47), 
  (48), 
  (49), 
  (50), 
  (51), 
  (52), 
  (53), 
  (54), 
  (55), 
  (56), 
  (57), 
  (58), 
  (59), 
  (60), 
  (61), 
  (62), 
  (63), 
  (64), 
  (65), 
  (66), 
  (67), 
  (68), 
  (69), 
  (70), 
  (71), 
  (72), 
  (73), 
  (74), 
  (75), 
  (76), 
  (77), 
  (78), 
  (79), 
  (80), 
  (81), 
  (82), 
  (83), 
  (84), 
  (85), 
  (86), 
  (87), 
  (88), 
  (89), 
  (90), 
  (91), 
  (92), 
  (93);
UNLOCK TABLES;
--
-- Table structure for table `f2lalgorithm`
--
DROP 
  TABLE IF EXISTS `f2lalgorithm`;
CREATE TABLE `f2lalgorithm` (
  `algorithm` varchar(100) NOT NULL, 
  `id` int(3) NOT NULL, 
  `status` enum(
    'not learned', 'learning', 'learned', 
    ''
  ) NOT NULL DEFAULT 'not learned', 
  KEY `FK_f2l_f2lalgorithm` (`id`), 
  CONSTRAINT `FK_f2l_f2lalgorithm` FOREIGN KEY (`id`) REFERENCES `f2l` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
-- Dumping data for table `f2lalgorithm`
--
LOCK TABLES `f2lalgorithm` WRITE;
INSERT INTO `f2lalgorithm` 
VALUES 
  ('R\' F R F\'', 1, 'learned'), 
  ('U R U\' R\'', 1, 'learned'), 
  (
    'y F\' L F L\'', 1, 'not learned'
  ), 
  ('y2 U L U\' L\'', 1, 'learned'), 
  (
    'y\' r\' U\' R U M\'', 1, 'learned'
  ), 
  ('F R\' F\' R', 2, 'learned'), 
  (
    'y L F\' L\' F', 2, 'not learned'
  ), 
  ('y U\' L\' U L', 2, 'learned'), 
  (
    'y2 l U L\' U\' M\'', 2, 'learned'
  ), 
  ('y\' U\' R\' U R', 2, 'learned'), 
  ('F\' U\' F', 3, 'learned'), 
  ('y L\' U\' L', 3, 'learned'), 
  ('y\' R\' U\' R', 3, 'learned'), 
  ('R U R\'', 4, 'learned'), 
  ('y F U F\'', 4, 'learned'), 
  ('y2 L U L\'', 4, 'learned'), 
  (
    'U\' R U R\' U\' | R U2 R\' |', 
    5, 'learned'
  ), 
  (
    'y U l\' U L U\' L\' U\' l', 5, 'not learned'
  ), 
  (
    'y2 U\' L U L\' U2 | L U\' L\' |', 
    5, 'learned'
  ), 
  (
    'y\' U r\' U R U\' R\' U\' r', 5, 
    'not learned'
  ), 
  (
    'U\' r U\' R\' U R U r\'', 6, 'not learned'
  ), 
  (
    'y U L\' U\' L U | L\' U2 L |', 
    6, 'learned'
  ), 
  (
    'y2 U\' l U\' L\' U L U l\'', 6, 
    'not learned'
  ), 
  (
    'y\' U R\' U\' R U2 | R\' U R |', 
    6, 'learned'
  ), 
  (
    'U\' R U2 R\' U2 | R U\' R\' |', 
    7, 'learned'
  ), 
  (
    'y l U2 L2 U\' L2\' U\' l\'', 7, 
    'not learned'
  ), 
  (
    'y2 U\' L U2 L\' U2 | L U\' L\' |', 
    7, 'learned'
  ), 
  (
    'y\' r U2 R2 U\' R2 U\' r\'', 7, 
    'learned'
  ), 
  (
    'r\' U2 R2 U R2\' U r', 8, 'not learned'
  ), 
  (
    'y U L\' U2 L U2 | L\' U L |', 8, 
    'learned'
  ), 
  (
    'y2 l\' U2 L2 U L2 U l`', 8, 'not learned'
  ), 
  (
    'y\' U R\' U2 R U2 | R\' U R |', 
    8, 'learned'
  ), 
  (
    'U\' R U\' R\' U | F\' U\' F |', 
    9, 'learned'
  ), 
  (
    'y U L\' U\' L U\' | L\' U\' L |', 
    9, 'learned'
  ), 
  (
    'y U2 L\' U L U | L\' U\' L |', 
    9, 'not learned'
  ), 
  (
    'y\' U R\' U\' R U\' | R\' U\' R |', 
    9, 'learned'
  ), 
  (
    'U\' R U R\' U | R U R\' |', 10, 
    'learned'
  ), 
  (
    'U2 R U\' R\' U\' | R U R\' |', 
    10, 'not learned'
  ), 
  (
    'y U L\' U L U\' | F U F\' |', 10, 
    'not learned'
  ), 
  (
    'y2 U\' L U L\' U | L U L\' |', 
    10, 'learned'
  ), 
  (
    'U\' R U2 R\' U | F\' U\' F |', 
    11, 'learned'
  ), 
  (
    'y L U2 L2 U\' L2 U\' L\'', 11, 'learned'
  ), 
  (
    'y2 U\' L U2 L\' U y\' | L\' U\' L |', 
    11, 'learned'
  ), 
  (
    'y\' R U2 R2 U\' R2 U\' R\'', 11, 
    'learned'
  ), 
  (
    'R\' U2 R2 U R2 U R', 12, 'learned'
  ), 
  (
    'y U L\' U2 L U\' | F U F\' |', 
    12, 'learned'
  ), 
  (
    'y2 L\' U2 L2 U L2\' U L', 12, 'learned'
  ), 
  (
    'y\' U R\' U2 R U\' y | R U R\' |', 
    12, 'learned'
  ), 
  (
    'M\' U\' R U R\' U\' R U2 r\'', 
    13, 'not learned'
  ), 
  (
    'y U L\' U L U\' | L\' U\' L |', 
    13, 'learned'
  ), 
  (
    'y2 M U\' L U L\' U\' L U2 l\'', 
    13, 'not learned'
  ), 
  (
    'y\' U R\' U R U\' | R\' U\' R |', 
    13, 'learned'
  ), 
  (
    'U R U\' R\' U | R U R\' |', 14, 
    'learned'
  ), 
  (
    'y M\' U L\' U\' L U L\' U2 l', 
    14, 'not learned'
  ), 
  (
    'y2 U\' L U\' L\' U | L U L\' |', 
    14, 'learned'
  ), 
  (
    'y\' M U R\' U\' R U R\' U2 r', 
    14, 'not learned'
  ), 
  (
    'R U R\' U2 R U\' R\' U | R U\' R\' |', 
    15, 'not learned'
  ), 
  (
    'M U r U\' r\' U\' M\'', 15, 'not learned'
  ), 
  (
    'y L\' U L U2 | F U F\' |', 15, 'not learned'
  ), 
  (
    'y2 L U L\' U2 L U\' L\' U | L U\' L\' |', 
    15, 'not learned'
  ), 
  (
    'y2 M\' U l U\' l\' U\' M', 15, 'not learned'
  ), 
  (
    'y\' R\' U R U2 y | R U R\' |', 
    15, 'not learned'
  ), 
  (
    'R U\' R\' U2 | F\' U\' F |', 16, 
    'not learned'
  ), 
  (
    'y L\' U\' L U2 L\' U L U\' | L\' U L |', 
    16, 'not learned'
  ), 
  (
    'y M U\' l\' U l U M\'', 16, 'not learned'
  ), 
  (
    'y2 L U\' L\' U2 y\' | L\' U\' L |', 
    16, 'not learned'
  ), 
  (
    'y\' R\' U\' R U2 R\' U R U\' | R\' U R |', 
    16, 'not learned'
  ), 
  (
    'y\' M\' U\' r\' U r U M', 16, 'not learned'
  ), 
  (
    'R U2 R\' U\' | R U R\' |', 17, 'learned'
  ), 
  (
    'y L F\' L\' F L\' U L U\' | L\' U L |', 
    17, 'not learned'
  ), 
  (
    'y2 L U2 L\' U\' | L U L\' |', 17, 
    'learned'
  ), 
  (
    'R\' F R F\' R U\' R\' U | R U\' R\' |', 
    18, 'not learned'
  ), 
  (
    'y L\' U2 L U | L\' U\' L |', 18, 
    'learned'
  ), 
  (
    'y\' R\' U2 R U | R\' U\' R |', 
    18, 'learned'
  ), 
  (
    'U R U2 R\' U | R U\' R\' |', 19, 
    'not learned'
  ), 
  (
    'y U L\' U\' L U\' l\' U l U2 | l\' U\' l |', 
    19, 'not learned'
  ), 
  (
    'y2 U L U2 L\' U | L U\' L\' |', 
    19, 'not learned'
  ), 
  (
    'U\' R U R\' U r U\' r\' U2 | r U r\' |', 
    20, 'not learned'
  ), 
  (
    'y U\' L\' U2 L U\' | L\' U L |', 
    20, 'not learned'
  ), 
  (
    'y2 U\' L U L\' U l U\' l\' U2 | l U l\' |', 
    20, 'not learned'
  ), 
  (
    'y\' U\' R\' U2 R U\' | R\' U R |', 
    20, 'not learned'
  ), 
  (
    'R U\' R\' U2 | R U R\' |', 21, 'not learned'
  ), 
  (
    'y F R U2 R\' F\'', 21, 'not learned'
  ), 
  (
    'y2 L U\' L\' U2 | L U L\' |', 21, 
    'not learned'
  ), 
  (
    'y\' r\' U r U2 | r\' U\' r |', 
    21, 'not learned'
  ), 
  (
    'F\' L\' U2 L F', 22, 'not learned'
  ), 
  (
    'y L\' U L U2 | L\' U\' L |', 22, 
    'not learned'
  ), 
  (
    'y2 l U\' l\' U2 | l U l\' |', 22, 
    'not learned'
  ), 
  (
    'y\' R\' U R U2 | R\' U\' R |', 
    22, 'not learned'
  ), 
  (
    'R U R\' U2 R U R\' U\' | R U R\' |', 
    23, 'not learned'
  ), 
  (
    'U2 R2 U2 R\' U\' R U\' R2', 23, 
    'not learned'
  ), 
  (
    'y F\' U\' L\' U L F | L\' U L |', 
    23, 'not learned'
  ), 
  (
    'y2 L U L\' U2 L U L\' U\' | L U L\' |', 
    23, 'not learned'
  ), 
  (
    'F U R U\' R\' F\' | R U\' R\' |', 
    24, 'not learned'
  ), 
  (
    'y L\' U\' L U2 L\' U\' L U | L\' U\' L |', 
    24, 'not learned'
  ), 
  (
    'y U2 L2 U2 L U L\' U L2', 24, 'not learned'
  ), 
  (
    'y\' R\' U\' R U2 R\' U\' R U | R\' U\' R |', 
    24, 'not learned'
  ), 
  (
    'R\' F\' R U R U\' R\' F', 25, 'not learned'
  ), 
  (
    'U\' F\' R U R\' U\' R\' F R', 25, 
    'not learned'
  ), 
  (
    'R U\' R\' U\' R U\' R\' U | R U R\' |', 
    25, 'not learned'
  ), 
  (
    'y U\' L\' U L y\' U | R U\' R\' |', 
    25, 'not learned'
  ), 
  (
    'y U\' L\' U L F\' L F L\'', 25, 
    'not learned'
  ), 
  (
    'y2 U\' M U L U\' M\' U L\'', 25, 
    'not learned'
  ), 
  (
    'y\' U\' R\' U M U\' R U M\'', 25, 
    'not learned'
  ), 
  (
    'U R U\' R\' y U\' | L\' U L |', 
    26, 'not learned'
  ), 
  (
    'U R U\' R\' F R\' F\' R', 26, 'not learned'
  ), 
  (
    'y L F L\' U\' L\' U L F\'', 26, 
    'not learned'
  ), 
  (
    'y U F L\' U\' L U L F\' L\'', 26, 
    'not learned'
  ), 
  (
    'y L\' U L U L\' U L U\' | L\' U\' L |', 
    26, 'not learned'
  ), 
  (
    'y\' U M U\' R\' U M\' U\' R', 26, 
    'not learned'
  ), 
  (
    'y2 U L U\' M U L\' U\' M\'', 26, 
    'not learned'
  ), 
  (
    'R U\' R\' U | R U\' R\'|', 27, 'not learned'
  ), 
  (
    'y L\' U\' L U2 | F U\' F\' |', 
    27, 'not learned'
  ), 
  (
    'y2 L U\' L\' U | L U\' L\'|', 27, 
    'not learned'
  ), 
  (
    'y\' R\' U\' R U y U | R U\' R\' |', 
    27, 'not learned'
  ), 
  (
    'R U R\' U2 | F\' U F |', 28, 'not learned'
  ), 
  (
    'y L\' U L U\' | L\' U L |', 28, 
    'not learned'
  ), 
  (
    'y2 L U L\' U\' y\' U\' | L\' U L |', 
    28, 'not learned'
  ), 
  (
    'y\' R\' U R U\' | R\' U R |', 28, 
    'not learned'
  ), 
  (
    'M\' U R U\' r\' U | R U\' R\' |', 
    29, 'not learned'
  ), 
  (
    'y L\' U\' L U | L\' U\' L |', 29, 
    'not learned'
  ), 
  (
    'y2 M U L U\' l\' U | L U\' L\' |', 
    29, 'not learned'
  ), 
  (
    'y\' R\' U\' R U | R\' U\' R |', 
    29, 'not learned'
  ), 
  (
    'R U R\' U\' | R U R\' |', 30, 'not learned'
  ), 
  (
    'y M\' U\' L\' U l U\' | L\' U L |', 
    30, 'not learned'
  ), 
  (
    'y\' M U\' R\' U r U\' | R\' U R\' |', 
    30, 'not learned'
  ), 
  (
    'y2 L U L\' U\' | L U L\' |', 30, 
    'not learned'
  ), 
  (
    'U\' R\' F R F\' | R U\' R\' |', 
    31, 'not learned'
  ), 
  (
    'R U\' R\' y\' | R\' U2 R |', 31, 
    'not learned'
  ), 
  (
    'y2 L U\' L\' y | R\' U2 R |', 31, 
    'not learned'
  ), 
  (
    'R U R\' U\' R U R\' U\' | R U R\' |', 
    32, 'not learned'
  ), 
  (
    'y L\' U\' L U L\' U\' L U | L\' U\' L |', 
    32, 'not learned'
  ), 
  (
    'y2 L U L\' U\' L U L\' U\' | L U L\' |', 
    32, 'not learned'
  ), 
  (
    'y\' R\' U\' R U R\' U\' R U | R\' U\' R |', 
    32, 'not learned'
  ), 
  (
    'U\' R U\' R\' U2 | R U\' R\' |', 
    33, 'not learned'
  ), 
  (
    'y R\' D R U\' R\' D\' R', 33, 'not learned'
  ), 
  (
    'y U\' L\' U\' L U2 | L\' U\' L |', 
    33, 'not learned'
  ), 
  (
    'y U L\' U2 L U\' | L\' U\' L |', 
    33, 'not learned'
  ), 
  (
    'y2 U\' L U\' L\' U2 | L U\' L\' |', 
    33, 'not learned'
  ), 
  (
    'y\' L\' D L U\' L\' D\' L', 33, 
    'not learned'
  ), 
  (
    'L D\' L\' U L D L\'', 34, 'not learned'
  ), 
  (
    'U R U R\' U2 | R U R\' |', 34, 'not learned'
  ), 
  (
    'U\' R U2 R\' U | R U R\' |', 34, 
    'not learned'
  ), 
  (
    'y U L\' U L U2 | L\' U L |', 34, 
    'not learned'
  ), 
  (
    'y2 R D\' R\' U R D R\'', 34, 'not learned'
  ), 
  (
    'y\' U R\' U R U2 | R\' U R |', 
    34, 'not learned'
  ), 
  (
    'U\' R U R\' U y\' | R\' U\' R |', 
    35, 'not learned'
  ), 
  (
    'U M\' U R U\' r\' | R U\' R\' |', 
    35, 'not learned'
  ), 
  (
    'U2 R U M\' U R\' U\' M', 35, 'not learned'
  ), 
  (
    'y L2 u\' L\' U\' L U u L U\' L', 
    35, 'not learned'
  ), 
  (
    'y2 U2 L U M U L\' U\' M\'', 35, 
    'not learned'
  ), 
  (
    'y\' R2 u\' R\' U\' R U u R U\' R', 
    35, 'not learned'
  ), 
  (
    'R2 u R U R\' U\' u\' R\' U R\'', 
    36, 'not learned'
  ), 
  (
    'y U L\' U\' L U\' y | L U L\' |', 
    36, 'not learned'
  ), 
  (
    'y U\' M\' U\' L\' U l | L\' U L |', 
    36, 'not learned'
  ), 
  (
    'y U2 L\' U\' M\' U\' L U M', 36, 
    'not learned'
  ), 
  (
    'y2 L2 u\' L\' U\' L U u L U\' L', 
    36, 'not learned'
  ), 
  (
    'y\' U2 R\' U\' M U\' R U M\'', 
    36, 'not learned'
  ), 
  (
    'R2\' U2\' F R2 F\' U2\' R\' U R\'', 
    37, 'not learned'
  ), 
  (
    'y L2 U2 F\' L2\' F U2 L U\' L', 
    37, 'not learned'
  ), 
  (
    'r U\' r\' R U R\' U r U\' r\' | R U R\' |', 
    37, 'not learned'
  ), 
  (
    'y2 l U\' l\' L U L\' U l U\' l\' | L U L\' |', 
    37, 'not learned'
  ), 
  (
    'R U R\' U\' R U2 R\' U\' | R U R\' |', 
    38, 'not learned'
  ), 
  (
    'y L\' U L U\' L\' U2 L U\' | L\' U L |', 
    38, 'not learned'
  ), 
  (
    'y2 L U L\' U\' L U2 L\' U\' | L U L\' |', 
    38, 'not learned'
  ), 
  (
    'y\' R\' U R U\' R\' U2 R U\' | R\' U R |', 
    38, 'not learned'
  ), 
  (
    'R U\' R\' U R U2 R\' U | R U\' R\' |', 
    39, 'not learned'
  ), 
  (
    'y L\' U\' L U L\' U2 L U | L\' U\' L |', 
    39, 'not learned'
  ), 
  (
    'y2 L U\' L\' U L U2 L\' U | L U\' L\' |', 
    39, 'not learned'
  ), 
  (
    'y\' R\' U\' R U R\' U2 R U | R\' U\' R |', 
    39, 'not learned'
  ), 
  (
    'r U\' r\' U2 r U r\' | R U R\' |', 
    40, 'not learned'
  ), 
  (
    'y L\' U L l U l U2 l\' U\' l', 
    40, 'not learned'
  ), 
  (
    'y2 l U\' l\' U2 l U l\' | L U L\' |', 
    40, 'not learned'
  ), 
  (
    'y\' R\' U R r U r U2 r\' U\' r', 
    40, 'not learned'
  ), 
  (
    'R U\' R\' r U\' r\' U2 r U r\'', 
    41, 'not learned'
  ), 
  (
    'y l\' U l U2 l\' U\' l | L\' U\' L |', 
    41, 'not learned'
  ), 
  (
    'y2 L U\' L\' l U\' l\' U2 l U l\'', 
    41, 'not learned'
  ), 
  (
    'y\' r\' U r U2 r\' U\' r | R\' U\' R |', 
    41, 'not learned'
  ), 
  (
    'R2 U R2\' U\' R2', 42, 'not learned'
  ), 
  (
    'U\' R\' U R2 U\' R\'', 42, 'not learned'
  ), 
  (
    'y U\' M F2 M\'', 42, 'not learned'
  ), 
  (
    'y U\' R U\' R\' U2 | L\' U L |', 
    42, 'not learned'
  ), 
  (
    'y2 U\' L\' U L2 U\' L\'', 42, 'not learned'
  ), 
  (
    'y2 L2 U L2\' U\' L2', 42, 'not learned'
  ), 
  (
    'y\' U\' L U\' L\' U2 | R\' U R |', 
    42, 'not learned'
  ), 
  ('U M F2 M\'', 43, 'not learned'), 
  (
    'U L\' U L U2 | R U\' R\' |', 43, 
    'not learned'
  ), 
  (
    'y U L U\' L2\' U R', 43, 'not learned'
  ), 
  (
    'y L2 U\' L2\' U L2', 43, 'not learned'
  ), 
  (
    'y2 U R\' U R U2 | L U\' L\' |', 
    43, 'not learned'
  ), 
  (
    'y\' U R U\' R2\' U R', 43, 'not learned'
  ), 
  (
    'y\' R2\' U\' R2 U R2\'', 43, 'not learned'
  ), 
  (
    'U2 R\' U R U\' S R S\'', 44, 'not learned'
  ), 
  (
    'y R\' F R2 U\' R\' U2 F\'', 44, 
    'not learned'
  ), 
  (
    'y2 U2 (L F\' L\' F) (L U L\')', 
    44, 'not learned'
  ), 
  (
    'L F\' L2\' U L U2\' F', 45, 'not learned'
  ), 
  (
    'y U2 (L U\' L\') U (S\' L\' S)', 
    45, 'not learned'
  ), 
  (
    'y\' U2 (R\' F R F\') (R\' U\' R)', 
    45, 'not learned'
  ), 
  (
    'U2 L2\' u L2 u\' L2\'', 46, 'not learned'
  ), 
  (
    'y U2 R2 u\' R2\' u R2', 46, 'not learned'
  ), 
  (
    'y2 U2 R2 u R2\' u\' R2', 46, 'not learned'
  ), 
  (
    'y\' U2 L2\' u\' L2 u L2\'', 46, 
    'not learned'
  ), 
  (
    'L F\' U F L\'', 47, 'not learned'
  ), 
  (
    'y R\' F U\' F\' R', 47, 'not learned'
  ), 
  (
    'y\' L\' u\' L U\' L\' u L', 47, 
    'not learned'
  ), 
  (
    'y2 R u R\' U R u\' R\'', 47, 'not learned'
  ), 
  (
    'R\' U\' R2 U R\'', 48, 'not learned'
  ), 
  (
    'y2 L\' U\' L2 U L\'', 48, 'not learned'
  ), 
  (
    'y L U L2\' U\' L', 49, 'not learned'
  ), 
  (
    'y\' R U R2\' U\' R', 49, 'not learned'
  ), 
  (
    'F D R D\' F\'', 50, 'not learned'
  ), 
  (
    'y R F U F\' R\'', 50, 'not learned'
  ), 
  (
    'y L u L u\' L\'', 50, 'not learned'
  ), 
  (
    'y2 F L U L\' F\'', 50, 'not learned'
  ), 
  (
    'y\' R u R u\' R\'', 50, 'not learned'
  ), 
  (
    'L\' F\' U\' F L', 51, 'not learned'
  ), 
  (
    'R\' u\' R\' u R', 51, 'not learned'
  ), 
  (
    'y F\' D\' L\' D F', 51, 'not learned'
  ), 
  (
    'y2 L\' u\' L\' u L', 51, 'not learned'
  ), 
  (
    'y\' F\' R\' U\' R F', 51, 'not learned'
  ), 
  (
    'U\' L\' U\' L | R U\' R\' |', 52, 
    'not learned'
  ), 
  (
    'y U2 L\' U\' L2 U L2\' U\' L', 
    52, 'not learned'
  ), 
  (
    'y2 U\' R\' U\' R | L U\' L\' |', 
    52, 'not learned'
  ), 
  (
    'y\' U2 R\' U\' R2 U R2\' U\' R', 
    52, 'not learned'
  ), 
  (
    'U2\' R U R2\' U\' R2 U R\'', 53, 
    'not learned'
  ), 
  (
    'y U R U R\' | L\' U L |', 53, 'not learned'
  ), 
  (
    'y2 U2\' L U L2\' U\' L2 U L\'', 
    53, 'not learned'
  ), 
  (
    'y\' U L U L\' | R\' U R |', 53, 
    'not learned'
  ), 
  (
    'F U2 F\' | R U R\' |', 54, 'not learned'
  ), 
  (
    'y L U2 L\' | F U F\' |', 54, 'not learned'
  ), 
  (
    'y2 U2 R\' U R U2 l U L\' U\' M\'', 
    54, 'not learned'
  ), 
  (
    'y\' R U2 R\' f R f\'', 54, 'not learned'
  ), 
  (
    'R\' U2 R | F\' U\' F |', 55, 'not learned'
  ), 
  (
    'y F\' U2 F | L\' U\' L |', 55, 'not learned'
  ), 
  (
    'y\' U2 L U\' L\' U2 r\' U\' R U M\'', 
    55, 'not learned'
  ), 
  (
    'y2 L\' U2 L f\' L\' f', 55, 'not learned'
  ), 
  (
    'U\' R U2 R\' U\' | L U L\' |', 
    56, 'not learned'
  ), 
  (
    'U R U R\' | L U L\' |', 56, 'not learned'
  ), 
  (
    'y U L\' U L | R\' U R |', 56, 'not learned'
  ), 
  (
    'y2 U\' L U2 L\' U\' | R U R\' |', 
    56, 'not learned'
  ), 
  (
    'y2 U L U L\' | R U R\' |', 56, 'not learned'
  ), 
  (
    'y\' U R\' U R | L\' U L |', 56, 
    'not learned'
  ), 
  (
    'U\' R U\' R\' | L U\' L\' |', 57, 
    'not learned'
  ), 
  (
    'y U\' L\' U\' L | R\' U\' R |', 
    57, 'not learned'
  ), 
  (
    'y U L\' U2 L U | R\' U\' R |', 
    57, 'not learned'
  ), 
  (
    'y2 U\' L U\' L\' | R U\' R\' |', 
    57, 'not learned'
  ), 
  (
    'y\' U\' R\' U\' R | L\' U\' L |', 
    57, 'not learned'
  ), 
  (
    'y\' U R\' U2 R U | L\' U\' L |', 
    57, 'not learned'
  ), 
  (
    'U2 F\' L U L\' F', 58, 'not learned'
  ), 
  (
    'y U2 L\' (B U B\') L', 58, 'not learned'
  ), 
  (
    'y2 f\' U L U\' f', 58, 'not learned'
  ), 
  (
    'U2\' R (B\' U\' B) R\'', 59, 'not learned'
  ), 
  (
    'y U2\' F R\' U\' R F\'', 59, 'not learned'
  ), 
  (
    'y2 U2\' L F\' U\' F L\'', 59, 'not learned'
  ), 
  (
    'U R U\' R\' | L\' U L |', 60, 'not learned'
  ), 
  (
    'U\' R U2 R\' U\' | L\' U\' L |', 
    60, 'not learned'
  ), 
  (
    'y2 U L U\' L\' | R\' U R |', 60, 
    'not learned'
  ), 
  (
    'y2 U L U2 L\' U\' | R\' U\' R |', 
    60, 'not learned'
  ), 
  (
    'y L\' U2 L U\' | L U L\' |', 61, 
    'not learned'
  ), 
  (
    'y U2 L\' U L U\' | L U2 L\' |', 
    61, 'not learned'
  ), 
  (
    'y\' R\' U2 R U\' | R U R\' |', 
    61, 'not learned'
  ), 
  (
    'y\' U2 R\' U R U\' | R U2 R\' |', 
    61, 'not learned'
  ), 
  (
    'U2 R U\' R\' U | L\' U\' L |', 
    62, 'not learned'
  ), 
  (
    'y2 U2 L U\' L\' U | R\' U\' R |', 
    62, 'not learned'
  ), 
  (
    'y U\' L\' U\' L2 U2 L\'', 63, 'not learned'
  ), 
  (
    'y\' U\' R\' U\' R2 U2 R\'', 63, 
    'not learned'
  ), 
  ('M F M\'', 64, 'not learned'), 
  (
    'R U R\' U\' | L\' U L |', 64, 'not learned'
  ), 
  (
    'y L\' U L U l U L\' U\' M\'', 64, 
    'not learned'
  ), 
  ('y2 M\' B M', 64, 'not learned'), 
  (
    'y2 L U L\' U\' | R\' U R |', 64, 
    'not learned'
  ), 
  (
    'y\' R\' U R U r U R\' U\' M', 64, 
    'not learned'
  ), 
  (
    'U\' R U R\' | F U F\' |', 65, 'not learned'
  ), 
  (
    'y U L\' U L U | L U L\' |', 65, 
    'not learned'
  ), 
  (
    'y2 U\' L U L\' y | R U R\' |', 
    65, 'not learned'
  ), 
  (
    'y\' U R\' U R U | R U R\' |', 65, 
    'not learned'
  ), 
  (
    'y U\' L\' U L | R U\' R\' |', 66, 
    'not learned'
  ), 
  (
    'y\' U\' R\' U R | L U\' L\' |', 
    66, 'not learned'
  ), 
  (
    'R U2 R\' U | R\' U\' R |', 67, 'not learned'
  ), 
  (
    'U2 R U\' R\' U | R\' U2 R |', 67, 
    'not learned'
  ), 
  (
    'y2 L U2 L\' U | L\' U\' L |', 67, 
    'not learned'
  ), 
  (
    'U2 L U\' L\' U | L\' U2 L |', 67, 
    'not learned'
  ), 
  (
    'y U2 L\' U L U\' | R U R\' |', 
    68, 'not learned'
  ), 
  (
    'y\' U2 R\' U R U\' | L U L\' |', 
    68, 'not learned'
  ), 
  (
    'U R U R2\' U2 R', 69, 'not learned'
  ), 
  (
    'y2 U L U L2\' U2 L', 69, 'not learned'
  ), 
  (
    'R U\' R\' f R\' f\'', 70, 'not learned'
  ), 
  ('y M F\' M\'', 70, 'not learned'), 
  (
    'y L\' U\' L U | R U\' R\' |', 70, 
    'not learned'
  ), 
  (
    'y2 L U\' L\' U\' l\' U\' L U M', 
    70, 'not learned'
  ), 
  ('y\' M\' B M', 70, 'not learned'), 
  (
    'y\' R\' U\' R U | L U\' L\' |', 
    70, 'not learned'
  ), 
  (
    'U\' R U\' R\' U\' | R\' U R |', 
    71, 'not learned'
  ), 
  (
    'y U L\' U\' L | F\' U\' F |', 71, 
    'not learned'
  ), 
  (
    'y2 U\' L U\' L\' U\' | L\' U L |', 
    71, 'not learned'
  ), 
  (
    'y\' U R\' U\' R y | R\' U\' R |', 
    71, 'not learned'
  ), 
  (
    'U\' F\' U F | L U2 L\' |', 72, 'not learned'
  ), 
  (
    'U\' F\' U\' F U\' | L U L\' |', 
    72, 'not learned'
  ), 
  (
    'y U\' L\' U L U\' | f R\' f\' |', 
    72, 'not learned'
  ), 
  (
    'y\' U\' R\' U R U\' | F U\' F\' |', 
    72, 'not learned'
  ), 
  (
    'U R U\' R\' U | f\' L f |', 73, 
    'not learned'
  ), 
  (
    'y U F U\' F\' | R\' U2 R |', 73, 
    'not learned'
  ), 
  (
    'y U F U F\' U | R\' U\' R |', 73, 
    'not learned'
  ), 
  (
    'y2 U L U\' L\' U | F\' U F |', 
    73, 'not learned'
  ), 
  (
    'R U\' R\' | L U2 L\' |', 74, 'not learned'
  ), 
  (
    'y L\' U\' L | f R\' f\' |', 74, 
    'not learned'
  ), 
  (
    'y2 L U\' L\' | R U2 R\' |', 74, 
    'not learned'
  ), 
  (
    'y\' R\' U\' R | F U\' F\' |', 74, 
    'not learned'
  ), 
  (
    'R U R\' | f\' L f |', 75, 'not learned'
  ), 
  (
    'y L\' U L | R\' U2 R |', 75, 'not learned'
  ), 
  (
    'y2 L U L\' | F\' U F |', 75, 'not learned'
  ), 
  (
    'y\' R\' U R | L\' U2 L |', 75, 'not learned'
  ), 
  (
    'R U R\' U | L U L\' |', 76, 'not learned'
  ), 
  (
    'y2 L U L\' U | R U R\' |', 76, 'not learned'
  ), 
  (
    'y L\' U\' L U\' | R\' U\' R |', 
    77, 'not learned'
  ), 
  (
    'y\' R\' U\' R U\' | L\' U\' L |', 
    77, 'not learned'
  ), 
  (
    'R2 U\' R2\' U R2', 78, 'not learned'
  ), 
  (
    'y2 L2\' U\' L2 U L2\'', 78, 'not learned'
  ), 
  (
    'y F\' R\' F2 R F', 78, 'not learned'
  ), 
  (
    'f\' R\' U R f', 79, 'not learned'
  ), 
  (
    'y R\' u\' R u R', 79, 'not learned'
  ), 
  (
    'y\' L\' u\' L u L', 79, 'not learned'
  ), 
  (
    'y2 f\' D\' L D f', 79, 'not learned'
  ), 
  (
    'y L2\' U L2 U\' L2\'', 80, 'not learned'
  ), 
  (
    'y\' R2 U R2\' U\' R2', 80, 'not learned'
  ), 
  (
    'F L F2\' L\' F\'', 80, 'not learned'
  ), 
  (
    'L u L\' u\' L\'', 81, 'not learned'
  ), 
  (
    'y f L U\' L\' f\'', 81, 'not learned'
  ), 
  (
    'y2 R u R\' u\' R\'', 81, 'not learned'
  ), 
  (
    'y\' f D R\' D\' f\'', 81, 'not learned'
  ), 
  (
    'L2\' u\' L2 u L2\'', 82, 'not learned'
  ), 
  (
    'y L2\' u L2 u\' L2\'', 82, 'not learned'
  ), 
  (
    'y2 R2 u\' R2\' u R2', 82, 'not learned'
  ), 
  (
    'y\' R2 u R2\' u\' R2', 82, 'not learned'
  ), 
  (
    'L\' u\' L U L\' u L', 83, 'not learned'
  ), 
  (
    'y L u L\' U\' L u\' L\'', 83, 'not learned'
  ), 
  (
    'y2 R\' u\' R U R\' u R', 83, 'not learned'
  ), 
  (
    'y\' R u R\' U\' R u\' R\'', 83, 
    'not learned'
  ), 
  (
    'R\' F R2 U\' R2\' F\' R', 84, 'not learned'
  ), 
  (
    'L F\' L2\' U\' L2 F L\'', 84, 'not learned'
  ), 
  (
    'y f\' L\' f U\' L\' U L', 84, 'not learned'
  ), 
  (
    'y2 f R f\' L U2 L\'', 84, 'not learned'
  ), 
  (
    'y\' R U R\' U\' f R\' f\'', 84, 
    'not learned'
  ), 
  (
    'f R f\' U R U\' R\'', 85, 'not learned'
  ), 
  (
    'y L F\' L2\' U L2 F L\'', 85, 'not learned'
  ), 
  (
    'y R\' F R2 U R2\' F\' R', 85, 'not learned'
  ), 
  (
    'y2 L\' U\' L U f\' L f', 85, 'not learned'
  ), 
  (
    'y\' f\' L\' f R\' U2\' R', 85, 'not learned'
  ), 
  (
    'R L U2 L\' R\'', 86, 'not learned'
  ), 
  (
    'y L\' R\' U2 R L', 86, 'not learned'
  ), 
  (
    'y2 L R U2 R\' L\'', 86, 'not learned'
  ), 
  (
    'y\' R\' L\' U2 L R', 86, 'not learned'
  ), 
  (
    'L F2\' L\' F U\' F', 87, 'not learned'
  ), 
  (
    'L F\' L\' U\' F U\' | R U R\' |', 
    87, 'not learned'
  ), 
  (
    'y L U\' F\' L\' F L\' U L', 87, 
    'not learned'
  ), 
  (
    'R\' U F R F\' | R U\' R\' |', 88, 
    'not learned'
  ), 
  (
    'y R\' F2 R F\' U F\'', 88, 'not learned'
  ), 
  (
    'y R\' F R U F\' U | L\' U\' L |', 
    88, 'not learned'
  ), 
  (
    'R\' F R U\' F\' | R U\' R\' |', 
    89, 'not learned'
  ), 
  (
    'y L F\' L\' U F | L\' U L |', 90, 
    'not learned'
  ), 
  (
    'L\' U L M\' U R U\' M U\' R\'', 
    91, 'not learned'
  ), 
  (
    'y2 R\' U R M U L U\' M\' U\' L\'', 
    91, 'not learned'
  ), 
  (
    'y R U\' R\' M\' U\' L\' U M U L', 
    92, 'not learned'
  ), 
  (
    'y\' L U\' L\' M U\' R\' U M\' U R', 
    92, 'not learned'
  ), 
  (
    'L F\' U2 F L', 93, 'not learned'
  ), 
  (
    'R U\' R\' L U2 L\'', 93, 'not learned'
  ), 
  (
    'y r\' U F2 U\' r', 93, 'not learned'
  ), 
  (
    'y2 L U\' L\' R U2\' R\'', 93, 'not learned'
  ), 
  (
    'y\' F R\' U2\' R F\'', 93, 'not learned'
  ), 
  (
    'U\' R U R\' U2 | R U\' R\' |', 
    5, 'learned'
  ), 
  (
    'y2 U\' L U L\' U\' | L U2 L\' |', 
    5, 'learned'
  ), 
  (
    'y U L\' U\' L U2 | L\' U\' L |', 
    6, 'learned'
  ), 
  (
    'y\' U R\' U\' R U | R\' U2 R |', 
    6, 'learned'
  ), 
  (
    'U M R U\' R\' U M\'', 3, 'not learned'
  ), 
  (
    'U\' M L\' U L U\' M\'', 4, 'not learned'
  ), 
  (
    'y\' U2 R\' U R U | R\' U\' R |', 
    9, 'not learned'
  ), 
  (
    'U R\' F R F\' U | R U R\' |', 15, 
    'not learned'
  ), 
  (
    'U\' L F\' L\' F U\' | L\' U\' L |', 
    16, 'learned'
  );
UNLOCK TABLES;
--
-- Table structure for table `f2lrubikcube`
--
DROP 
  TABLE IF EXISTS `f2lrubikcube`;
CREATE TABLE `f2lrubikcube` (
  `face` varchar(1000) NOT NULL, 
  `id` int(255) NOT NULL, 
  KEY `FK_f2l_f2lrubikcube` (`id`), 
  CONSTRAINT `FK_f2l_f2lrubikcube` FOREIGN KEY (`id`) REFERENCES `f2l` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
-- Dumping data for table `f2lrubikcube`
--
LOCK TABLES `f2lrubikcube` WRITE;
INSERT INTO `f2lrubikcube` 
VALUES 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 4 ], [ 0, 0, 4 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 1 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 5, 5, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    1
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 5, 5 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 4, 4 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 1, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    2
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 5, 2, 0 ], [ 0, 0, 4 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 1 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 5, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 4, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    3
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 4, 0 ], [ 0, 2, 0 ], [ 0, 0, 5 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 4 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 5, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 1, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    4
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 4, 0 ], [ 0, 2, 0 ], [ 0, 0, 4 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 1 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 5, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 5, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    5
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 5, 2, 0 ], [ 0, 0, 5 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 4 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 1, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 4, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    6
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 4, 2, 0 ], [ 0, 0, 4 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 1 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 5, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 5, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    7
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 5, 0 ], [ 0, 2, 0 ], [ 0, 0, 5 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 4 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 4, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 1, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    8
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 5, 0 ], [ 0, 2, 0 ], [ 0, 0, 4 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 1 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 4, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 5, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    9
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 4, 2, 0 ], [ 0, 0, 5 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 4 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 1, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 5, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    10
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 5 ], [ 0, 0, 4 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 1 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 5, 4, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    11
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 4, 5 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 5, 4 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 1, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    12
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 5, 4 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 4, 1 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 5, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    13
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 4 ], [ 0, 0, 5 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 4 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 1, 5, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    14
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 4, 4 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 5, 1 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 5, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    15
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 5 ], [ 0, 0, 5 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 4 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 1, 4, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    16
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 4 ], [ 0, 0, 1 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 5 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 4, 5, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    17
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 5, 1 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 4, 5 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 4, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    18
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 4, 0 ], [ 0, 2, 0 ], [ 0, 0, 1 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 5 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 5, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 4, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    19
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 5, 2, 0 ], [ 0, 0, 1 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 5 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 4, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 4, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    20
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 4, 2, 0 ], [ 0, 0, 1 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 5 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 4, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 5, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    21
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 5, 0 ], [ 0, 2, 0 ], [ 0, 0, 1 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 5 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 4, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 4, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    22
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 4, 1 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 5, 5 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 4, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    23
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 5 ], [ 0, 0, 1 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 5 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 4, 4, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    24
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 4 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 4, 4, 0 ], [ 4, 4, 4 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 0, 5, 0 ], [ 0, 5, 5 ], [ 5, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    25
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 5, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 4, 0 ], [ 4, 4, 0 ], [ 4, 4, 4 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 5, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    26
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 4 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 4, 4, 0 ], [ 4, 4, 1 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 0, 5, 0 ], [ 0, 5, 5 ], [ 4, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    27
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 5, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 4, 0 ], [ 4, 4, 0 ], [ 4, 4, 5 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 1, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    28
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 5, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 4, 0 ], [ 4, 4, 0 ], [ 4, 4, 1 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 4, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    29
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 4 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 4, 4, 0 ], [ 4, 4, 5 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 0, 5, 0 ], [ 0, 5, 5 ], [ 1, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    30
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 1 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 5 ], [ 4, 4, 5 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 4, 0, 0 ], [ 4, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    31
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 1 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 5 ], [ 4, 4, 4 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 4, 0, 0 ], [ 5, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    32
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 4 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 1 ], [ 4, 4, 4 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 5, 0, 0 ], [ 5, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    33
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 5 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 4 ], [ 4, 4, 4 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 1, 0, 0 ], [ 5, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    34
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 4 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 1 ], [ 4, 4, 5 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 5, 0, 0 ], [ 4, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    35
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 5 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 4 ], [ 4, 4, 5 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 1, 0, 0 ], [ 4, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    36
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 4, 4, 5 ], [ 4, 4, 4 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 4, 5, 5 ], [ 5, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    37
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 4, 4, 4 ], [ 4, 4, 1 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 5, 5, 5 ], [ 4, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    38
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 4, 4, 4 ], [ 4, 4, 5 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 5, 5, 5 ], [ 1, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    39
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 4, 4, 5 ], [ 4, 4, 1 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 4, 5, 5 ], [ 4, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    40
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 4, 4, 5 ], [ 4, 4, 5 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 4, 5, 5 ], [ 1, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    41
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 1 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 5 ], [ 0, 4, 0 ], [ 0, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 4, 3, 3 ], [ 0, 3, 3 ] ],\r\n      \"r\": [ [ 4, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 0 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 0 ], [ 6, 6, 0 ] ]\r\n    }', 
    42
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 1 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 5 ], [ 4, 4, 0 ], [ 0, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 0, 3, 3 ], [ 0, 3, 3 ] ],\r\n      \"r\": [ [ 4, 0, 0 ], [ 0, 5, 0 ], [ 0, 5, 0 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 5 ], [ 6, 6, 0 ] ]\r\n    }', 
    43
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 1 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 5 ], [ 0, 4, 0 ], [ 0, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 5, 3, 3 ], [ 0, 3, 3 ] ],\r\n      \"r\": [ [ 4, 0, 0 ], [ 0, 5, 4 ], [ 0, 5, 0 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 0 ], [ 6, 6, 0 ] ]\r\n    }', 
    44
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 1 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 5 ], [ 5, 4, 0 ], [ 0, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 0, 3, 3 ], [ 0, 3, 3 ] ],\r\n      \"r\": [ [ 4, 0, 0 ], [ 0, 5, 0 ], [ 0, 5, 0 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 4 ], [ 6, 6, 0 ] ]\r\n    }', 
    45
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 1 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 5 ], [ 3, 3, 4 ], [ 3, 3, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ],\r\n      \"r\": [ [ 4, 0, 0 ], [ 5, 6, 6 ], [ 0, 6, 6 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ]\r\n    }', 
    46
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 1 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 5 ], [ 3, 3, 5 ], [ 3, 3, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ],\r\n      \"r\": [ [ 4, 0, 0 ], [ 4, 6, 6 ], [ 0, 6, 6 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ]\r\n    }', 
    47
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 5 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 4 ], [ 0, 4, 0 ], [ 0, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 4, 3, 3 ], [ 0, 3, 3 ] ],\r\n      \"r\": [ [ 1, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 0 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 0 ], [ 6, 6, 0 ] ]\r\n    }', 
    48
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 4 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 1 ], [ 4, 4, 0 ], [ 0, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 0, 3, 3 ], [ 0, 3, 3 ] ],\r\n      \"r\": [ [ 5, 0, 0 ], [ 0, 5, 0 ], [ 0, 5, 0 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 5 ], [ 6, 6, 0 ] ]\r\n    }', 
    49
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 5 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 4 ], [ 0, 4, 0 ], [ 0, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 5, 3, 3 ], [ 0, 3, 3 ] ],\r\n      \"r\": [ [ 1, 0, 0 ], [ 0, 5, 4 ], [ 0, 5, 0 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 0 ], [ 6, 6, 0 ] ]\r\n    }', 
    50
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 4 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 1 ], [ 5, 4, 0 ], [ 0, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 0, 3, 3 ], [ 0, 3, 3 ] ],\r\n      \"r\": [ [ 5, 0, 0 ], [ 0, 5, 0 ], [ 0, 5, 0 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 4 ], [ 6, 6, 0 ] ]\r\n    }', 
    51
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 5 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 4 ], [ 4, 4, 0 ], [ 0, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 0, 3, 3 ], [ 0, 3, 3 ] ],\r\n      \"r\": [ [ 1, 0, 0 ], [ 0, 5, 0 ], [ 0, 5, 0 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 5 ], [ 6, 6, 0 ] ]\r\n    }', 
    52
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 4 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 1 ], [ 0, 4, 0 ], [ 0, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 4, 3, 3 ], [ 0, 3, 3 ] ],\r\n      \"r\": [ [ 5, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 0 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 0 ], [ 6, 6, 0 ] ]\r\n    }', 
    53
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 5 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 4 ], [ 5, 4, 0 ], [ 0, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 0, 3, 3 ], [ 0, 3, 3 ] ],\r\n      \"r\": [ [ 1, 0, 0 ], [ 0, 5, 0 ], [ 0, 5, 0 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 4 ], [ 6, 6, 0 ] ]\r\n    }', 
    54
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 4 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 1 ], [ 0, 4, 0 ], [ 0, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 5, 3, 3 ], [ 0, 3, 3 ] ],\r\n      \"r\": [ [ 5, 0, 0 ], [ 0, 5, 4 ], [ 0, 5, 0 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 0 ], [ 6, 6, 0 ] ]\r\n    }', 
    55
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 5 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 4 ], [ 3, 3, 4 ], [ 3, 3, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ],\r\n      \"r\": [ [ 1, 0, 0 ], [ 5, 6, 6 ], [ 0, 6, 6 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ]\r\n    }', 
    56
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 4 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 1 ], [ 3, 3, 4 ], [ 3, 3, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ],\r\n      \"r\": [ [ 5, 0, 0 ], [ 5, 6, 6 ], [ 0, 6, 6 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ]\r\n    }', 
    57
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 5 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 4 ], [ 3, 3, 5 ], [ 3, 3, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ],\r\n      \"r\": [ [ 1, 0, 0 ], [ 4, 6, 6 ], [ 0, 6, 6 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ]\r\n    }', 
    58
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 4 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 1 ], [ 3, 3, 5 ], [ 3, 3, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ],\r\n      \"r\": [ [ 5, 0, 0 ], [ 4, 6, 6 ], [ 0, 6, 6 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ]\r\n    }', 
    59
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 5, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 4, 0 ], [ 0, 5, 0 ], [ 0, 5, 4 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 6, 6, 0 ], [ 6, 6, 0 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 0, 3, 3 ], [ 5, 3, 3 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 0, 4, 0 ], [ 0, 4, 0 ] ]\r\n    }', 
    60
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 4, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 5, 0 ], [ 0, 5, 0 ], [ 0, 5, 4 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 6, 6, 0 ], [ 6, 6, 0 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 0, 3, 3 ], [ 5, 3, 3 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 0, 4, 0 ], [ 0, 4, 0 ] ]\r\n    }', 
    61
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 5, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 4, 0 ], [ 0, 5, 0 ], [ 0, 5, 1 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 6, 6, 0 ], [ 6, 6, 0 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 0, 3, 3 ], [ 4, 3, 3 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 0, 4, 0 ], [ 0, 4, 0 ] ]\r\n    }', 
    62
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 4, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 5, 0 ], [ 0, 5, 0 ], [ 0, 5, 1 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 6, 6, 0 ], [ 6, 6, 0 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 0, 3, 3 ], [ 4, 3, 3 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 0, 4, 0 ], [ 0, 4, 0 ] ]\r\n    }', 
    63
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 5, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 4, 0 ], [ 0, 5, 0 ], [ 0, 5, 5 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 6, 6, 0 ], [ 6, 6, 0 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 0, 3, 3 ], [ 1, 3, 3 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 0, 4, 0 ], [ 0, 4, 0 ] ]\r\n    }', 
    64
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 4, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 5, 0 ], [ 0, 5, 0 ], [ 0, 5, 5 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 6, 6, 0 ], [ 6, 6, 0 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 0, 3, 3 ], [ 1, 3, 3 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 0, 4, 0 ], [ 0, 4, 0 ] ]\r\n    }', 
    65
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 4 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 6, 6, 0 ], [ 6, 6, 4 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ],\r\n      \"r\": [ [ 0, 5, 0 ], [ 0, 4, 0 ], [ 5, 4, 0 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ]\r\n    }', 
    66
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 5 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 6, 6, 0 ], [ 6, 6, 4 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ],\r\n      \"r\": [ [ 0, 4, 0 ], [ 0, 4, 0 ], [ 5, 4, 0 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ]\r\n    }', 
    67
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 4 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 6, 6, 0 ], [ 6, 6, 5 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ],\r\n      \"r\": [ [ 0, 5, 0 ], [ 0, 4, 0 ], [ 1, 4, 0 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ]\r\n    }', 
    68
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 5 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 6, 6, 0 ], [ 6, 6, 5 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ],\r\n      \"r\": [ [ 0, 4, 0 ], [ 0, 4, 0 ], [ 1, 4, 0 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ]\r\n    }', 
    69
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 4 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 6, 6, 0 ], [ 6, 6, 1 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ],\r\n      \"r\": [ [ 0, 5, 0 ], [ 0, 4, 0 ], [ 4, 4, 0 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ]\r\n    }', 
    70
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 5 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 6, 6, 0 ], [ 6, 6, 1 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ],\r\n      \"r\": [ [ 0, 4, 0 ], [ 0, 4, 0 ], [ 4, 4, 0 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ]\r\n    }', 
    71
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 4 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 3, 3, 0 ], [ 3, 3, 4 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ],\r\n      \"r\": [ [ 0, 5, 0 ], [ 0, 6, 6 ], [ 5, 6, 6 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ]\r\n    }', 
    72
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 5, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 4, 0 ], [ 3, 3, 0 ], [ 3, 3, 4 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 0, 6, 6 ], [ 5, 6, 6 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ]\r\n    }', 
    73
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 4 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 3, 3, 0 ], [ 3, 3, 1 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ],\r\n      \"r\": [ [ 0, 5, 0 ], [ 0, 6, 6 ], [ 4, 6, 6 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ]\r\n    }', 
    74
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 5, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 4, 0 ], [ 3, 3, 0 ], [ 3, 3, 5 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 0, 6, 6 ], [ 1, 6, 6 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ]\r\n    }', 
    75
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 4 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 3, 3, 0 ], [ 3, 3, 5 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ],\r\n      \"r\": [ [ 0, 5, 0 ], [ 0, 6, 6 ], [ 1, 6, 6 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ]\r\n    }', 
    76
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 5, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 4, 0 ], [ 3, 3, 0 ], [ 3, 3, 1 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 0, 6, 6 ], [ 4, 6, 6 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ]\r\n    }', 
    77
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 4, 4, 0 ], [ 4, 4, 4 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 4, 3, 3 ], [ 0, 3, 3 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 5, 5, 0 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    78
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 4, 4, 0 ], [ 4, 4, 4 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 5, 3, 3 ], [ 0, 3, 3 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 0, 5, 4 ], [ 5, 5, 0 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    79
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 4, 4, 0 ], [ 0, 4, 4 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 5, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 5 ], [ 6, 6, 0 ] ]\r\n    }', 
    80
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 5, 4, 0 ], [ 0, 4, 4 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 5, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 4 ], [ 6, 6, 0 ] ]\r\n    }', 
    81
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 5, 6, 6 ], [ 0, 6, 6 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 5, 5, 5 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 4, 4, 0 ], [ 4, 4, 4 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 3, 3, 4 ], [ 3, 3, 0 ] ]\r\n    }', 
    82
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 4, 6, 6 ], [ 0, 6, 6 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 5, 5, 5 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 4, 4, 0 ], [ 4, 4, 4 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 3, 3, 5 ], [ 3, 3, 0 ] ]\r\n    }', 
    83
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 5, 4, 0 ], [ 5, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 4 ], [ 6, 6, 4 ] ]\r\n    }', 
    84
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 5, 3, 3 ], [ 5, 3, 3 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 0, 5, 4 ], [ 0, 5, 4 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    85
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 3, 3, 4 ], [ 3, 3, 4 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 5, 6, 6 ], [ 5, 6, 6 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ]\r\n    }', 
    86
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 0, 4, 5 ], [ 1, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 4, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 0 ], [ 6, 6, 5 ] ]\r\n    }', 
    87
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 4, 4, 5 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 0, 3, 3 ], [ 4, 3, 3 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 4, 5, 0 ], [ 0, 5, 1 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    88
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 0, 4, 5 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 4, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 0 ], [ 6, 6, 1 ] ]\r\n    }', 
    89
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 4, 4, 5 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 0, 3, 3 ], [ 1, 3, 3 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 4, 5, 0 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    90
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 0, 4, 5 ], [ 5, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 4, 5, 5 ], [ 0, 5, 5 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 0 ], [ 6, 6, 4 ] ]\r\n    }', 
    91
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 4, 4, 5 ], [ 4, 4, 0 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 0, 3, 3 ], [ 5, 3, 3 ] ],\r\n      \"r\": [ [ 0, 0, 0 ], [ 4, 5, 0 ], [ 0, 5, 4 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]\r\n    }', 
    92
  ), 
  (
    '{ \r\n      \"u\": [ [ 0, 0, 0 ], [ 0, 2, 4 ], [ 0, 0, 0 ] ],\r\n      \"d\": [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],\r\n      \"f\": [ [ 0, 0, 0 ], [ 3, 3, 0 ], [ 3, 3, 1 ] ], \r\n      \"b\": [ [ 0, 0, 0 ], [ 4, 4, 0 ], [ 4, 4, 0 ] ],\r\n      \"r\": [ [ 0, 5, 0 ], [ 0, 6, 6 ], [ 4, 6, 6 ] ], \r\n      \"l\": [ [ 0, 0, 0 ], [ 0, 5, 5 ], [ 0, 5, 5 ] ]\r\n    }', 
    93
  );
UNLOCK TABLES;

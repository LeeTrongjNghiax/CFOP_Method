CREATE DATABASE RubikCube

USE RubikCube

--CREATE TABLE

CREATE TABLE Users (
	id VARCHAR(255) NOT NULL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	userName VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL
)

CREATE TABLE Algorithms (
	id VARCHAR(255) NOT NULL PRIMARY KEY,
	algorithm VARCHAR(255) NOT NULL,
	rubikCubeId VARCHAR(255) NOT NULL,
	FOREIGN KEY (rubikCubeId) REFERENCES RubikCubes(id)
)

CREATE TABLE AlgorithmRecords (
	userId VARCHAR(255) NOT NULL,
	algorithmId VARCHAR(255) NOT NULL,
	timeCreate DATETIME NOT NULL,
	record time NOT NULL,
	FOREIGN KEY (userId) REFERENCES Users(id),
	FOREIGN KEY (algorithmId) REFERENCES Algorithms(id)
)

CREATE TABLE AlgorithmStatuses (
	userId VARCHAR(255) NOT NULL,
	algorithmId VARCHAR(255) NOT NULL,
	algorithmStatus INT NOT NULL,
	FOREIGN KEY (userId) REFERENCES Users(id),
	FOREIGN KEY (algorithmId) REFERENCES Algorithms(id)
)

CREATE TABLE RubikCubes (
	id VARCHAR(255) NOT NULL PRIMARY KEY,
	faces VARCHAR(255) NOT NULL
)

CREATE TABLE Categories (
	id VARCHAR(255) NOT NULL PRIMARY KEY,
	name VARCHAR(255) NOT NULL
)

CREATE TABLE AlgorithmCategories (
	algorithmId VARCHAR(255) NOT NULL,
	categoryId VARCHAR(255) NOT NULL,
	FOREIGN KEY (algorithmId) REFERENCES Algorithms(id),
	FOREIGN KEY (categoryId) REFERENCES Categories(id)
)
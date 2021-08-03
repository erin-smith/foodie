DROP DATABASE if exists chefs_db;
CREATE DATABASE chefs_db;
USE chefs_db;

CREATE TABLE chefs (
	id int NOT NULL AUTO_INCREMENT,
    name varchar(30) NOT NULL,
    awards varchar(60) NOT NULL,
    restaurants varchar(255) NOT NULL,
    city varchar (60) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE locals (
  id int  NOT NULL AUTO_INCREMENT,
  name varchar(125) NOT NULL,
  awards varchar(125),
  restaurants varchar(255) NOT NULL,
  city varchar (60) NOT NULL,
  PRIMARY KEY(id)
);
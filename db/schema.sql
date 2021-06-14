DROP DATABASE if exists chefs_db;
CREATE DATABASE chefs_db;
USE chefs_db;

CREATE TABLE chefs (
	id int AUTO_INCREMENT,
    name varchar(30) NOT NULL,
    awards varchar(60) NOT NULL,
    restaurants varchar(255) NOT NULL,
    city varchar (60) NOT NULL,
    PRIMARY KEY(id)
);

DROP DATABASE if exists locals_db;
CREATE DATABASE locals_db;
USE locals_db;

CREATE TABLE local (
  id int AUTO_INCREMENT,
  name varchar(125) NOT NULL,
  awards varchar(125),
  restaurants varchar(255) NOT NULL,
  city varchar (60) NOT NULL,
  PRIMARY KEY(id)
);
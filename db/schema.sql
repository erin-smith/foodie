DROP DATABASE if exists swno5f1qusdd18q5;
CREATE DATABASE swno5f1qusdd18q5;
USE swno5f1qusdd18q5;

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


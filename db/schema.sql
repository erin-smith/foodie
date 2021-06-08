DROP DATABASE if exists chefs_db;
CREATE DATABASE chefs_db;
USE chefs_bd;

CREATE TABLE chefs (
	id int AUTO_INCREMENT,
    name varchar(30) NOT NULL,
    awards varchar(60) NOT NULL,
    restaurants varchar(255) NOT NULL,
    city varchar (60) NOT NULL,
    PRIMARY KEY(id)
);
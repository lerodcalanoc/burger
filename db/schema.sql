DROP DATABASE IF EXISTS pyoqxv36c4xr5gam;

CREATE DATABASE pyoqxv36c4xr5gam;
USE pyoqxv36c4xr5gam;

CREATE TABLE `burgers` (
id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN,
  PRIMARY KEY (id)

);
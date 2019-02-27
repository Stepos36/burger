-- DROP DATABASE IF EXISTS burgers_db;
-- CREATE DATABASE burgers_db;
-- USE burgers_db;
-- CREATE TABLE burgers 
-- (
--     id INT NOT NULL AUTO_INCREMENT,
--     burger_name VARCHAR(255) NOT NULL,
--     devoured boolean,
--     primary key(id)
-- )

USE kbh17bus2i46y9vc;
CREATE TABLE burgers 
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured boolean,
    primary key(id)
);
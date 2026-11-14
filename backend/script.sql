CREATE DATABASE IF NOT EXISTS cadastro_db;
USE cadastro_db;

CREATE TABLE users(
    id_user INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE
);

/*
INSERT INTO users (nome, email) VALUES (Teste, teste@email.com);

SELECT * FROM users

DELETE FROM users WHERE id > 2;

DROP TABLE users;
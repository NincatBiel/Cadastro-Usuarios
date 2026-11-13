CREATE DATABASE IF NOT EXISTS db_cadastroUsuarios;
USE db_cadastroUsuarios;

CREATE TABLE usuario(
    id_usuario INT PRIMARY KEY AUTO INCREMENT,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE
);

/*
INSERT INTO usuario (nome, email) VALUES (Teste, teste@email.com);

SELECT * FROM usuario

DELETE FROM usuario WHERE id > 2;

DROP TABLE usuario;
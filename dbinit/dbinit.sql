CREATE DATABASE IF NOT EXISTS geincos;

USE geincos;

DROP TABLE IF EXISTS gestion;

CREATE TABLE gestion (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  observacion VARCHAR(255) DEFAULT NULL,
);

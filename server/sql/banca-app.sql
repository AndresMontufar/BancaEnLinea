create database banca;
use banca;
CREATE TABLE `banca`.`usuario` (
  `carnet` INT NOT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `apellido` VARCHAR(100) NOT NULL,
  `dpi` BIGINT(20) NOT NULL,
  `correo` VARCHAR(100) NOT NULL,
  `contrasena` VARCHAR(100) NOT NULL,
  `fecha_nac` DATETIME NOT NULL,
  PRIMARY KEY (`carnet`),
  UNIQUE INDEX `correo_UNIQUE` (`correo` ASC),
  UNIQUE INDEX `dpi_UNIQUE` (`dpi` ASC));
  
  CREATE TABLE `banca`.`tipo_cuenta` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `banca`.`estado_cuenta` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
  
  CREATE TABLE `banca`.`cuenta` (
  `no_cuenta` BIGINT(20) NOT NULL,
  `tipo_id` INT NOT NULL,
  `usuario_carnet` INT NOT NULL,
  `saldo` DECIMAL(14,6) NOT NULL,
  `estado` INT NOT NULL,
  PRIMARY KEY (`no_cuenta`),
  INDEX `fk_tipo_tipo_cuenta_idx` (`tipo_id` ASC),
  INDEX `fk_usuario_usuario_id_idx` (`usuario_carnet` ASC),
  INDEX `fk_estado_cuenta_estado_idx` (`estado` ASC),
  CONSTRAINT `fk_tipo_tipo_cuenta`
    FOREIGN KEY (`tipo_id`)
    REFERENCES `banca`.`tipo_cuenta` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_usuario_id`
    FOREIGN KEY (`usuario_carnet`)
    REFERENCES `banca`.`usuario` (`carnet`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_estado_cuenta_estado`
    FOREIGN KEY (`estado`)
    REFERENCES `banca`.`estado_cuenta` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

ALTER TABLE `banca`.`usuario` 
ADD COLUMN `habilitado` TINYINT(1) NOT NULL AFTER `fecha_nac`;


INSERT INTO `banca`.`estado_cuenta` (`nombre`) VALUES ('Habilitada');
INSERT INTO `banca`.`estado_cuenta` (`nombre`) VALUES ('Congelada');
INSERT INTO `banca`.`estado_cuenta` (`nombre`) VALUES ('Cancelada');

INSERT INTO `banca`.`tipo_cuenta` (`nombre`) VALUES ('monetaria');
INSERT INTO `banca`.`tipo_cuenta` (`nombre`) VALUES ('ahorro');

-- TABLAS PARA EL SIGUIENTE SPRINT

create table curso (
codigo_curso INTEGER PRIMARY KEY,
nombre_curso VARCHAR(100)
);

create table tipo_pago (
id_tipo_pago INTEGER PRIMARY KEY AUTO_INCREMENT,
nombre_pago VARCHAR(40)
);

INSERT INTO tipo_pago (nombre_proceso) VALUES ('Retrasada');
INSERT INTO tipo_pago (nombre_proceso) VALUES ('Inscripcion');
INSERT INTO tipo_pago (nombre_proceso) VALUES ('Suficiencia');


create table historial_pagos (
no_cuenta INTEGER,
proceso INTEGER,
monto FLOAT,
curso INTEGER NULL,
descripcion VARCHAR(200),
fecha DATETIME,
FOREIGN KEY (proceso) REFERENCES tipo_pago (id_tipo_pago),
FOREIGN KEY (curso) REFERENCES curso (codigo_curso),
FOREIGN KEY (no_cuenta) REFERENCES cuenta (no_cuenta)
);

create table historial_transacciones (
no_cuenta INTEGER,
fecha DATETIME,
monto FLOAT,
descripcion VARCHAR(200)
);

create table estado_solicitud (
id_estado INT PRIMARY KEY AUTO_INCREMENT,
nombre_estado VARCHAR(40)
);

INSERT INTO estado_solicitud (nombre_estado) VALUES ('Pendiente');
INSERT INTO estado_solicitud (nombre_estado) VALUES ('Habilitado');
INSERT INTO estado_solicitud (nombre_estado) VALUES ('Deshabilitado');

create table cuentas_externas (
cuenta_propietario BIGINT,
cuenta_externa BIGINT,
fecha DATETIME,
estado INTEGER,
FOREIGN KEY (cuenta_propietario) REFERENCES cuenta(no_cuenta),
FOREIGN KEY (estado) REFERENCES estado_solicitud (id_estado)
);




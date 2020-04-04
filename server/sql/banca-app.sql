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

INSERT INTO tipo_pago (nombre_pago) VALUES ('Retrasada');
INSERT INTO tipo_pago (nombre_pago) VALUES ('Inscripcion');
INSERT INTO tipo_pago (nombre_pago) VALUES ('Suficiencia');

CREATE TABLE `banca`.`historial_pagos` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `no_cuenta` BIGINT(20) NOT NULL,
  `tipo_id` INT NOT NULL,
  `monto` FLOAT NOT NULL,
  `curso` INT NULL,
  `descripcion` VARCHAR(200) NOT NULL,
  `fecha` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_curso_historial_idx` (`curso` ASC),
  INDEX `fk_cuenta_historial_idx` (`no_cuenta` ASC),
  INDEX `fk_tipo_historial_idx` (`tipo_id` ASC),
  CONSTRAINT `fk_curso_historial`
    FOREIGN KEY (`curso`)
    REFERENCES `banca`.`curso` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cuenta_historial`
    FOREIGN KEY (`no_cuenta`)
    REFERENCES `banca`.`cuenta` (`no_cuenta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tipo_historial`
    FOREIGN KEY (`tipo_id`)
    REFERENCES `banca`.`tipo_pago` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `banca`.`historial_transacciones` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `no_cuenta` BIGINT(20) NULL,
  `fecha` DATETIME NULL,
  `monto` FLOAT NULL,
  `descripcion` VARCHAR(200) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cuenta_transaccion_idx` (`no_cuenta` ASC),
  CONSTRAINT `fk_cuenta_transaccion`
    FOREIGN KEY (`no_cuenta`)
    REFERENCES `banca`.`cuenta` (`no_cuenta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
ALTER TABLE `banca`.`cuenta` 
ADD COLUMN `externa` TINYINT(1) NULL AFTER `estado`;


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
 --  Para tener referencia de cuando se asignaron los cursos
CREATE TABLE `fecha_asignacion` (
  `idfecha_asignacion` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL,
  PRIMARY KEY (`idfecha_asignacion`)
) 

INSERT INTO `banca`.`fecha_asignacion` (`descripcion`, `fecha_inicio`, `fecha_fin`) VALUES ('Primer Semestre 2020', '2020-01-20', '2020-05-31');
INSERT INTO `banca`.`fecha_asignacion` (`descripcion`, `fecha_inicio`, `fecha_fin`) VALUES ('Escuela de Vacaciones Primer Semestre 2020', '2020-06-01', '2020-06-30');
INSERT INTO `banca`.`fecha_asignacion` (`descripcion`, `fecha_inicio`, `fecha_fin`) VALUES ('Segundo Semestre 2020', '2020-07-17', '2020-11-30');
INSERT INTO `banca`.`fecha_asignacion` (`descripcion`, `fecha_inicio`, `fecha_fin`) VALUES ('Escuela de Vacaiones Segundo Semestre 2020', '2020-12-1', '2020-12-31');

INSERT INTO `banca`.`fecha_asignacion` (`descripcion`, `fecha_inicio`, `fecha_fin`) VALUES ('Primera Retrasada Primer Semestre 2020', '2020-05-15', '2020-05-31');
INSERT INTO `banca`.`fecha_asignacion` (`descripcion`, `fecha_inicio`, `fecha_fin`) VALUES ('Segunda Retrasada Primer Semestre 2020', '2020-07-1', '2020-07-16');
INSERT INTO `banca`.`fecha_asignacion` (`descripcion`, `fecha_inicio`, `fecha_fin`) VALUES ('Primera Retrasada Segundo Semestre 2020', '2020-11-15', '2020-11-30');
INSERT INTO `banca`.`fecha_asignacion` (`descripcion`, `fecha_inicio`, `fecha_fin`) VALUES ('Segunda Retrasada Segundo Semestre 2020', '2021-01-01', '2021-01-15');

-- Tabla para el manejo de cursos por semestre y su seccion.
CREATE TABLE `banca`.`cursos_semestre` (
  `idcursos_semestre` INT NOT NULL AUTO_INCREMENT,
  `curso` INT NULL,
  `semestre` INT NULL,
  `seccion` VARCHAR(20) NULL,
  PRIMARY KEY (`idcursos_semestre`),
  INDEX `curso_idx` (`curso` ASC),
  INDEX `semestre_idx` (`semestre` ASC),
  CONSTRAINT `curso`
    FOREIGN KEY (`curso`)
    REFERENCES `banca`.`curso` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `semestre`
    FOREIGN KEY (`semestre`)
    REFERENCES `banca`.`fecha_asignacion` (`idfecha_asignacion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
ALTER TABLE `banca`.`cursos_semestre` 
DROP COLUMN `hora_fin`,
CHANGE COLUMN `hora_inicio` `precio` INT NULL DEFAULT NULL ;

-- Tabla que maneja la asignacion, con los cursos registrados en curso semestres
-- Este iria cambiando conforme los semestres
CREATE TABLE `banca`.`asignacion` (
  `idasignacion` INT NOT NULL AUTO_INCREMENT,
  `usuario` INT NULL,
  `curso_semestre` INT NULL,
  `fecha` DATE NULL,
  PRIMARY KEY (`idasignacion`),
  INDEX `curso_asignacion_idx` (`curso_semestre` ASC),
  INDEX `curso_usuario_idx` (`usuario` ASC),
  CONSTRAINT `curso_asignacion`
    FOREIGN KEY (`curso_semestre`)
    REFERENCES `banca`.`cursos_semestre` (`idcursos_semestre`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `curso_usuario`
    FOREIGN KEY (`usuario`)
    REFERENCES `banca`.`usuario` (`carnet`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);



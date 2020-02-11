create database banca;
use banca;
CREATE TABLE `banca`.`usuario` (
  `carnet` INT NOT NULL PRIMARY KEY,
  `nombre` VARCHAR(100) NOT NULL,
  `apellido` VARCHAR(100) NOT NULL,
  `dpi` BIGINT(20) NOT NULL,
  `correo` VARCHAR(100) NOT NULL,
  `contrasena` VARCHAR(100) NOT NULL,
  `fecha_nac` DATETIME NOT NULL,
  PRIMARY KEY (`carnet`),
  UNIQUE INDEX `correo_UNIQUE` (`correo` ASC) VISIBLE,
  UNIQUE INDEX `dpi_UNIQUE` (`dpi` ASC) VISIBLE);
  
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
  INDEX `fk_tipo_tipo_cuenta_idx` (`tipo_id` ASC) VISIBLE,
  INDEX `fk_usuario_usuario_id_idx` (`usuario_carnet` ASC) VISIBLE,
  INDEX `fk_estado_cuenta_estado_idx` (`estado` ASC) VISIBLE,
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

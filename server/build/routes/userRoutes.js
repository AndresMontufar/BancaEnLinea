"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
class userRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/create-user', userController_1.UserController.create_user); // Crear usuario y Crear Cuenta
        this.router.get('/create-user', userController_1.UserController.list); // Lista de usuarios creados
        this.router.put('/disabled_account/:carnet', userController_1.UserController.disabled_account); // Deshabilitar cuenta
        this.router.put('/activate_account/:carnet', userController_1.UserController.activate_account); // Habilitar cuenta
        this.router.put('/update-account/:carnet', userController_1.UserController.update_account); // Editar el perfil
        this.router.get('/profile/:carnet', userController_1.UserController.profile); //Obtener el perfil del usuario con su carnet
        this.router.post('/historial_pagos', userController_1.UserController.historial_pagos); // Crear usuario y Crear Cuenta
        this.router.post('/reembolsos', userController_1.UserController.reembolsos); // Crear usuario y Crear Cuenta
        this.router.get('/historial_cuenta/:carnet', userController_1.UserController.historial_cuenta); // Obtiene el historial de cuenta segun el carné
        //para curso
        this.router.post('/create-curso', userController_1.UserController.create_curso); // Crear curso
        this.router.get('/create-curso', userController_1.UserController.list_curso); // lista cursos
        //Obtener historial_cuenta
        this.router.get('/historial_cuenta/:carnet', userController_1.UserController.historial_cuenta); //Obtener el perfil del usuario con su carnet
        //Reinscripcion de Ciclo
        this.router.post('/reinscripcion', userController_1.UserController.reinscripcion); // Reinscripcion
        //inscripcion nuevo alumno
        this.router.post('/inscripcion', userController_1.UserController.inscripcion_nuevos); // inscripcion

    }
}
const UserRoutes = new userRoutes();
exports.default = UserRoutes.router;

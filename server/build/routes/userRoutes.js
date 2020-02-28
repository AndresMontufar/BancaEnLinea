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
        this.router.post('/create-user', userController_1.UserController.create_user); // Crear usuario
        this.router.get('/create-user', userController_1.UserController.list); // Lista de usuarios creados
        this.router.put('/disabled_account/:carnet', userController_1.UserController.disabled_account); // Deshabilitar cuenta
        this.router.put('/update-account/:carnet', userController_1.UserController.update_account); // Editar el perfil
        this.router.post('/create-account', userController_1.UserController.create_account); // Crear Cuenta
        this.router.get('/profile/:carnet', userController_1.UserController.profile); //Obtener el perfil del usuario con su carnet
    }
}
const UserRoutes = new userRoutes();
exports.default = UserRoutes.router;

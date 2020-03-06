"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
const validateToken_1 = require("../libs/validateToken");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // Login - no necesita autenticacion previa para ser accedido.
        this.router.post('/', indexController_1.indexController.login);
        //Logout - se valida que tenga autenticacion previa, debe traer token en el header del req
        this.router.get('/', validateToken_1.tokenValidation, indexController_1.indexController.logout);
        //ruta pra crear usuario
        this.router;
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;

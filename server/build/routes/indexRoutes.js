"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // Login - no necesita autenticacion previa para ser accedido.
        this.router.post('/', indexController_1.indexController.login);
        //ruta pra crear usuario
        this.router;
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;

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
        // Cualquier otra ruta - necesita autenticacion previa para ser accedida
        // se llama a tokenValidation previo a ser accedido un metodo del indexController
        // Ejemplos:
        this.router.post('/create', validateToken_1.tokenValidation, indexController_1.indexController.create);
        this.router.get('/read', validateToken_1.tokenValidation, indexController_1.indexController.read);
        this.router.post('/update', validateToken_1.tokenValidation, indexController_1.indexController.update);
        this.router.delete('/delete', validateToken_1.tokenValidation, indexController_1.indexController.delete);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;

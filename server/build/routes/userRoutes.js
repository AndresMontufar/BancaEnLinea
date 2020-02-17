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
        this.router.post('/create-user', userController_1.UserController.create_user);
        this.router.get('/create-user', userController_1.UserController.list);
        this.router.put('/disabled_account/:carnet', userController_1.UserController.disabled_account);
        this.router.put('/update-account/:carnet', userController_1.UserController.update_account);
    }
}
const UserRoutes = new userRoutes();
exports.default = UserRoutes.router;

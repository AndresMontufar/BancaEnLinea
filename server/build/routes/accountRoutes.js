"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const accountController_1 = require("../controllers/accountController");
class accountRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.put('/withdraw-account/:carnet', accountController_1.AccountController.withdraw_account); // retiro de dinero
    }
}
const AccountRoutes = new accountRoutes();
exports.default = AccountRoutes.router;

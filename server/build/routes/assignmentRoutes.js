"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const assignmentController_1 = require("../controllers/assignmentController");
class assignmentRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.put('/change-vacation', assignmentController_1.AssignmentController.changeVacation); // cambio curso vacaciones
    }
}
const AssignmentRoutes = new assignmentRoutes();
exports.default = AssignmentRoutes.router;

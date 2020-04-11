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
        this.router.get('/assigned-courses/:carnet', assignmentController_1.AssignmentController.assignedCourses); // cursos asignados
        this.router.get('/all_courses_vacation', assignmentController_1.AssignmentController.all_courses_vacation); // Todos los cursos disponibles en escuala de vacaciones (Primer semestre)
    }
}
const AssignmentRoutes = new assignmentRoutes();
exports.default = AssignmentRoutes.router;

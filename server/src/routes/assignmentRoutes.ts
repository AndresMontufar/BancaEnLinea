import { Router } from 'express';
import { tokenValidation} from '../libs/validateToken'
import { AssignmentController } from "../controllers/assignmentController";

class assignmentRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        
        this.router.put('/change-vacation', AssignmentController.changeVacation); // cambio curso vacaciones
        this.router.get('/assigned-courses/:carnet', AssignmentController.assignedCourses); // cursos asignados
        this.router.get('/all_courses_vacation', AssignmentController.all_courses_vacation); // Todos los cursos disponibles en escuala de vacaciones (Primer semestre)

    }

}

const AssignmentRoutes = new assignmentRoutes();
export default AssignmentRoutes.router;
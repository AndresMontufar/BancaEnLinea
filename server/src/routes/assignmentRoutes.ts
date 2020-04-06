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

    }

}

const AssignmentRoutes = new assignmentRoutes();
export default AssignmentRoutes.router;
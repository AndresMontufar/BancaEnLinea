import { Router } from 'express';
import { indexController } from '../controllers/indexController';
import { tokenValidation} from '../libs/validateToken'
import {UserController} from "../controllers/userController";

class userRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{

        this.router.post('/create-user',UserController.create_user);
        this.router.get('/create-user',UserController.list);
        this.router.put('/disabled_account/:carnet',UserController.disabled_account);
        this.router.put('/update-account/:carnet',UserController.update_account);

    }

}

const UserRoutes = new userRoutes();
export default UserRoutes.router;
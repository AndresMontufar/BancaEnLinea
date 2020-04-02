import { Router } from 'express';
import { tokenValidation} from '../libs/validateToken'
import {ExternalController} from "../controllers/externalController";

class externalAccountRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{

        this.router.post('/create-request', ExternalController.externalAccount); // crear solicitud externa

        this.router.put('/update-request', ExternalController.updateExternalAccount); // actualizar estado, solicitud externa
    }

}

const ExternalAccountRoutes = new externalAccountRoutes();
export default ExternalAccountRoutes.router;
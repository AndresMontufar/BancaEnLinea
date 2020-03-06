import { Router } from 'express';
import { tokenValidation} from '../libs/validateToken'
import {AccountController} from "../controllers/accountController";

class accountRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        
        this.router.put('/withdraw-account/:carnet', AccountController.withdraw_account); // retiro de dinero

        this.router.put('/deposit-account/:carnet', AccountController.deposit_account); // deposito de dinero
    }

}

const AccountRoutes = new accountRoutes();
export default AccountRoutes.router;
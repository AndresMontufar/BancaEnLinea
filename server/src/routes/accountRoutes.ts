import { Router } from 'express';
import { tokenValidation} from '../libs/validateToken'
import {AccountController} from "../controllers/accountController";
import {UserController} from "../controllers/userController";

class accountRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        
        this.router.put('/withdraw-account/:carnet', AccountController.withdraw_account); // retiro de dinero

        this.router.put('/deposit-account/:carnet', AccountController.deposit_account); // deposito de dinero

        this.router.get('/get-account/:carnet', AccountController.get_account); // obtener cuenta

        this.router.post('/create-sufis',AccountController.create_sufis); // pagar una suficiencia

        this.router.post('/asignar-vacas',AccountController.create_vacas); // asignar curso de vacas

        this.router.post('/asignar-retra',AccountController.create_retrasada); // asignar retrasada

        this.router.get('/create-sufis',AccountController.list_pagos); // listado de pagos

         this.router.get('/listado-vacas/:carnet',AccountController.list_vacas); // listado de cursos asignados vacas
    }

}


const AccountRoutes = new accountRoutes();
export default AccountRoutes.router;

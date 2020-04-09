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

        this.router.post('/create-user',UserController.create_user); // Crear usuario y Crear Cuenta
        this.router.get('/create-user',UserController.list); // Lista de usuarios creados
        this.router.put('/disabled_account/:carnet',UserController.disabled_account); // Deshabilitar cuenta
        this.router.put('/activate_account/:carnet',UserController.activate_account); // Habilitar cuenta
        this.router.put('/update-account/:carnet',UserController.update_account); // Editar el perfil
        this.router.get('/profile/:carnet',UserController.profile); //Obtener el perfil del usuario con su carnet
        this.router.post('/historial_pagos',UserController.historial_pagos); // Crear usuario y Crear Cuenta
        this.router.post('/reembolsos',UserController.reembolsos); // Crear usuario y Crear Cuenta

    }

}

const UserRoutes = new userRoutes();
export default UserRoutes.router;
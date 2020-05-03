import { Router } from 'express';
import { indexController } from '../controllers/indexController';
import { tokenValidation} from '../libs/validateToken'
import {UserController} from "../controllers/userController";
import {AssignmentController} from "../controllers/assignmentController";

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
        this.router.get('/historial_cuenta/:carnet',UserController.historial_cuenta ); // Obtiene el historial de cuenta segun el carné
        //para curso
        this.router.post('/create-curso',UserController.create_curso); // Crear curso
        this.router.get('/create-curso',UserController.list_curso) // lista cursos
        //Obtener historial_cuenta
        this.router.get('/historial_cuenta/:carnet',UserController.historial_cuenta); //Obtener el perfil del usuario con su carnet

        //Reinscripcion de Ciclo
        this.router.post('/reinscripcion',UserController.reinscripcion); // Reinscripcion

    }

}

const UserRoutes = new userRoutes();
export default UserRoutes.router;
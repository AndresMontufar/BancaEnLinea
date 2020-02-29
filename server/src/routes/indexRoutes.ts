import { Router } from 'express';
import { indexController } from '../controllers/indexController';
import { tokenValidation} from '../libs/validateToken'

class IndexRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        // Login - no necesita autenticacion previa para ser accedido.
        this.router.post('/', indexController.login );

        //Logout - se valida que tenga autenticacion previa, debe traer token en el header del req
        this.router.get('/', tokenValidation, indexController.logout);

        //ruta pra crear usuario
        this.router
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
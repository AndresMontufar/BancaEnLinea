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

        //ruta pra crear usuario
        this.router
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
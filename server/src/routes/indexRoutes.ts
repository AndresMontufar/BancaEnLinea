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

        // Cualquier otra ruta - necesita autenticacion previa para ser accedida
        // se llama a tokenValidation previo a ser accedido un metodo del indexController
        // Ejemplos:
        this.router.post('/create', tokenValidation ,indexController.create);
        this.router.get('/read',    tokenValidation ,indexController.read);
        this.router.post('/update', tokenValidation ,indexController.update);
        this.router.delete('/delete', tokenValidation ,indexController.delete);

        //ruta pra crear usuario
        this.router
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
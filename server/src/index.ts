    import express, {Application} from 'express';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import userRoutes from './routes/userRoutes';
import accountRoutes from './routes/accountRoutes';
import externalAccountRoutes from './routes/externalAccountRoutes';
class Server{

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(cors());    }

    routes(): void{
        this.app.use('/', indexRoutes);
        this.app.use('/api/user', userRoutes)
        this.app.use('/api/account', accountRoutes)
        this.app.use('/api/external-account', externalAccountRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () =>{
            console.log('Server on port', this.app.get('port'))
        })
    }
}

const server = new Server();
server.start();
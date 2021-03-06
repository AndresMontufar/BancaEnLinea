"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const accountRoutes_1 = __importDefault(require("./routes/accountRoutes"));
const externalAccountRoutes_1 = __importDefault(require("./routes/externalAccountRoutes"));
const assignmentRoutes_1 = __importDefault(require("./routes/assignmentRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(cors_1.default());
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/user', userRoutes_1.default);
        this.app.use('/api/account', accountRoutes_1.default);
        this.app.use('/api/external-account', externalAccountRoutes_1.default);
        this.app.use('/api/assignment', assignmentRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();

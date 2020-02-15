"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class IndexController {
    //enviar json con la siguiente estructura para login, en metodo post, ruta / 
    //{
    //    "carnet": 201503422,
    //    "contrasena": "1234abcd"
    //}
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const carnet = req.body.carnet;
            const password = req.body.contrasena;
            const rows = yield database_1.default.query('SELECT *from banca.usuario Where carnet = ?', [carnet]);
            var validPassword = false;
            if (rows.length > 0) {
                const user = rows[0];
                validPassword = (password === user.contrasena);
                if (validPassword) {
                    const token = jsonwebtoken_1.default.sign({ _id: carnet }, 'tokentest', {
                        expiresIn: 60 * 60 // el token expira en 60 minutos
                    });
                    res.header('auth-token', token).send(validPassword); // envia token al cliente atraves del header
                    // en atributo llamado auth-token
                    console.log('El usuario es valido');
                }
                else {
                    res.send(validPassword);
                    console.log('El usuario es invalido');
                }
            }
            else {
                res.send(validPassword);
            }
            console.log(validPassword);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send('create');
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send('read');
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send('update');
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send('delete');
        });
    }
}
exports.indexController = new IndexController();

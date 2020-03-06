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
const listblack_1 = require("../libs/listblack");
class IndexController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const carnet = req.body.carnet;
            const password = req.body.contrasena;
            const rows = yield database_1.default.query('SELECT * from banca.usuario Where carnet = ?', [carnet]);
            var validPassword = false;
            if (rows.length > 0) {
                const user = rows[0];
                validPassword = (password === user.contrasena && user.habilitado == 1);
                if (validPassword) {
                    const token = jsonwebtoken_1.default.sign({ _id: carnet }, 'tokentest', {
                        expiresIn: 60 * 30 // el token expira en 30 minutos
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
    logout(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = req.header('auth-token');
            if (listblack_1.blacklist.indexOf(String(token)) >= 0) {
                res.send(false); // false, si ya se cerro sesion
            }
            else {
                listblack_1.blacklist.push(String(token)); // true, si se cierra sesion 
                res.send(true);
            }
        });
    }
}
exports.indexController = new IndexController();

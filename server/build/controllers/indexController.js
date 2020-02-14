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
                    console.log('El usuario es valido');
                }
                else {
                    console.log('El usuario es invalido');
                }
                console.log(validPassword);
            }
            res.send(validPassword);
        });
    }
}
exports.indexController = new IndexController();

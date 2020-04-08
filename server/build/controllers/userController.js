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
class userController {
    index(req, res) {
        database_1.default.query('DESCRIBE banca');
        res.json("games");
    }
    create_user(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const carnet = req.body.carnet;
            const a = 111111111111;
            const b = 999999999999;
            const noCuenta = Math.round(Math.random() * (b - a) + a);
            yield database_1.default.query('INSERT INTO banca.usuario set ?', [req.body]);
            yield database_1.default.query('INSERT INTO banca.cuenta set no_cuenta = ?, tipo_id = ?, usuario_carnet = ?, saldo = ?, estado = ?', [noCuenta, 1, carnet, 100, 1]);
            res.json({ text: 'user and account created' });
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query('SELECT * FROM  banca.usuario');
            res.json(users);
        });
    }
    disabled_account(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { carnet } = req.params;
            yield database_1.default.query('UPDATE banca.usuario SET habilitado=0 WHERE carnet=?', [carnet]);
            res.json({ message: 'account disabled ' });
        });
    }
    activate_account(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { carnet } = req.params;
            yield database_1.default.query('UPDATE banca.usuario SET habilitado=1 WHERE carnet=?', [carnet]);
            res.json({ message: 'account disabled ' });
        });
    }
    update_account(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { carnet } = req.params;
            const response = yield database_1.default.query('UPDATE banca.usuario SET ? Where carnet = ?', [req.body, carnet]);
            //console.log(response);
            if (response.changedRows > 0) {
                res.send(true);
            }
            else {
                res.send(false);
            }
        });
    }
    profile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { carnet } = req.params;
            const response = yield database_1.default.query('SELECT * FROM banca.usuario WHERE carnet = ?', [carnet]);
            if (response.length > 0) {
                res.send(response);
            }
            else {
                res.send(false);
            }
        });
    }
    historial_pagos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            //const a = 1;
            //const b = 3;
            //const tipo_pago = Math.round(Math.random()*(b-a)+a);
            yield database_1.default.query('INSERT INTO banca.historial_pagos set ?', [req.body]);
            res.json({ text: 'Pago Registrado' });
        });
    }
    reembolsos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const numeroCuenta = req.body.no_cuenta;
            const monto = req.body.monto;
            const curso = req.body.curso;
            const descripcion = req.body.descripcion;
            const fecha = Date().;
            yield database_1.default.query('INSERT INTO banca.historial_pagos set no_cuenta = ?, tipo_id = ?, monto = ?, curso = ?, descripcion = ?, fecha = ?', [numeroCuenta, 4, monto, curso, descripcion, fecha]);
            res.json({ text: 'Reembolso Registrado' });
        });
    }
}
exports.UserController = new userController();

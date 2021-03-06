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
class assignmentController {
    changeVacation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const carnet = req.body.carnet;
            const curso = req.body.curso;
            const cambio = req.body.cambio;
            const response = yield database_1.default.query('SELECT *from banca.asignacion'
                + ' where usuario = ? and curso_semestre = ?', [carnet, curso]);
            if (response.length > 0) {
                const update = yield database_1.default.query('UPDATE banca.asignacion set curso_semestre = ?'
                    + ' where usuario = ? and curso_semestre = ?', [cambio, carnet, curso]);
                if (update.changedRows > 0) {
                    res.send(true);
                }
                else {
                    res.send(false);
                }
            }
            else {
                res.send(false);
            }
        });
    }
    assignedCourses(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { carnet } = req.params;
            const response = yield database_1.default.query('SELECT a.idasignacion, a.usuario, a.curso_semestre, c.codigo, c.nombre,a.fecha, a.total'
                + ' from banca.asignacion a, banca.cursos_semestre s, banca.curso c'
                + ' where a.usuario = ?'
                + ' and a.curso_semestre < 43'
                + ' and a.curso_semestre = s.idcursos_semestre'
                + ' and s.curso = c.codigo', [carnet]);
            if (response.length > 0) {
                res.json(response);
            }
            else {
                res.send(false);
            }
        });
    }
    all_courses_vacation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const curso = yield database_1.default.query('SELECT CS.idcursos_semestre, CS.curso, C.nombre, CS.seccion,F.descripcion, CS.precio FROM fecha_asignacion F INNER JOIN cursos_semestre CS ON F.idfecha_asignacion =  CS.semestre INNER JOIN curso C ON C.codigo = CS.curso WHERE  F.idfecha_asignacion=2');
            res.json(curso);
        });
    }
    assignmentSemestre(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const a = 111111;
            const b = 999999;
            const idasignacion = Math.round(Math.random() * (b - a) + a);
            const response = yield database_1.default.query('INSERT INTO banca.asignacion set idasignacion = ?, usuario = ?, curso_semestre = ?, fecha = ?', [idasignacion, req.body.usuario, req.body.curso_semestre, req.body.fecha]);
            console.log(response);
            if (response.affectedRows > 0) {
                res.send(true);
            }
            else {
                res.send(false);
            }
        });
    }
}
exports.AssignmentController = new assignmentController();

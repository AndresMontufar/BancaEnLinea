import { Request, Response} from 'express';

import pool from '../database'

class assignmentController{

    public async changeVacation(req: Request, res:Response):Promise<void>{
        const carnet = req.body.carnet;
        const curso = req.body.curso;
        const cambio = req.body.cambio;

        const response = await pool.query('SELECT *from banca.asignacion' 
        +' where usuario = ? and curso_semestre = ?', [carnet, curso]);

        if(response.length > 0)
        {
            const update = await pool.query('UPDATE banca.asignacion set curso_semestre = ?'
            +' where usuario = ? and curso_semestre = ?', [cambio, carnet, curso]);

            if(update.changedRows > 0)
            {
                res.send(true);
            }
            else
            {
                res.send(false);
            }
        }
        else  
        {  
            res.send(false);
        }
    }

    public async assignedCourses(req: Request, res:Response):Promise<void>{
        const {carnet} = req.params;
        
        const response = await pool.query('SELECT a.idasignacion, a.usuario, a.curso_semestre, c.codigo, c.nombre,a.fecha, a.total'
        +' from banca.asignacion a, banca.cursos_semestre s, banca.curso c'
        + ' where a.usuario = ?' 
        + ' and a.curso_semestre < 43'
        + ' and a.curso_semestre = s.idcursos_semestre'
        + ' and s.curso = c.codigo', [carnet]);

        if(response.length > 0)
        {
            res.json(response);
        }
        else  
        {  
            res.send(false);
        }
    }
}

export const AssignmentController = new assignmentController();
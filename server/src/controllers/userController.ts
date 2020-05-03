import { Request, Response} from 'express';

import pool from '../database'
import jwt from "jsonwebtoken"

class userController {

    public index(req: Request, res: Response) {
       pool.query('DESCRIBE banca');
       res.json("games");
    }

     public async create_user (req: Request, res:Response):Promise<void>{
        console.log(req.body);

         const carnet = req.body.carnet;
         const a = 111111111111;
         const b = 999999999999;
         const noCuenta = Math.round(Math.random()*(b-a)+a);

         await pool.query('INSERT INTO banca.usuario set ?',[req.body]);
         await pool.query('INSERT INTO banca.cuenta set no_cuenta = ?, tipo_id = ?, usuario_carnet = ?, saldo = ?, estado = ?',
             [noCuenta, 1, carnet, 100, 1]);

         res.json({text: 'user and account created'});
    }

    public async create_curso (req: Request, res:Response):Promise<void>{

        console.log(req.body);

        const id_curso = req.body.codigo_curso;
        const curso = req.body.nombre_curso;


        await pool.query('INSERT INTO banca.curso values (?,?)',
            [id_curso,curso]);

        res.json({text: 'cursoclear agregado'});
    }

    public async list(req: Request, res:Response):Promise<void>{

        const users= await pool.query('SELECT * FROM  banca.usuario');
        res.json(users);

    }

    public async list_curso(req: Request, res:Response):Promise<void>{

        const curso= await pool.query('SELECT * FROM  banca.curso');
        res.json(curso);

    }

    public async disabled_account(req: Request, res:Response):Promise<void>{
        const { carnet } = req.params;
        await  pool.query('UPDATE banca.usuario SET habilitado=0 WHERE carnet=?',[carnet]);
        res.json({message:'account disabled '});


    }

    public async activate_account(req: Request, res:Response):Promise<void>{
        const { carnet } = req.params;
        await  pool.query('UPDATE banca.usuario SET habilitado=1 WHERE carnet=?',[carnet]);
        res.json({message:'account disabled '});


    }

    public async update_account(req: Request, res: Response):Promise<void> {
        const { carnet } = req.params;

        const response = await pool.query('UPDATE banca.usuario SET ? Where carnet = ?', [req.body, carnet]);
        //console.log(response);
        if(response.changedRows > 0)
        {
            res.send(true);
        }
        else
        {
            res.send(false); 
        }
              
    }

    public async profile(req: Request, res: Response):Promise<void> {
        const { carnet } = req.params;

        const response = await pool.query('SELECT * FROM banca.usuario WHERE carnet = ?', [carnet]);
        if(response.length > 0)
        {
            res.send(response);
        }
        else
        {
            res.send(false); 
        }
              
    }

    public async historial_pagos(req: Request, res: Response):Promise<void>{
        console.log(req.body);

        //const a = 1;
        //const b = 3;
        //const tipo_pago = Math.round(Math.random()*(b-a)+a);

        await pool.query('INSERT INTO banca.historial_pagos set ?',[req.body]);

        res.json({text: 'Pago Registrado'});
    }

    public async reembolsos(req: Request, res: Response):Promise<void>{

        const numeroCuenta = req.body.no_cuenta;
        const monto = req.body.monto;
        const curso = req.body.curso;
        const descripcion = req.body.descripcion;
        const fecha = new Date();
        const usuario = req.body.user;
        const curso_sem = req.body.curso_sem;


        await pool.query('INSERT INTO banca.historial_pagos set no_cuenta = ?, tipo_id = ?, monto = ?, curso = ?, descripcion = ?, fecha = ?',
            [numeroCuenta, 4, monto, curso, descripcion, fecha]);

        // Desasignar el curso
        await pool.query('DELETE FROM banca.asignacion WHERE usuario = ? AND curso_semestre = ?', [usuario, curso_sem])

        res.json({text: 'Reembolso Registrado'});
    }

    public async historial_cuenta(req: Request, res:Response):Promise<void>{
        const {carnet} = req.params;

        const response = await pool.query('select h.no_cuenta, t.nombre, h.monto, cc.nombre, h.descripcion, h.fecha'
            + ' from historial_pagos h, cuenta c, tipo_pago t, curso cc'
            + ' where c.usuario_carnet = ?'
            + ' and c.no_cuenta = h.no_cuenta'
            + ' and h.tipo_id = t.id'
            + ' and h.curso = cc.codigo'
            + ' order by h.fecha desc', [carnet]);

        if(response.length > 0)
        {
            res.json(response);
        }
        else
        {
            res.send(false);
        }
    }

    public async reinscripcion (req: Request, res:Response):Promise<void>{
        console.log(req.body);

        const no_cuenta = req.body.no_cuenta;
        const monto = req.body.monto;
        const fecha = new Date();


        await pool.query('INSERT INTO banca.historial_pagos set no_cuenta = ?, tipo_id = ?, monto = ?, descripcion = ?, fecha = ?',
            [no_cuenta, 5, monto, 'Reinscripcion de ciclo', fecha]);

        await  pool.query('UPDATE banca.usuario u'
            + ' INNER JOIN cuenta c ON c.usuario_carnet = u.carnet'
            + ' INNER JOIN historial_pagos h ON h.no_cuenta = c.no_cuenta'
            + ' SET u.habilitado = 1'
            + ' WHERE h.no_cuenta = ?',[no_cuenta]);

        res.json({text: 'Usuario Reinscrito'});
    }


}

export const UserController = new userController();
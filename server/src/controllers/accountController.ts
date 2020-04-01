import { Request, Response} from 'express';

import pool from '../database'

class accountController {

    public async withdraw_account(req: Request, res: Response):Promise<void> {   // retiro de dinero
        const { carnet } = req.params;
        const cuenta = req.body.no_cuenta;
        const retiro = req.body.retiro;

        const response = await pool.query('UPDATE banca.cuenta SET saldo = saldo - ?'
            +' where usuario_carnet = ? and no_cuenta = ? and estado = 1 and saldo >= ?'
            ,[retiro, carnet, cuenta, retiro]);

        if(response.changedRows > 0)
        {
            res.send(true);
        }
        else
        {
            res.send(false);
        }
    }

    public async create_sufis (req: Request, res:Response):Promise<void>{
        console.log(req.body);

        const no_cuenta = req.body.no_cuenta;
        const curso = req.body.curso;
        const descripcion = req.body.descripcion;

        await pool.query('INSERT INTO banca.historial_pagos ("no_cuenta","tipo_id","monto","curso","descripcion") values (?,3,20,?,?)',
            [no_cuenta,curso,descripcion]);

        res.json({text: 'pago de suficiencia agregado'});
    }

    public async deposit_account(req: Request, res: Response):Promise<void> {   // deposito de dinero
        const { carnet } = req.params;
        const cuenta = req.body.no_cuenta;
        const deposito = req.body.deposito;

        const response = await pool.query('UPDATE banca.cuenta SET saldo = saldo + ?'
            +' where usuario_carnet = ? and no_cuenta = ? and estado = 1'
            ,[deposito, carnet, cuenta]);

        if(response.changedRows > 0)
        {
            res.send(true);
        }
        else
        {
            res.send(false);
        }
    }

    public async get_account(req: Request, res: Response):Promise<void> {   // obtener cuenta
        const { carnet } = req.params;

        const response = await pool.query('SELECT * from banca.cuenta where usuario_carnet = ? ', [carnet]);

        if(response.length > 0)
        {
            res.send(response);
        }
        else
        {
            res.send(false);
        }
    }
}

export const AccountController = new accountController();

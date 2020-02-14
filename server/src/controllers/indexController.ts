import { Request, Response} from 'express';

import pool from '../database'

class IndexController {

    //enviar json con la siguiente estructura para login, en metodo post, ruta / 
    //{
    //    "carnet": 201503422,
    //    "contrasena": "1234abcd"
    //}
    public async login (req: Request, res: Response) {
        const carnet = req.body.carnet;
        const password = req.body.contrasena;

        const rows = await pool.query('SELECT *from banca.usuario Where carnet = ?', [carnet]);
        var validPassword = false;

        if(rows.length > 0)
        {
            const user = rows[0];
            validPassword = (password === user.contrasena);
            if(validPassword)
            {
                console.log('El usuario es valido');
            } 
            else
            {
                console.log('El usuario es invalido');
            }  
            console.log(validPassword);       
        } 
        res.send(validPassword);
    }
}

export const indexController = new IndexController();
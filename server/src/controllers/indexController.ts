import { Request, Response} from 'express';

import pool from '../database'
import jwt from "jsonwebtoken"

class IndexController {

    public async login (req: Request, res: Response) {
        const carnet = req.body.carnet;
        const password = req.body.contrasena;

        const rows = await pool.query('SELECT * from banca.usuario Where carnet = ? and habilitado = true', [carnet]);
        var validPassword = false;

        if(rows.length > 0)
        {
            const user = rows[0];
            validPassword = (password === user.contrasena);
            if(validPassword)
            {
                const token: string = jwt.sign({_id : carnet}, 'tokentest',{  // crea token
                    expiresIn: 60 * 60                               // el token expira en 60 minutos
                })
                res.header('auth-token',token).send(validPassword);  // envia token al cliente atraves del header
                                                                     // en atributo llamado auth-token
                console.log('El usuario es valido');
            } 
            else
            {
                res.send(validPassword);
                console.log('El usuario es invalido');
            }        
        }
        else
        {
            res.send(validPassword); 
        }     
        console.log(validPassword);         
    }
}

export const indexController = new IndexController();
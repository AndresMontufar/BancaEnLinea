import { Request, Response} from 'express';

import pool from '../database'
import jwt from "jsonwebtoken"
import { blacklist} from '../libs/listblack'

class IndexController {

    
    public async login (req: Request, res: Response) {
        const carnet = req.body.carnet;
        const password = req.body.contrasena;

        const rows = await pool.query('SELECT * from banca.usuario Where carnet = ?', [carnet]);
        var validPassword = false;

        if(rows.length > 0)
        {
            const user = rows[0];
            validPassword = (password === user.contrasena && user.habilitado == 1);
            if(validPassword)
            {
                const token: string = jwt.sign({_id : carnet}, 'tokentest',{  // crea token
                    expiresIn: 60 * 30                               // el token expira en 30 minutos
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

    public async logout (req: Request, res: Response) {
        const token = req.header('auth-token');   

        if(blacklist.indexOf(String(token)) >= 0)
        {
            res.send(false);                      // false, si ya se cerro sesion
        }
        else
        {
            blacklist.push(String(token));        // true, si se cierra sesion 
            res.send(true);
        }     
    }
}

export const indexController = new IndexController();
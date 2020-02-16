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
         await pool.query('INSERT INTO banca.usuario set ?',[req.body]);
       //  pool.query('DESCRIBE usuario');
        res.json({message:'user saved'});

    }
    public async list(req: Request, res:Response):Promise<void>{

        const users= await pool.query('SELECT * FROM  banca.usuario');
        res.json(users);

    }
    public async disabled_account(req: Request, res:Response):Promise<void>{
        const { carnet } = req.params;
        await  pool.query('UPDATE banca.usuario SET habilitado=0 WHERE carnet=?',[carnet]);
        res.json({message:'account disabled '});


    }
}

export const UserController = new userController();
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

    public async create_account (req: Request, res:Response):Promise<void>{

        console.log(req.body);
        await pool.query('INSERT INTO banca.cuenta set ?',[req.body]);
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
}

export const UserController = new userController();
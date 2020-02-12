import { Request, Response} from 'express';

import pool from '../database'

class IndexController {

    public index (req: Request, res: Response) {
        res.send('Hola :3')
        pool.query('USE banca;')
    }
}

export const indexController = new IndexController();
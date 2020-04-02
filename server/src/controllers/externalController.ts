import { Request, Response} from 'express';

import pool from '../database'

class externalController {

    public async externalAccount(req: Request, res: Response):Promise<void> {   // solicitud externa

        const estado = 1; // pendiente
        const response = await pool.query('INSERT INTO banca.solicitudes_externas set usuario = ?, cuenta = ?, estado = ?, fecha = ?',
        [req.body.usuario, req.body.cuenta, estado, req.body.fecha]);
        console.log(response);
        if(response.affectedRows > 0)
        {
            res.send(true);
        }
        else
        {
            res.send(false);
        }
    }

    public async updateExternalAccount(req: Request, res: Response):Promise<void> {   // solicitud externa, actualizar estado

        const response = await pool.query('UPDATE banca.solicitudes_externas SET estado = ? Where usuario = ? and cuenta = ?', 
        [req.body.estado, req.body.usuario, req.body.cuenta]);
        
        if(response.changedRows > 0)
        {
            res.send(true);
        }
        else
        {
            res.send(false);
        }
    }
}

export const ExternalController = new externalController();

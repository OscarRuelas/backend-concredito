import {Request, Response} from 'express';

import {connect} from '../database';
import { Post } from '../interfaces/prospecto.interfaces';

export async function getProspectos(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const prospectos = await conn.query('SELECT * FROM PROSPECTO');
    return res.json(prospectos[0]);    
};

export async function createProspecto(req:Request, res: Response){
    const newPost: Post = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO PROSPECTO SET ?', [newPost]);
    return res.json({
        message:'Prospecto Created'
    });
};

export async function updateProspecto(req: Request, res: Response) {
    const id = req.params.prospectoId;
    const updateProspecto: Post = req.body;
    const conn = await connect();
    await conn.query('UPDATE PROSPECTO SET ? WHERE idprospecto = ?', [updateProspecto, id]);
    return res.json({
        message: 'Prospecto Actualizado'
    });
};

export async function selectProspecto(req: Request, res: Response) {
    const id = req.params.prospectoId;
    const conn = await connect();
    const prospectos = await conn.query('SELECT * FROM PROSPECTO WHERE idprospecto = ?', [id]);
    return res.json(prospectos[0]);  
};

export async function Select(req: Request, res: Response) {
    const conn = await connect();
    const prospectos = await conn.query('SELECT * FROM PROSPECTO WHERE Estatus = "E"');
    console.log(prospectos);
    return res.json(prospectos[0]);  
};
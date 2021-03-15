import {Router} from 'express'
import { format } from 'morgan';
const router = Router();

import { getProspectos, createProspecto, updateProspecto, selectProspecto, Select } from '../controllers/propectos.controller';

router.route('/')
    .get(getProspectos)
    .post(createProspecto)

router.route('/:prospectoId')
    .get(selectProspecto)
    .put(updateProspecto)

router.route('/estatus')
    .get(Select)
export default router;
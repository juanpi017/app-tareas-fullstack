import { Router } from "express";
import {listar, obtener, crear, modificar, eliminar} from "../controllers/tareas.controller.js";

const router = Router()

router.get('/',listar)         //Get           /api/tareas
router.get('/:id',obtener)     //Get           /api/tareas/:id
router.post('/',crear)         //post          /api/tareas
router.put('/:id',modificar)
router.delete('/:id',eliminar)

export default router;
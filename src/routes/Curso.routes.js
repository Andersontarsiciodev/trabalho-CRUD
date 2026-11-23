import CursoController from "../controllers/Curso.controller.js";
import { Router } from "express";

const CursoRouter = Router();

CursoRouter.post("/curso", CursoController.creatCursocontroller);

export default CursoRouter;

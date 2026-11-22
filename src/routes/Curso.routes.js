import cursoController from "../controller/Curso.controller.js";
import { Router } from "express";

const cursoRouter = Router();

cursoRouter.post("/cursos", cursoController.createCursoController);

export default cursoRouter;


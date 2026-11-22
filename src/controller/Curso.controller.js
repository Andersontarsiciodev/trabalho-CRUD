import CursoService from "../services/Curso.service.js";

async function createCursoController(req, res) {
    const novoCurso  = req.body;

    try {
        const cursoSalvo = await CursoService.createCursoService(novoCurso);

        res.status(201).send(cursoSalvo);
    } catch(error) {
        res.status(400).send(error.message);
    }
}

export default {
    createCursoController
}
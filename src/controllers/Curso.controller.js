import Cursoservice from "../services/Curso.services.js"

async function creatCursocontroller(request, response) {
    const novoCurso = request.body

    try {
        const Cursosalvo = await Cursoservice.creatCursoservice(novoCurso)

            response.status (201).send(Cursosalvo)
    } catch (erro) {
        response.status (400).send(erro.message)
    }
}

export default {
    creatCursocontroller
}
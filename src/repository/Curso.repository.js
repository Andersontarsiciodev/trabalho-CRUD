import db from "../config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS Curso(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome  TEXT  NOT NULL UNIQUE,
        area TEXT NOT NULL,
        nivel  TEXT  NOT NULL,
        modalidade  TEXT  NOT NULL
    )
`);

function createCursoRepository(novoCurso) {
    return new Promise((resolve, reject) => {
        const {
            nome, area, nivel, modalidade

        } = novoCurso;

        db.run(
            `INSERT INTO Curso(nome, area, nivel, modalidade)
            VALUES(?,?,?,?)`,
            [nome, area, nivel, modalidade],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(novoCurso);
                }
            }
        )
    });
}

export default {
    createCursoRepository
}

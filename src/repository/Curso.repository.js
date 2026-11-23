import db from "../Config/Database.js"

db.run (`
    CREATE TABLE IF NOT EXISTS Curso(
        id  INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL UNIQUE, 
        area TEXT NOT NULL,
        nivel TEXT NOT NULL,
        modalidade TEXT NOT NULL
    )
    
`)

function creatCursorepositories (novoCurso){
    return new Promise ((response, reject) => {
        const {nome, area, nivel, modalidade} = novoCurso

        db.run (
            `INSERT INTOR Curso (nome, area, nivel, modalidade)
            VALUES (?,?,?,?)`, [nome, area, nivel, modalidade],
            (erro) => {
                if (erro){
                    rej (erro)
                } else {
                    res (novoCurso)
                }
            }
        )
    })
}

export default {
    creatCursorepositories      
}
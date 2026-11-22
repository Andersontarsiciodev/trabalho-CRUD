import express from "express";
import cursoRouter from "./src/routes/Curso.routes.js";

const app = express();

app.use(express.json());
app.use(cursoRouter);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000...");
});
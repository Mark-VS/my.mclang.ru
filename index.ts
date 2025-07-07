
import express from "express";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const MAIN_PAGE = "index.html";

const mainPage = join(__dirname, MAIN_PAGE);


const HTTP_PORT = 3001;
const app = express();

/*
const shusha = express.static(join(__dirname, "styles"));
app.use("/kukuruza", shusha);
*/

app.get("/", (req, res) => {
    res.status(200).sendFile(mainPage);
});

app.get ("/sraka", (req, res) => {
    res.status(200).send("<p><a href=\"/\">Вернуться на главную страничку.</a></p><p>какашка коричневая</p>");
});

app.listen(HTTP_PORT, () => {
    console.log(`HTTP-сервер запущен на порту ${HTTP_PORT}.`);
});
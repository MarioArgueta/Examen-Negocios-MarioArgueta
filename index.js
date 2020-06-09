//importar express
const express = require("express");
// Importar Handlebars
const exphbs = require("express-handlebars");
// Importar todas las rutas disponibles
const routes = require("./routes");

// Crear un servidor de express
const app = express();

// Indicar el template engine a utilizar (Handlebars)
app.engine(
    "hbs",
    exphbs({
      defaultLayout: "main",
      extname: ".hbs",
    })
);

app.set("view engine", "hbs");

app.use("/", routes());

app.listen(8000, () => {
    console.log("Servidor ejecutandose en el puerto 8000")
});
// Importar sequelize
const Sequilize = require("sequelize");
// Importar slug
const slug = require("slug");
// Importar shortid
const shortid = require("shortid");

// Definición del modelo
const Proyecto = db.define(
  "proyecto",
  {
    hooks: {
      beforeCreate(proyecto) {
        console.log("Antes de insertar en la base de datos");
        const url = slug(proyecto.nombre).toLowerCase();

        proyecto.url = `${url}_${shortid.generate()}`;
      },
      beforeUpdate(proyecto) {
        console.log("Antes de actualizar en la base de datos");
        const url = slug(proyecto.nombre).toLowerCase();

        proyecto.url = `${url}_${shortid.generate()}`;
      },
    },
  }
);

// Importar el modelo para poder utilizarlo
module.exports = Proyecto;
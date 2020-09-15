// Importar express
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const routes = require('./routes');
const configs = require('./config');
const db = require('./config/database');

require('dotenv').config({ path: 'variables.env' })

//db.authenticate()
  // .then(() => console.log('DB Conectada') )
   //.catch(error => console.error('error al conectar => ', error));

// Configurar express
const app = express();

// habilitar pug
app.set('view engine', 'pug')

// habilitar las vistas
app.set('views', path.join(__dirname, './views'))

// cargar una carpeta estatica llamada public
app.use(express.static('public'))

// Validar si estamos en desarrollo o producción
const config = configs[app.get('env')]

// Creamos la variable para el sitio web
app.locals.titulo = config.nombredelsitio;

// Muestra el año actual
app.use((req, res, next) => {
  const fecha = new Date()
  res.locals.fechaActual = fecha.getFullYear() // Locals son variables de NodeJS que Node/express va a reconocer y pasar entre los distintos archivos
  res.locals.ruta = req.path // Variable ruta para poder activar la navegación en el header
  return next()
})

// Ejecutamos el body-parser
app.use(bodyParser.urlencoded({extended: true }))

// Cargar las rutas
app.use('/', routes());

// Puerto y host para la app
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
  console.log('El servidor esta funcionando');
});

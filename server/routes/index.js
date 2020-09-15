const express = require('express');
const router = express.Router();

const { infoNosotros } = require('../controllers/nosotros.controller');
const { infoHome } = require('../controllers/home.controller');
const { infoViajes, infoViaje } = require('../controllers/viajes.controller');
const { infoTestimoniales, guardarTestimonial } = require('../controllers/testimoniales.controller');

module.exports = () => {
  router.get('/', infoHome)
  router.get('/nosotros', infoNosotros)
  router.get('/viajes', infoViajes)
  router.get('/viajes/:id', infoViaje)
  router.get('/testimoniales', infoTestimoniales)
  router.post('/testimoniales', guardarTestimonial) // Cuando se llena el formulario de testimoniales
  return router;
}

const Viaje = require("../models/Viajes")
const Testimonial = require("../models/Testimoniales")

exports.infoHome = async (req, res) => {
  const viajes = await Viaje.findAll({ limit: 3 })
  const testimoniales = await Testimonial.findAll({ limit: 3 })

  res.render('index', {
    tituloPagina: 'Viajes',
    clase: 'home',
    viajes,
    testimoniales
  })

  .catch(error =>  console.error('Error =>', error))
}

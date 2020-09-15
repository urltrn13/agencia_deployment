const Testimonial = require("../models/Testimoniales")

exports.infoTestimoniales = async (req, res) => {
  const testimoniales = await Testimonial.findAll()
  res.render('testimoniales', {
    tituloPagina: 'Testimoniales',
    testimoniales // Object Literal Enhancements = viajes: viajes
  })
}
exports.guardarTestimonial = async (req, res) => {
  // Validar que todos los campos esten llenos
  let {nombre, correo, mensaje} = req.body

  let errores = []
  if(!nombre) {
    errores.push({'mensaje': 'Agrega tu nombre'})
  }
  if(!correo) {
    errores.push({'mensaje': 'Agrega tu correo'})
  }
  if(!mensaje) {
    errores.push({'mensaje': 'Agrega tu mensaje'})
  }

  // Revisar en caso de que haya o no errores

  if(errores.length) {
    // Muestra la vista con errores
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales', {
      errores,
      nombre,
      correo,
      mensaje,
      testimoniales,
      tituloPagina: 'Testimoniales'
    })
  } else {
    // Almacenamos en DB
    await Testimonial.create({
      nombre,
      correo,
      mensaje
    })
    res.redirect('/testimoniales')
  }
}

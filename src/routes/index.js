const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate');

const ongController = require('../controllers/OngController')
const incidentsController = require('../controllers/IncidentController')
const profileController = require('../controllers/ProfileController')
const sessionController = require('../controllers/SessionController')

const router = express.Router()

router.post('/session', sessionController.create)

router.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown
}),profileController.list)

router.get('/ongs', ongController.list)
router.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.number().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
}), ongController.create)

router.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}),incidentsController.list)
router.post('/incidents', incidentsController.create)

router.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), incidentsController.delete)

module.exports = router
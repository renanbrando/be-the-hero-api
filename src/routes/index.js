const express = require('express')

const ongController = require('../controllers/OngController')
const incidentsController = require('../controllers/IncidentController')
const profileController = require('../controllers/ProfileController')
const sessionController = require('../controllers/SessionController')

const router = express.Router()

router.post('/session', sessionController.create)

router.get('/profile', profileController.list)

router.get('/ongs', ongController.list)
router.post('/ongs', ongController.create)

router.get('/incidents', incidentsController.list)
router.post('/incidents', incidentsController.create)
router.delete('/incidents/:id', incidentsController.delete)

module.exports = router
// Candlelight Dinners

const express = require('express')
const router = express.Router()

const {
    create_five_star_dining,
    viewall,
    update_decoration,
    delete_decoration
} = require('../controller/5_star_dinning_controller')

router.post('/form', create_five_star_dining)
router.get('/5star', viewall)
router.put('/5star/:id', update_decoration)
router.delete('/5star/:id', delete_decoration)

module.exports = router
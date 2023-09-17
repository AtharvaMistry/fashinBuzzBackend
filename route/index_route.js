const express = require("express")
const router = express.Router()

const five_star = require('./5_star_dinning_route')

router.use(
    '/api',
    five_star
)

module.exports = router
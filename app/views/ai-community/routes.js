// External dependencies
const express = require('express')

const router = express.Router()

// Add your routes here - above the module.exports line

router.use('/views/ai-community/_routes', require('./views/ai-community/_routes'));

module.exports = router

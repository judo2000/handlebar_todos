const router = require('express').Router();
const userRoutes = require('./userRoutes');

// prpend /api/users in ever route in userRoutes
router.use('/users', userRoutes);

module.exports = router
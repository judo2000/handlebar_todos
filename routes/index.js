const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

// prepend /api to ever route declared in apiroutes
router.use('/api', apiRoutes);

module.exports = router
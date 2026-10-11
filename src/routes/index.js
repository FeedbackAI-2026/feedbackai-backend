const router = require('express').Router();

router.use('/feedback', require('./feedback.routes'));
router.use('/admin', require('./admin.routes'));
router.use('/REVIWER', require('./admin.routes'));
module.exports = router;

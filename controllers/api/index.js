const router = require('express').Router();

const userRoutes = require('./userRoutes');
const moviesRoutes = require('./movieRoutes');
const homeRoutes = require('./');
const reviewsRoutes = require('./');
const aboutRoutes = require('./');

router.use('/users', userRoutes);
router.use('/movies', movieRoutes);
router.use('/', homeRoutes);
router.use('/reviews', reviewsRoutes);
router.use('/about', aboutRoutes);

module.exports = router;

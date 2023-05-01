const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');
const commentRoutes = require('../routes/comment-routes');

router.use('/pizzas', pizzaRoutes);
router.use('/comments', commentRoutes)

module.exports = router;
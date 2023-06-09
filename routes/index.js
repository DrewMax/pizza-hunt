const router = require('express').Router();
// Import all of the Apì routes from /api/index.js (no need for index.js though since it's implied)
const apiRoutes = require('../api');
const htmlRoutes = require('./html/html-routes');
const deletedComment = require('../routes');

// add prefix of ´/api´ to all of the routes imprted fromn the api directory
router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;

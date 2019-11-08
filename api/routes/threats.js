const Router = require('express-promise-router');

const threatRepository = require('../db/threatRepository');

const router = new Router();

module.exports = router;

router.get('/', (request, response) => {

  const items = threatRepository;

  response.set('Cache-Control', 'public, max-age=3600'); // one year
  response.status(200).json(items);
});

router.get('/:slug', (request, response) => {

  const slug = request.params.slug;

  const key = slug.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });

  const item = threatRepository.find( threat => threat.key === key );

  response.status(200).json(item);
});

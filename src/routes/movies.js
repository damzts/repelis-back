const express = require('express');
const moviesController = require('../controllers/movies-controller');

const router = express.Router();

// GET/movies

router.get('/',moviesController.getMovies);
router.post('/',moviesController.saveMovie);
router.put('/:id',moviesController.updateMovie);
router.delete('/:id',moviesController.deleteMovie   );

module.exports = router;

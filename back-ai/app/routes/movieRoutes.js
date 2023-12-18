import express from 'express';
import { registerMovie, getMovies } from '../controllers/movieController.js';

const router = express.Router();


router.get('/register-movie', registerMovie)
router.get('/get-movies', getMovies)
export default router;

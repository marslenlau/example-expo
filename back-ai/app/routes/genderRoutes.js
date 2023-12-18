import express from 'express';
import {registerGender} from '../controllers/genderController.js';

const router = express.Router();

router.get('/register-gender', registerGender)

export default router;

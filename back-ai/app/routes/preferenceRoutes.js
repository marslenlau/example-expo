import express from 'express';
import { registerPreference } from '../controllers/preferenceController.js';

const router = express.Router();

router.get('/register-preference', registerPreference)

export default router;

import express from 'express';
import { registerPreference, obtainPreference } from '../controllers/preferenceController.js';

const router = express.Router();

router.get('/register-preference', registerPreference)
router.post('/obtain-preference', obtainPreference)
export default router;

import express from 'express';
import { verifyConection, obtainUser, registerUser, authUser, identityUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/', verifyConection);
router.get('/obtain-user', obtainUser);
router.post('/register-user', registerUser);
router.post('/auth-user', authUser);
router.post('/identity-user', identityUser);

export default router;
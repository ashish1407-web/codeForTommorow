import { Router } from 'express';
import { register, login } from '../services/authServices';
import authMiddleware from '../middleware/authMiddleware';
const router = Router();
router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await register(email, password);
      res.json(user);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
  
  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const token = await login(email, password);
      res.cookie('jwt', token, { httpOnly: true });
      res.json({ token });
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
  
  router.get('/protected', authMiddleware, (req, res) => {
    res.send('This is a protected route');
  });
  
  export default router;

import express from 'express';

const router = express.Router();

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'veer@123';

/**
 * POST /api/auth/login
 * Validates authentication credentials
 */
router.post('/login', (req, res) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({
      success: false,
      message: 'Password is required.',
    });
  }

  if (password === ADMIN_PASSWORD) {
    const sessionToken = Buffer.from(`antellay:${Date.now()}:${Math.random().toString(36).substring(2)}`).toString('base64');
    
    return res.json({
      success: true,
      message: 'Access granted. Welcome Veer.',
      token: sessionToken,
      user: {
        id: 'usr_veer_01',
        name: 'VEER',
        role: 'Founder & Vision Architect',
        email: 'veers2580jag@gmail.com',
        permissions: ['ADMIN', 'ORBITAL_TELEMETRY', 'SYSTEM_CONTROL'],
      },
    });
  }

  return res.status(401).json({
    success: false,
    message: 'ACCESS DENIED. Invalid credentials.',
  });
});

/**
 * GET /api/auth/verify
 * Verifies active session token
 */
router.get('/verify', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      authenticated: false,
      message: 'No valid session token provided.',
    });
  }

  const token = authHeader.split(' ')[1];
  if (token) {
    return res.json({
      success: true,
      authenticated: true,
      user: {
        name: 'VEER',
        role: 'Founder & Vision Architect',
      },
    });
  }

  return res.status(401).json({
    success: false,
    authenticated: false,
    message: 'Invalid session.',
  });
});

/**
 * POST /api/auth/logout
 * Logs out user session
 */
router.post('/logout', (req, res) => {
  return res.json({
    success: true,
    message: 'Session terminated.',
  });
});

export default router;

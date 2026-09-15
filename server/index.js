import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import contactRoutes from './routes/contact.js';
import bookingsRoutes from './routes/bookings.js';
import telemetryRoutes from './routes/telemetry.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

// Request logger
app.use((req, res, next) => {
  const timestamp = new Date().toISOString().substring(11, 19);
  console.log(`[${timestamp}] [ANTELLAY-API] ${req.method} ${req.originalUrl}`);
  next();
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ONLINE',
    service: 'Antellay OS Backend Core',
    timestamp: new Date().toISOString(),
  });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/bookings', bookingsRoutes);
app.use('/api/telemetry', telemetryRoutes);

// Fallback 404 for unmatched API routes
app.use((req, res, next) => {
  if (req.originalUrl.startsWith('/api')) {
    return res.status(404).json({
      success: false,
      message: `API endpoint ${req.originalUrl} not found.`,
    });
  }
  next();
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('[ANTELLAY-API-ERROR]', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error occurred.',
  });
});

app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`🚀 ANTELLAY OS BACKEND ONLINE`);
  console.log(`📡 URL: http://localhost:${PORT}`);
  console.log(`🛰️  Endpoints:`);
  console.log(`   - Auth:      http://localhost:${PORT}/api/auth/login`);
  console.log(`   - Contact:   http://localhost:${PORT}/api/contact`);
  console.log(`   - Bookings:  http://localhost:${PORT}/api/bookings`);
  console.log(`   - Telemetry: http://localhost:${PORT}/api/telemetry`);
  console.log(`   - Health:    http://localhost:${PORT}/api/health`);
  console.log(`=========================================`);
});

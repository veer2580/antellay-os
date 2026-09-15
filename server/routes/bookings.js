import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '../data');
const BOOKINGS_FILE = path.join(DATA_DIR, 'bookings.json');

// Ensure directory and file exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(BOOKINGS_FILE)) {
  fs.writeFileSync(BOOKINGS_FILE, JSON.stringify([]));
}

const router = express.Router();

function getBookings() {
  try {
    const data = fs.readFileSync(BOOKINGS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

function saveBookings(bookings) {
  fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));
}

/**
 * POST /api/bookings
 * Schedules a consultation session
 */
router.post('/', (req, res) => {
  const { date, slot, clientName, clientEmail, domain } = req.body;

  if (!date || !slot) {
    return res.status(400).json({
      success: false,
      message: 'Date and slot are required to schedule a consultation.',
    });
  }

  const newBooking = {
    id: `BKG-${Date.now().toString(36).toUpperCase()}`,
    date,
    slot,
    clientName: clientName || 'Anonymous Partner',
    clientEmail: clientEmail || '',
    domain: domain || 'Space Architecture & Intelligence',
    host: 'Veer Singh (Founder & Vision Architect)',
    location: 'Antellay Secure Teleconference / Orbit Node',
    status: 'CONFIRMED',
    bookedAt: new Date().toISOString(),
  };

  const bookings = getBookings();
  bookings.unshift(newBooking);
  saveBookings(bookings);

  return res.status(201).json({
    success: true,
    message: 'Consultation session successfully confirmed.',
    booking: newBooking,
  });
});

/**
 * GET /api/bookings
 * Retrieves all booked consultations
 */
router.get('/', (req, res) => {
  const bookings = getBookings();
  return res.json({
    success: true,
    count: bookings.length,
    bookings,
  });
});

export default router;

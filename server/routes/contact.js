import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '../data');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');

// Ensure directory and file exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(INQUIRIES_FILE)) {
  fs.writeFileSync(INQUIRIES_FILE, JSON.stringify([]));
}

const router = express.Router();

/**
 * Helper to read inquiries
 */
function getInquiries() {
  try {
    const data = fs.readFileSync(INQUIRIES_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

/**
 * Helper to write inquiries
 */
function saveInquiries(inquiries) {
  fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2));
}

/**
 * POST /api/contact
 * Receives contact form submissions
 */
router.post('/', (req, res) => {
  const { name, email, category, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and message are required fields.',
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email address format.',
    });
  }

  const newInquiry = {
    id: `INQ-${Date.now().toString(36).toUpperCase()}`,
    name: name.trim(),
    email: email.trim(),
    category: category || 'PARTNERSHIP',
    message: message.trim(),
    status: 'RECEIVED',
    createdAt: new Date().toISOString(),
  };

  const inquiries = getInquiries();
  inquiries.unshift(newInquiry);
  saveInquiries(inquiries);

  return res.status(201).json({
    success: true,
    message: 'Message successfully transmitted to Antellay Mission Control.',
    referenceId: newInquiry.id,
    timestamp: newInquiry.createdAt,
  });
});

/**
 * GET /api/contact
 * Lists all contact messages (internal/admin)
 */
router.get('/', (req, res) => {
  const inquiries = getInquiries();
  return res.json({
    success: true,
    count: inquiries.length,
    inquiries,
  });
});

export default router;

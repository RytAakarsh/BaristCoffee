const jwt = require('jsonwebtoken');
const { getAllFeedbacks } = require('../utils/awsDynamo');

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET || 'baristsecret';

async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'email and password required' });

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ role: 'admin', email }, JWT_SECRET, { expiresIn: '12h' });
    return res.json({ ok: true, token });
  }

  return res.status(401).json({ error: 'invalid credentials' });
}

async function getFeedbacks(req, res) {
  try {
    const items = await getAllFeedbacks(5000);
    return res.json({ ok: true, feedbacks: items });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
}

module.exports = { login, getFeedbacks };

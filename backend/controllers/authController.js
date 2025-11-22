const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const { createOrUpdateUser, getHistoryByUser } = require('../utils/awsDynamo');

// Verify Google id token using Google's tokeninfo endpoint
async function verifyGoogleToken(idToken) {
  try {
    const res = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${idToken}`);
    // response contains email, sub (user id), name, aud (client id)
    return res.data;
  } catch (err) {
    console.error('Google token verify error', err.response?.data || err.message);
    return null;
  }
}

async function googleLogin(req, res) {
  try {
    const { idToken } = req.body;
    if (!idToken) return res.status(400).json({ error: 'idToken required' });

    const info = await verifyGoogleToken(idToken);
    if (!info) return res.status(401).json({ error: 'invalid idToken' });

    // Optional: verify audience matches your GOOGLE_CLIENT_ID
    if (process.env.GOOGLE_CLIENT_ID && info.aud !== process.env.GOOGLE_CLIENT_ID) {
      console.warn('Google token aud mismatch', info.aud);
      // continue but you may reject in production
    }

    const userId = info.sub || uuidv4();
    const email = info.email;
    const name = info.name || '';

    const user = await createOrUpdateUser({ userId, email, name });

    // Return user object (frontend can store userId locally)
    return res.json({ ok: true, user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
}

async function getHistory(req, res) {
  try {
    const userId = req.params.userId;
    if (!userId) return res.status(400).json({ error: 'userId required' });

    const items = await getHistoryByUser(userId, 200);
    return res.json({ ok: true, history: items });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
}

module.exports = { googleLogin, getHistory };
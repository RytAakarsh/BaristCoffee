// const jwt = require('jsonwebtoken');
// const JWT_SECRET = process.env.JWT_SECRET || 'baristsecret';

// module.exports = function (req, res, next) {
//   const auth = req.headers.authorization;
//   if (!auth) return res.status(401).json({ error: 'authorization required' });
//   const token = auth.replace('Bearer ', '');
//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     if (decoded.role !== 'admin') return res.status(403).json({ error: 'forbidden' });
//     next();
//   } catch (err) {
//     return res.status(401).json({ error: 'invalid token' });
//   }
// };

// adminAuth.js (AUTH DISABLED – always allow access)

module.exports = function (req, res, next) {
  // Always allow the admin dashboard access
  next();
};

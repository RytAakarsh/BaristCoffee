const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Routes
const chatRoutes = require('./routes/chat');
const feedbackRoutes = require('./routes/feedback');
const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');

app.use('/chat', chatRoutes);
app.use('/feedback', feedbackRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.json({ ok: true, msg: 'Barist AI Backend Running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
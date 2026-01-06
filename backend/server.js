// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const path = require('path');

// dotenv.config();
// const app = express();
// app.use(
//   cors({
//     origin: "*",    // or your real frontend domain when deployed
//     methods: "GET,POST,PUT,DELETE",
//     allowedHeaders: "Content-Type, Authorization",
//   })
// );

// app.use(express.json());

// // Routes
// const chatRoutes = require('./routes/chat');
// const feedbackRoutes = require('./routes/feedback');
// const adminRoutes = require('./routes/admin');
// const authRoutes = require('./routes/auth');

// app.use('/chat', chatRoutes);
// app.use('/feedback', feedbackRoutes);
// app.use('/admin', adminRoutes);
// app.use('/auth', authRoutes);

// app.get('/', (req, res) => {
//   res.json({ ok: true, msg: 'Barist AI Backend Running' });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');

// dotenv.config();
// const app = express();

// // CORS
// app.use(
//   cors({
//     origin: "*", // change this when deploying
//     methods: "GET,POST,PUT,DELETE",
//     allowedHeaders: "Content-Type, Authorization",
//   })
// );

// app.use(express.json());

// // ROUTES
// const chatRoutes = require('./routes/chat');
// const feedbackRoutes = require('./routes/feedback');
// const adminRoutes = require('./routes/admin');
// const authRoutes = require('./routes/auth');

// app.use('/chat', chatRoutes);
// app.use('/feedback', feedbackRoutes);
// app.use('/admin', adminRoutes);  // <--- your admin dashboard API
// app.use('/auth', authRoutes);

// // ROOT ROUTE
// app.get('/', (req, res) => {
//   res.json({
//     ok: true,
//     msg: "Barist AI Backend Running",
//   });
// });

// // START SERVER
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');

// dotenv.config();
// const app = express();

// // CORS
// // app.use(
// //   cors({
// //     origin: "*", // change this when deploying
// //     methods: "GET,POST,PUT,DELETE",
// //     allowedHeaders: "Content-Type, Authorization",
// //   })
// // );

// app.use(
//   cors({
//     origin: [
//       "https://mvp.baristai.online",
//       "http://localhost:3000"
//     ],
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true
//   })
// );

// /* IMPORTANT for preflight */
// app.options("*", cors());

// app.use(express.json());

// app.use(express.json());

// // ROUTES
// const chatRoutes = require('./routes/chat');
// const feedbackRoutes = require('./routes/feedback');
// const adminRoutes = require('./routes/admin');
// const authRoutes = require('./routes/auth');
// const { getCoffeeAnswer, resetSession } = require("./utils/geminiClient");

// // reset on frontend refresh
// app.post("/reset-session", (req, res) => {
//   resetSession();
//   res.json({ status: "reset_ok" });
// });


// app.use('/chat', chatRoutes);
// app.use('/feedback', feedbackRoutes);
// app.use('/admin', adminRoutes);  // <--- your admin dashboard API
// app.use('/auth', authRoutes);

// // ROOT ROUTE
// app.get('/', (req, res) => {
//   res.json({
//     ok: true,
//     msg: "Barist AI Backend Running",
//   });
// });

// // START SERVER
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// CORS Configuration
app.use(cors({
  origin: [
    "https://mvp.baristai.online",
    "http://localhost:3000"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200 // For legacy browser support
}));

// Handle preflight for ALL routes
app.options('/*', cors()); // This should be BEFORE other middleware

app.use(express.json());

// Remove duplicate express.json() line
// app.use(express.json()); // <- Remove this duplicate line

// ROUTES
const chatRoutes = require('./routes/chat');
const feedbackRoutes = require('./routes/feedback');
const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');
const { getCoffeeAnswer, resetSession } = require("./utils/geminiClient");

// reset on frontend refresh
app.post("/reset-session", (req, res) => {
  resetSession();
  res.json({ status: "reset_ok" });
});

app.use('/chat', chatRoutes);
app.use('/feedback', feedbackRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

// ROOT ROUTE
app.get('/', (req, res) => {
  res.json({
    ok: true,
    msg: "Barist AI Backend Running",
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

// START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
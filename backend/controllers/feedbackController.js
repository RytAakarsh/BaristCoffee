const { saveFeedback: saveFeedbackToDB } = require('../utils/awsDynamo');

async function saveFeedback(req, res) {
  try {
    const { userId, stars, yearOfBirth, sex, country, state, comments } = req.body;

    if (typeof stars === 'undefined') {
      return res.status(400).json({ error: 'stars required' });
    }

    const item = await saveFeedbackToDB({
      userId,
      stars,
      yearOfBirth,
      sex,
      country,
      state,
      comments,
    });

    return res.json({ ok: true, feedback: item });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
}

module.exports = { saveFeedback };

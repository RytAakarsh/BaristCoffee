const { getCoffeeAnswer } = require('../utils/geminiClient');
const { saveChat } = require('../utils/awsDynamo');

async function handleChat(req, res) {
  try {
    const { userId, message } = req.body;
    if (!message) return res.status(400).json({ error: 'message is required' });

    const answer = await getCoffeeAnswer(message);

    // save history (if userId provided)
    if (userId) {
      await saveChat({ userId, prompt: message, response: answer });
    }

    return res.json({ answer });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
}

module.exports = { handleChat };

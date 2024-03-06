// pages/api/translate.js

const translate = require('google-translate-api-x');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text, to } = req.body;
    try {
      const translatedText = await translate(text, { to });
      res.status(200).json({ translatedText });
    } catch (error) {
      console.error('Translation error:', error);
      res.status(500).json({ error: 'Translation failed' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

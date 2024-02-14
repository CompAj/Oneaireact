const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());

const openAIKey = process.env.API_KEY;

app.post('/api/generate', async (req, res) => {
  const prompt = req.body.prompt;
  
  if (!prompt) {
    return res.status(400).send('Prompt is required');
  }

  try {
    const response = await axios.post('https://api.openai.com/v1/completions', {
      model: 'gpt-3.5-turbo', // Adjust model as per requirement
      prompt: prompt,
      max_tokens: 100,
    }, {
      headers: {
        'Authorization': `Bearer ${openAIKey}`
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    res.status(500).send('Error processing your request');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
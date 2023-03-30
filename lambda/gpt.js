const axios = require('axios');

const API_URL = 'https://api.openai.com/v1/chat/completions';
const TOKEN = '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';

async function gpt(msg) {
  const data ={
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": msg}]
  };

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${TOKEN}`
  };

  try {
    const response = await axios.post(API_URL, data, { headers });
    let r= response.data.choices[0].message.content;
    // r= r.replace('\n', ' ');
    return r;
  } catch (error) {
    console.log(error);
    return "Lo siento no pude conectarme con CHAT GPT, intentalo de nuevo."
  }
}

module.exports = gpt;
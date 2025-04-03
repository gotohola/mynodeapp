const express = require('express');
const Redis = require('ioredis');

const app = express();
const PORT = process.env.PORT || 3000;
const redisHost = process.env.REDIS_HOST || 'localhost';
const redis = new Redis({ host: redisHost });

app.get('/', (req, res) => {
  res.send('Hello from myNodeApp!');
});

app.get('/count', async (req, res) => {
  try {
    // incrementa una key "visits" en Redis
    const newCount = await redis.incr('visits');
    res.send(`Visitas: ${newCount}`);
  } catch (error) {
    res.status(500).send('Error conectando con Redis');
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const redis = require('redis');

// for testing error=handling by docker-compose
// const process = require('process');

const app = express();
const client = redis.createClient({
  host: 'redis-server',
  port: 6379
});

client.set('visits', 0);

app.get('/', (req, res) => {
  // process.exit(1);
  client.get('visits', (err, visits) => {
    res.send(`Number of Visits: ${visits}`);
    client.set('visits', +visits + 1);
  });
});

app.listen(8081, () => {
  console.log('listening...');
});

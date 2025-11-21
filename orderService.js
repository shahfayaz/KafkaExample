const express = require('express');
const { kafka } = require('./kafkaClient');

const app = express();
app.use(express.json());

// Create a Kafka producer
const producer = kafka.producer();

// Endpoint to place an order
app.post('/place-order', async (req, res) => {
  const order = req.body;

  console.log('[Order Service] Order placed:', order);

  // Publish the "OrderPlaced" event to Kafka
  await producer.connect();
  await producer.send({
    topic: 'OrderPlaced',
    messages: [{ value: JSON.stringify(order) }],
  });

  res.status(200).json({ message: 'Order placed successfully!', order });
});

// Start the server
const PORT = 3001;
app.listen(PORT, async () => {
  console.log(`[Order Service] Server running on http://localhost:${PORT}`);
  await producer.connect(); // Connect the producer on server start
});
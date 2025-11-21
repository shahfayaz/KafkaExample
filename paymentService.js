const { kafka } = require('./kafkaClient');

async function processPayment(order) {
  console.log(`[Payment Service] Processing payment for order: ${order.id}`);
  // Simulate payment processing logic
  console.log(`[Payment Service] Payment processed successfully.`);
}

// Create a Kafka consumer
const consumer = kafka.consumer({ groupId: 'payment-group' });

async function start() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'OrderPlaced', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const order = JSON.parse(message.value.toString());
      processPayment(order);
    },
  });
}

start().catch(console.error);
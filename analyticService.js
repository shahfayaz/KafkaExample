const { kafka } = require('./kafkaClient');

async function trackMetrics(order) {
  console.log(`[Analytics Service] Tracking metrics for order: ${order.id}`);
  // Simulate tracking logic
  console.log(`[Analytics Service] Metrics tracked successfully.`);
}

// Create a Kafka consumer
const consumer = kafka.consumer({ groupId: 'analytics-group' });

async function start() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'OrderPlaced', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const order = JSON.parse(message.value.toString());
      trackMetrics(order);
    },
  });
}

start().catch(console.error);
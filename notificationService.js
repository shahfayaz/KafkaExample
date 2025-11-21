const { kafka } = require('./kafkaClient');

async function sendNotification(order) {
  console.log(`[Notification Service] Sending notification for order: ${order.id}`);
  // Simulate sending a notification (e.g., email or SMS)
  console.log(`[Notification Service] Notification sent successfully.`);
}

// Create a Kafka consumer
const consumer = kafka.consumer({ groupId: 'notification-group' });

async function start() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'OrderPlaced', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const order = JSON.parse(message.value.toString());
      sendNotification(order);
    },
  });
}

start().catch(console.error);
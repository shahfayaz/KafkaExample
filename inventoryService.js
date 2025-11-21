const { kafka } = require('./kafkaClient');

async function updateInventory(order) {
  console.log(`[Inventory Service] Updating inventory for order: ${order.id}`);
  // Simulate inventory update logic
  console.log(`[Inventory Service] Inventory updated successfully.`);
}

// Create a Kafka consumer
const consumer = kafka.consumer({ groupId: 'inventory-group' });

async function start() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'OrderPlaced', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const order = JSON.parse(message.value.toString());
      updateInventory(order);
    },
  });
}

start().catch(console.error);
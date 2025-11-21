const { Kafka } = require('kafkajs');

// Create a Kafka client
const kafka = new Kafka({
  clientId: 'microservices-app',
  brokers: ['localhost:9092'], // Kafka broker address
});

// Export producer and consumer
module.exports = { kafka };
import express from 'express';
import { Kafka } from 'kafkajs';

import routes from './routes';

const app = express();

const kafka = new Kafka({
    clientId: 'api',
    brokers: ['kafka:9092']
});

app.use(routes);

async function run() {
    app.listen(3333);
    await producer.connect();
}

run().catch(console.error);

const producer = kafka.producer();


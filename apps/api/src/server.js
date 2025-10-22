require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { connectMongo } = require('./db');

const customers = require('./routes/customers');
const products  = require('./routes/products');
const orders    = require('./routes/orders');
const analytics = require('./routes/analytics');
const orderStream = require('./sse/order-status');
const assistantHandler = require('./assistant/engine');

const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(require('path').join(__dirname, '..', 'public')));

app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'api', time: new Date().toISOString() }));

app.use('/api/customers', customers);
app.use('/api/products',  products);
app.use('/api/orders',    orders);
app.use('/api/analytics', analytics);
app.get('/api/orders/:id/stream', orderStream);
app.post('/api/assistant', assistantHandler);

app.use((_req, res) => res.status(404).json({ error: { message: 'Not Found' } }));
app.use((err, _req, res, _next) => { console.error(err); res.status(500).json({ error: { message: err.message || 'Internal Server Error' } }); });

const PORT = process.env.PORT || 8080;
connectMongo().then(() => {
  app.listen(PORT, () => console.log('🚀 Server running on http://localhost:' + PORT));
}).catch((e) => {
  console.error('❌ Mongo connection failed:', e);
  process.exit(1);
});

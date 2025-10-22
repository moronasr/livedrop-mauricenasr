const { ObjectId } = require('mongodb');
const { getDb } = require('../db');

function sseHeaders(res) {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders?.();
}

function send(res, data) {
  res.write('event: message\n');
  res.write('data: ' + JSON.stringify(data) + '\n\n');
}

module.exports = async function orderStream(req, res, next) {
  try {
    const db = getDb();
    const orderId = new ObjectId(String(req.params.id));
    const order = await db.collection('orders').findOne({ _id: orderId });
    if (!order) return res.status(404).end();

    sseHeaders(res);
    send(res, { status: order.status, at: new Date(), orderId });

    const flow = ['PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED'];
    let idx = flow.indexOf(order.status);
    if (idx < 0) idx = 0;

    const timer = setInterval(async () => {
      if (idx >= flow.length - 1) {
        clearInterval(timer);
        res.end();
        return;
      }
      idx++;
      const status = flow[idx];
      await db.collection('orders').updateOne(
        { _id: orderId },
        { $set: { status, updatedAt: new Date() } }
      );
      send(res, { status, at: new Date(), orderId });
      if (status === 'DELIVERED') {
        clearInterval(timer);
        res.end();
      }
    }, 3000);

    req.on('close', () => clearInterval(timer));
  } catch (e) {
    next(e);
  }
};

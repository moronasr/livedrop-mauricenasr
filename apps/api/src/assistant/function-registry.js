const { ObjectId } = require('mongodb');
const { getDb } = require('../db');

module.exports = {
  async getOrderStatus({ orderId }) {
    const db = getDb();
    const doc = await db.collection('orders').findOne({ _id: new ObjectId(orderId) });
    if (!doc) return { error: 'not_found' };
    return { status: doc.status, orderId: String(doc._id), total: doc.total };
  },

  async searchProducts({ query = '', limit = 5 }) {
    const db = getDb();
    const q = query ? { $text: { $search: String(query) } } : {};
    const docs = await db.collection('products').find(q).limit(Number(limit)).toArray();
    return docs.map(d => ({ id: String(d._id), name: d.name, price: d.price }));
  },

  async getCustomerOrders({ email, limit = 5 }) {
    const db = getDb();
    const user = await db.collection('customers').findOne({ email });
    if (!user) return [];
    const orders = await db.collection('orders')
      .find({ customerId: user._id })
      .sort({ createdAt: -1 })
      .limit(Number(limit))
      .toArray();
    return orders.map(o => ({ id: String(o._id), total: o.total, status: o.status }));
  }
};

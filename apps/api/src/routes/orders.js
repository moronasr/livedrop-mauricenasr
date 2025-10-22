const router = require('express').Router();
const { ObjectId } = require('mongodb');
const { getDb } = require('../db');

// ✅ POST /api/orders
router.post('/', async (req, res, next) => {
  try {
    const db = getDb();
    const { customerId, items } = req.body || {};
    if (!customerId || !Array.isArray(items) || !items.length) {
      return res.status(400).json({ error: 'customerId and items are required' });
    }

    const prodIds = items.map(i => new ObjectId(String(i.productId)));
    const prods = await db.collection('products').find({ _id: { $in: prodIds } }).toArray();

    const lines = items.map(i => {
      const p = prods.find(pp => String(pp._id) === String(i.productId));
      const qty = Number(i.qty || 1);
      const lineTotal = +(p.price * qty).toFixed(2);
      return { productId: p._id, sku: p.sku, name: p.name, price: p.price, qty, lineTotal };
    });

    const total = +lines.reduce((s, l) => s + l.lineTotal, 0).toFixed(2);

    const doc = {
      customerId: new ObjectId(String(customerId)),
      items: lines,
      total,
      currency: 'USD',
      status: 'PENDING',
      statusHistory: [{ status: 'PENDING', at: new Date() }],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const { insertedId } = await db.collection('orders').insertOne(doc);
    const saved = await db.collection('orders').findOne({ _id: insertedId });
    res.status(201).json(saved);
  } catch (e) { next(e); }
});

// ✅ GET /api/orders?customerId=...
router.get('/', async (req, res, next) => {
  try {
    const db = getDb();
    const { customerId } = req.query;
    const q = customerId ? { customerId: new ObjectId(String(customerId)) } : {};
    const docs = await db.collection('orders').find(q).sort({ createdAt: -1 }).toArray();
    res.json(docs);
  } catch (e) { next(e); }
});

// ✅ GET /api/orders/:id
router.get('/:id', async (req, res, next) => {
  try {
    const db = getDb();
    const _id = new ObjectId(req.params.id);
    const doc = await db.collection('orders').findOne({ _id });
    if (!doc) return res.status(404).json({ error: 'Order not found' });
    res.json(doc);
  } catch (e) { next(e); }
});

module.exports = router;

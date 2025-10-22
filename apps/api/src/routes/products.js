const router = require('express').Router();
const { ObjectId } = require('mongodb');
const { getDb } = require('../db');

// ✅ GET /api/products?search=&tag=&sort=&page=&limit=
router.get('/', async (req, res, next) => {
  try {
    const db = getDb();
    const { search = '', tag, sort = 'new', page = 1, limit = 20 } = req.query;

    const q = {};
    if (search) q.$text = { $search: String(search) };
    if (tag) q.tags = String(tag);

    const sortMap = {
      new: { createdAt: -1 },
      old: { createdAt: 1 },
      price_asc: { price: 1 },
      price_desc: { price: -1 }
    };

    const docs = await db.collection('products')
      .find(q)
      .sort(sortMap[sort] || sortMap.new)
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit))
      .toArray();

    res.json(docs);
  } catch (e) { next(e); }
});

// ✅ GET /api/products/:id
router.get('/:id', async (req, res, next) => {
  try {
    const db = getDb();
    const _id = new ObjectId(req.params.id);
    const doc = await db.collection('products').findOne({ _id });
    if (!doc) return res.status(404).json({ error: 'Product not found' });
    res.json(doc);
  } catch (e) { next(e); }
});

module.exports = router;

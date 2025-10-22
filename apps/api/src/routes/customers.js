const router = require('express').Router();
const { ObjectId } = require('mongodb');
const { getDb } = require('../db');

// ✅ GET /api/customers?email=...&limit=...
router.get('/', async (req, res, next) => {
  try {
    const db = getDb();
    const { email, limit = 20 } = req.query;
    const q = email ? { email: String(email) } : {};
    const docs = await db.collection('customers').find(q).limit(Number(limit)).toArray();
    res.json(docs);
  } catch (e) { next(e); }
});

// ✅ GET /api/customers/:id
router.get('/:id', async (req, res, next) => {
  try {
    const db = getDb();
    const _id = new ObjectId(req.params.id);
    const doc = await db.collection('customers').findOne({ _id });
    if (!doc) return res.status(404).json({ error: 'Customer not found' });
    res.json(doc);
  } catch (e) { next(e); }
});

module.exports = router;

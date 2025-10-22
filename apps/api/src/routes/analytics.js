const router = require('express').Router();
const { getDb } = require('../db');

// ✅ GET /api/analytics/daily-revenue?from=&to=
router.get('/daily-revenue', async (req, res, next) => {
  try {
    const db = getDb();
    const { from, to } = req.query;
    const $match = {};

    if (from || to) {
      $match.createdAt = {};
      if (from) $match.createdAt.$gte = new Date(from);
      if (to) $match.createdAt.$lte = new Date(to);
    }

    const pipeline = [
      Object.keys($match).length ? { $match } : null,
      { $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          revenue: { $sum: "$total" },
          orderCount: { $count: {} }
        }
      },
      { $sort: { _id: 1 } },
      { $project: { _id: 0, date: "$_id", revenue: 1, orderCount: 1 } }
    ].filter(Boolean);

    const data = await db.collection('orders').aggregate(pipeline).toArray();
    res.json(data);
  } catch (e) { next(e); }
});

module.exports = router;

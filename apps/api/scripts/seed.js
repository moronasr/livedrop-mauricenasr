require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });
const { MongoClient, ObjectId } = require('mongodb');

async function seed() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db(process.env.DB_NAME);

  const customers = db.collection('customers');
  const products  = db.collection('products');
  const orders    = db.collection('orders');

  // clear old data
  await customers.deleteMany({});
  await products.deleteMany({});
  await orders.deleteMany({});

  // customers
  const c1 = { _id: new ObjectId(), name: 'Maurice', email: 'maurice@example.com', createdAt: new Date() };
  const c2 = { _id: new ObjectId(), name: 'Sara', email: 'sara@example.com', createdAt: new Date() };
  await customers.insertMany([c1, c2]);

  // products
  const p1 = { _id: new ObjectId(), sku: 'SKU-1', name: 'Smart Bottle', price: 49.99, createdAt: new Date() };
  const p2 = { _id: new ObjectId(), sku: 'SKU-2', name: 'Thermal Mug',  price: 29.99, createdAt: new Date() };
  await products.insertMany([p1, p2]);

  // one order
  const o1 = {
    _id: new ObjectId(),
    customerId: c1._id,
    items: [
      { productId: p1._id, name: p1.name, qty: 1, price: p1.price, lineTotal: p1.price }
    ],
    total: p1.price,
    currency: 'USD',
    status: 'DELIVERED',
    createdAt: new Date()
  };
  await orders.insertOne(o1);

  console.log('✅ Seeded customers, products, and orders');
  await client.close();
}

seed().catch(console.error);

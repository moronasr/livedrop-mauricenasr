require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME || 'store';

if (!uri) throw new Error('❌ MONGODB_URI is missing in apps/api/.env');

let _client;
let _db;

async function connectMongo() {
  if (_db) return _db;
  _client = new MongoClient(uri, { serverSelectionTimeoutMS: 10000 });
  await _client.connect();
  console.log('✅ Connected to MongoDB Atlas');
  _db = _client.db(dbName);
  return _db;
}

function getDb() {
  if (!_db) throw new Error('MongoDB not connected. Call connectMongo() first.');
  return _db;
}

async function closeMongo() {
  if (_client) await _client.close();
  _client = null;
  _db = null;
}

module.exports = { connectMongo, getDb, closeMongo };

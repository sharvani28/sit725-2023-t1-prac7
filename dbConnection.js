const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sharvanikandala:Sharvani28@cluster0.gnhkbv7.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

client.connect();

module.exports = client;

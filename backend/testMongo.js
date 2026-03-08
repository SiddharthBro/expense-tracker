const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = "mongodb+srv://admin:admin123@cluster0.5pw3o7a.mongodb.net/?retryWrites=true&w=majority&appName=cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("✅ MongoDB Connected Successfully!");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
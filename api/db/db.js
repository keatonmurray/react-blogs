const mongoose = require('mongoose');

const MONGO_URI = "mongodb+srv://kanthonymurray:5FUzj2RenM8PDUqp@cluster0.bo5ebd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectMongo() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
}

connectMongo();

mongoose.connection.on("error", (err) => {
  console.error("MongoDB Error:", err);
});
const mongoose = require("mongoose");

const connectionDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  console.log(`database connected on ${conn.connection.host}`);
};

module.exports= connectionDB;
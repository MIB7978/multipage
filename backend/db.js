const mongoose = require("mongoose");

function DBconnect() {
  const DB_URL =
    "mongodb+srv://admin:admin@cluster0.hauq4jn.mongodb.net/?retryWrites=true&w=majority";

  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    //   useFindAndModify:false,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    console.log("DB connected... ");
  });
}

module.exports = DBconnect;

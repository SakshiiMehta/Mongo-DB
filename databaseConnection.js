const mongoose = require("mongoose");

function DbConnection() {
  //Build a coonection file
  const DB_URL = process.env.MONGO_URI; //Assigning the Mongo DB url to the func

  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }); //These 2 keywords are used to connect our DB to our node or express
}

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Errors")); //bind means we are binding the particular error to the console. Its optional to use

db.once("open", function () {
  console.log("DB Connected !!");
});
module.exports = DbConnection;

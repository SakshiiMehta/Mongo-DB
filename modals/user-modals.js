const mongoose = require("mongoose"); //import mongoose

const Schema = mongoose.Schema; //schema is a class name and not var name. we are importing schema which is present in mongoose

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    issuedBook: {
      type: mongoose.Schema.Types.ObjectId,
      required: false, //because purchasing bk is not mandatory
      ref: "Books",
    },
    returnDate: {
      type: String,
      required: false,
    },
    subscriptionType: {
      type: String,
      required: true,
    },
    subscriptionDate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema); //Book is the name of the table

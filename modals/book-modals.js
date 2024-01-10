const mongoose = require("mongoose"); //import mongoose

const Schema = mongoose.Schema; //schema is a class name and not var name. we are importing schema which is present in mongoose

const bookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  } //timestamp => get to know the time when the insertion & updation has been made
);

module.exports = mongoose.model("Book", bookSchema); //Book is the name of the table

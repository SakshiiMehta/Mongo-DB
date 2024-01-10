const { UserModal, BookModal } = require("../modals/index.js");
const issuedBook = require("../dtos/book-dtos.js");

exports.getAllBooks = async (req, res) => {
  const books = await BookModal.find();

  if (books.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No book found",
    });
  }
  res.status(200).json({
    success: true,
    data: books,
  });
};
// OR
// exports.const getAllBooks = () => {};
exports.getSingleBookById = async (req, res) => {
  const { id } = req.params;
  const book = await BookModal.findById(id);

  if (!book) {
    return res.status(404).json({
      success: false,
      message: "Book not found",
    });
  }
  return res.status(200).json({
    success: true,
    message: "Found the book by their ID",
    data: book,
  });
};

exports.getAllIssuedBooks = async (req, res) => {
  const users = await UserModal.find({
    issuedBook: { $exists: true },
  }).populate("IssuedBook"); //Populate (bind) IssuedBook to users if issuedbook exists

  // Data Transfer Object (DTO)

  const issuedBooks = users.map((each) => new issuedBook(each));

  // const issuedBooks = users;.map((each)=> new issuedBook (each))
  if (issuedBooks.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No book have been issued yet",
    });
  }
  return res.status(200).json({
    success: true,
    message: "Users with the issued books",
    data: issuedBooks,
  });
};

exports.addNewBook = async (req, res) => {
  const { data } = req.body;

  if (!data) {
    return res.status(400).json({
      success: false,
      message: "No data to add a boook",
    });
  }
  await BookModal.create(data);
  const allBooks = await BookModal.find();
  if (book) {
    return res.status(404).json({
      success: false,
      message: "Book with the given ID already exists",
    });
  }
  return res.status(201).json({
    success: true,
    message: "Added Book Succeefully",
    data: allBooks,
  });
};

exports.updateBookById = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  const updatedBook = await BookModal.findOneAndUpdate(
    {
      _id: id,
    },
    data,
    {
      new: true,
    }
  );
  return res.status(200).json({
    success: true,
    message: "Updated a Book by their Id",
    data: updatedBook,
  });
};

// module.exports = { getAllBooks, getSingleBookById };

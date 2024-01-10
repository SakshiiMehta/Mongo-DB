// DTO-Book

class IssuedBook {
  _id; //_id because we want it to be auto generated
  name;
  genre;
  price;
  publisher;
  issuedBy;
  issuedDate;
  returnDate;

  // whenever we create obj, the constructor gets invoked = Parameterised Constructor
  constructor(user) {
    this._id = user.IssuedBook._id; // 'this'points to the current obj
    this._name = user.IssuedBook._name;
    this._genre = user.IssuedBook._genre;
    this._publisher = user.IssuedBook._publisher;
    this._issuedBy = user._issuedBy;
    this._issuedDate = user._issuedDate;
    this._returnDate = user._returnDate;
  }
}
module.exports = IssuedBook;

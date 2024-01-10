const { UserModal, BookModal } = require("../modals/index.js");

exports.getAllUsers = async (req, res) => {
  const users = await UserModal.find();

  if (users.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No users found in the database",
    });
  }
  res.status(200).json({
    success: true,
    message: "These are the user info",
    data: users,
  });
};

exports.getSingleUserById = async (req, res) => {
  const { id } = req.params;
  const user = await UserModal.findById({ _id: id });

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User does not exist",
    });
  }
  return res.status(200).json({
    success: true,
    message: "User Found",
    data: user,
  });
};

exports.deleteUser = async (res, req) => {
  const { id } = req.params;
  const user = await UserModal.deleteOne({ _id: id });

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User does not exist",
    });
  }

  return res
    .status(200)
    .json({ success: true, message: "Deleted user..", data: users });
};

// router.put("/:id", (req, res) => {
//   const { id } = req.params;
//   const { data } = req.body;

//   const user = users.find((each) => each.id === id); // save the data in var user ==> each means i want to go through each and every elements of that array
//   if (!user) {
//     return res.status(404).json({
//       success: false,
//       message: "User does not exist",
//     });
//   }
//   const updateUserData = users.map((each) => {
//     if (each.id === id) {
//       return {
//         ...each, // spread operator
//         ...data,
//       };
//     }
//     return each;
//   });
//   return res.status(200).json({
//     success: true,
//     message: "User updated",
//     data: updateUserData,
//   });
// });

exports.updateUserById = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  const updateUserData = await UserModal.findOneAndUpdate(
    { _id: id },
    { $set: { data } },
    {
      new: true,
    }
  );
};

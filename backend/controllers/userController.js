import User from "../models/User.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password").sort({ createdAt: -1 });
    return res.status(200).json(users);
  } catch (error) {
    console.error("Get users error:", error);
    return res.status(500).json({ message: "Failed to fetch users" });
  }
};

export const changeUserRole = async (req, res) => {
  try {
    const { role } = req.body;

    if (!["citizen", "officer", "admin"].includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "Role updated successfully",
      user,
    });
  } catch (error) {
    console.error("Change role error:", error);
    return res.status(500).json({ message: "Failed to update role" });
  }
};
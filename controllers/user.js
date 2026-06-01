const User = require("../models/user");

// GET all users
async function getAllUsers(req, res) {
    try {
        const users = await User.find({});
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}

// GET single user by ID
async function getUserById(req, res) {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}

// CREATE new user
async function createUser(req, res) {
    try {
        console.log("BODY:", req.body);

        const user = await User.create(req.body);

        return res.status(201).json(user);
    } catch (error) {
        console.log("ERROR:", error);

        return res.status(400).json({
            message: error.message,
        });
    }
}

// UPDATE user
async function updateUser(req, res) {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
}

// DELETE user
async function deleteUser(req, res) {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        return res.status(200).json({
            message: "User deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
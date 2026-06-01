const express = require("express");
const router = express.Router();
const User = require("../models/user"); // adjust path if needed
const { getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser, } = require("../controllers/user")
// GET all users
router.get("/", getAllUsers)

// GET single user by ID
router.get("/:id", getUserById)

// CREATE new user
router.post("/", createUser)
// UPDATE user by ID
router.patch("/:id", updateUser)

// DELETE user by ID
router.delete("/:id", deleteUser)

module.exports = router;
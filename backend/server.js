const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Todo = require("./models/Todo");

const app = express();
const PORT = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/todoDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Test route
app.get("/status", (req, res) => {
  res.json({ message: "Server is running" });
});

// Create Todo
app.post("/api/todos", async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Error creating todo" });
  }
});

// Get all Todos
app.get("/api/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching todos" });
  }
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

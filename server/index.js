const mongoose = require('mongoose');
const express = require('express');
const taskRoute = require('./routes/task.route.js');
const authRoute = require('./routes/auth.route.js'); // Import auth routes
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Task Routes
app.use('/api/tasks', taskRoute);

// Auth Routes
app.use('/api/auth', authRoute);  // Add this line to handle authentication routes

// Root route for testing
app.get('/', (req, res) => {
  res.send("Hello from Node API Server");
});

// MongoDB connection
mongoose.connect("mongodb+srv://ananya25622singh:se4CBCjFM9NihGWb@ionicdb.olf5l.mongodb.net/IonicNodeAPI?retryWrites=true&w=majority&appName=IonicDB")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Connection Failed", err.message);
  });

// Start server
app.listen(8100, () => {
  console.log('Server is running on port 8100');
});


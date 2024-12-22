const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const eventRoutes = require('./routes/eventRoutes');
const attendeeRoutes = require('./routes/attendeeRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = 5000;
const MONGO_URI = 'mongodb://localhost:27017/event-dashboard';

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/events', eventRoutes);
app.use('/api/attendees', attendeeRoutes);
app.use('/api/tasks', taskRoutes);

// MongoDB connection
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

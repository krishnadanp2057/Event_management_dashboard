const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// Create a task
router.post('/', async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get tasks for an event
router.get('/:eventId', async (req, res) => {
  try {
    const tasks = await Task.find({ eventId: req.params.eventId });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update task status
router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventPage from './pages/EventPage';
import AttendeePage from './pages/AttendeePage';
import TaskPage from './pages/TaskPage';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Event Management Dashboard</h1>
        <Routes>
          <Route path="/" element={<EventPage />} />
          <Route path="/attendees" element={<AttendeePage />} />
          <Route path="/tasks" element={<TaskPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

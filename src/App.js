import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/dashboard';
import Timetable from './pages/Timetable';
import Table from './pages/table';
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <Router>
      <Toaster/>
      <div className="flex flex-col ">
        {/* Navbar */}
        <Navbar />

        {/* Sidebar and Main Content */}
        <div className="flex">
          <Sidebar />

          {/* Main Content */}
          <div className="flex-1 bg-gray-100 p-1 ">
            <Routes>
              <Route path="/" element={<Timetable />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/table" element={<Table />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

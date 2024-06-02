// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './UserList';
import UserDetail from './UserDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="/" element={<UserList />} />
      </Routes>
    </Router>
  );
}

export default App;

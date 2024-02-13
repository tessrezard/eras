import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Root from './Root';
import Home from './pages/Home';

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="home" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
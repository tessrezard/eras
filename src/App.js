import React , { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Root from './Root';
import Home from './pages/Home';
import Services from './app/services/Services';

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
      <Services/>
    </div>
  );
}

export default App;
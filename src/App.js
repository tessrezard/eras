import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Root from './Root';
import HomePage from './pages/HomePage';
import Services from './app/services/Services';
import QuizPage from './pages/QuizPage';
import SortedByPage from './pages/SortedByPage';
import NotesPage from './pages/NotesPage ';
function App() {
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="home" element={<HomePage />} />
            <Route path="quiz" element={<QuizPage />} />
            <Route path="sorted_by" element={<SortedByPage />} />
            <Route path="notes" element={<NotesPage />} />

          </Route>
        </Routes>
      </Router>


      <Services/>

    </div>
  );
}

export default App;
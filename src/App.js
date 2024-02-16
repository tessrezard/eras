import React , { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Root from './Root';
import Home from './pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToken } from './store/thunks';

function App() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.token);


  useEffect(() => {
    // Dispatch the async thunk action when the component mounts
    dispatch(fetchToken());
  }, [dispatch]);

  // console.log(data);

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
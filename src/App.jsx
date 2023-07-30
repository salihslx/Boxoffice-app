import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Starred from './pages/Starred';

import MainLayout from './components/MainLayout';
import Show from './pages/Show';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/starred" element={<Starred />} />
        </Route>
        <Route path='/show/:showId' element={<Show/>} />
        <Route
          path="*"
          element={
            <div>
              <h3>Not found</h3>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

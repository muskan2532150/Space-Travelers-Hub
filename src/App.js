import './sass/app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Missions from './components/MissionContainer';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Rockets from './components/Rockets';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/Space-Travelers-Hub/" element={<Rockets />} />
          <Route path="/rocket" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

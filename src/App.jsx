import "./sass/app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/Store";
import Missions from "./components/Missions";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Rockets from "./components/Rockets";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={store}>
      <NavBar />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/rocket" element={<Rockets />} />
          <Route path="missions" element={<Missions />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

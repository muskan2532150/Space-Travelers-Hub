import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        {/* <Routes>
          <Route>
            <Route />
          </Route>
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

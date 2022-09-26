import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            {/* <Route path='/'  element={}/>
          <Route index element={}/>
          <Route path={}/> */}
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import CreateTask from "./pages/CreateTask";
import Day from "./pages/Day";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navbar">
          <Link to="/">Home Page</Link>
          <Link to="/createtask">Create Task</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createtask" element={<CreateTask />} />
          <Route path="/day/:id" element={<Day />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

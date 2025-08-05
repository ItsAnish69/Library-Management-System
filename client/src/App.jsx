import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Auth/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Auth/Register";
import Home from "./pages/Auth/Home";
import Demo from "./pages/Auth/demo";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/demo" element={<Demo/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

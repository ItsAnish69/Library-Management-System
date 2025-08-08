import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Auth/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Auth/Register";
import Home from "./pages/Auth/Home";
import Demo from "./pages/Auth/demo";
import ForgotPassword from "./pages/Auth/forgotPassword";
import ChangePassword from "./pages/Auth/changePassword";
import OtpVerify from "./pages/Auth/optverify";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/demo" element={<Demo/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/otp-verify" element={<OtpVerify/>}/>
        <Route path="/change-password" element={<ChangePassword/>}/>
        <Route path="/demo" element={<Demo/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

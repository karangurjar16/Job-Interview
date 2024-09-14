import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./auth/signup";
import Login from "./auth/login";
import OtpVerification from "./auth/verifyOtp";
import Dashboard from "./components/Dashboard";
import AddProfile from "./JobSeeker/AddProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/add-profile" element={<AddProfile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-otp" element={<OtpVerification />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

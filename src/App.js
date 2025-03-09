
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register/signup"
import Profile from "./components/my-account/profile"
import Header from "./components/Header/header"
// import Herosection from"./components/bookingsection/herosection"
import Login from "./components/login/signin";
// import Carsection from "./components/Carrentals/Carsection"




function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/profile" element={<Profile/>} />
        {/* < Route path="/bookingsection" element={<Herosection/>}/>
        <Route path="/carsection" element={<Carsection/>}/> */}
        
      </Routes>

    </Router>
  );
}

export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Auth/Signup";
import Landing from "./Pages/Public/Landing/LandingPage";
import SignIn from './Pages/Auth/SignIn'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="login" element={<SignIn/>}/>
      </Routes>
    </BrowserRouter>
  ); 
};

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Autherizer/Signup";
import Landing from "./Pages/public/Landing";
import SignIn from './Pages/public/SignIn'

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

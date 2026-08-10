import Signup from "./Pages/Autherizer/Signup";
import Landing from "./Pages/public/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  ); 
};

export default App;

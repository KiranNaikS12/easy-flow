import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Auth/Signup";
import Landing from "./Pages/Public/Landing/LandingPage";
import SignIn from './Pages/Auth/SignIn'
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./Pages/User/Home";
import PublicRoute from "./routes/publicRoute";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute/>}>
          <Route path="/" element={<Landing />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<SignIn />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

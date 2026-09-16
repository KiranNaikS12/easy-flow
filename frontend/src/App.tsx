import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./Pages/Auth/Signup";
import Landing from "./Pages/Public/Landing/LandingPage";
import SignIn from "./Pages/Auth/SignIn";

import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import OnboardingRoute from "./routes/OnboardingRoute";

import Home from "./Pages/Owner/Home";
import MemberList from "./Pages/Owner/ClientLists";
import TrainerLists from "./Pages/Owner/TrainerLists";
import AccountSetup from "./Pages/Owner/AccountSetup";

import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Landing />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<SignIn />} />
          </Route>

          <Route element={<OnboardingRoute />}>
            <Route path="account-setup" element={<AccountSetup />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/members" element={<MemberList />} />
            <Route path="/trainers" element={<TrainerLists />} />
          </Route>
        </Routes>
      </Router>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
    </>
  );
};

export default App;
import { useDispatch } from "react-redux";
import { clearCredentials } from "../../features/auth/authSlice";
import CustomSidebar from "../../components/Common/CustomSidebar";
import LandingHeader from "../../components/Headers/Landing";
import { CAvatar } from "@coreui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const Home = () => {

  const dispatch = useDispatch()

  const handleLogout = async () => {
    try {

      const res = await fetch('http://localhost:5000/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      })

      const response = await res.json()

      if (!res.ok) {
        console.log(response.message);
        return;
      }

      dispatch(clearCredentials());

    } catch (error) {
      console.log(error);
    }

  }


  return (
    <div className="flex w-full min-h-[clamp(600px,calc(100svh-64px),760px)]">
      <CustomSidebar />

      <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-md">
        <div className="flex items-center justify-center gap-3 px-4 py-3 sm:px-6 lg:px-8 ">

          {/* Search */}
          <div className="relative w-full max-w-3xl flex-1">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search anything..."
              className="h-11 w-full rounded-4xl bg-gray-200 border border-gray-300! pl-11 pr-4 text-sm text-gray-700 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-400! "
            />
          </div>

          {/* Avatar */}
          

        </div>
      </header>
    </div>
  )
}

export default Home

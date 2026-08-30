import { useDispatch } from "react-redux";
import { clearCredentials } from "../../features/auth/authSlice";


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
    <div>
      AT HOME
      <button className="border mx-4" onClick={handleLogout}>LOGOUT</button>
    </div>
  )
}

export default Home

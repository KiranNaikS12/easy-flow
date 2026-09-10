import CustomSidebar from "../../components/Common/CustomSidebar";
import ManagerHeader from "../../components/Headers/ManagerHeader";



const Home = () => {
  
  return (
    <div className="flex min-h-screen">
        <CustomSidebar/>

        {/* Header */}
        <ManagerHeader/>
    </div>
  )
}

export default Home

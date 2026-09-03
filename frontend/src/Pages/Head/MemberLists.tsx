import CustomSideBar from "../../components/Common/CustomSidebar"
import ManagerHeader from "../../components/Headers/ManagerHeader"
import CustomButton from '../../components/Common/CustomButton'
import { useState } from "react"
import ClientEntrollmentModal from "../../components/Manager/ClientEntrollmentModal"



const MemberList = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  

  return (
    <div className="flex min-h-screen">
      <CustomSideBar />

      <main className="flex flex-1 flex-col">
        <ManagerHeader />

        <div className="flex flex-1 justify-center items-center p-6">
          <CustomButton
            type="button"
            onClick={() => setIsOpen(true)}
            className="mt-2  rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 active:scale-[0.98] cursor-pointer">
            Register Clients
          </CustomButton>
        </div>
      </main>

      {/* Modal */}
      {isOpen && (
        <ClientEntrollmentModal/>
      )}
    </div>
  )
}

export default MemberList

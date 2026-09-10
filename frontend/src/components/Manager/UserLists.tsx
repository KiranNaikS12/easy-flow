import CustomSideBar from "../Common/CustomSidebar";
import ManagerHeader from "../Headers/ManagerHeader";
import CustomButton from '../../components/Common/CustomButton';
import EntrollmentModal from "./EnrollmentModal";
import useModal from "../../hooks/useModal";


interface UserListsProps {
  type: "trainer" | "member";
}


const UserLists = ({type}: UserListsProps) => {
  const {isOpen, open, close } = useModal()


  return (
    <div className="flex min-h-screen">
      <CustomSideBar />

      <main className="flex flex-1 flex-col">
        <ManagerHeader />

        <div className="flex flex-1 justify-center items-center p-6">
          <CustomButton
            type="button"
            onClick={open}
            className="mt-2  rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 active:scale-[0.98] cursor-pointer">
            {type === "trainer" ? "Register Trainers" : "Register Members"}
          </CustomButton>
        </div>
      </main>

      {/* Modal */}
      {isOpen && (
        <EntrollmentModal onClose={close} type={type}/>
      )}
    </div>
  )
}

export default UserLists
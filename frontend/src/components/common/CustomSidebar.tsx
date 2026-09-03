import React  from 'react'
import AppLogo from '../Logos/AppLogo';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut, } from '@fortawesome/free-solid-svg-icons';
import { HEAD_SIDE_BAR } from '../../constants/navlinks';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { clearCredentials } from '../../features/auth/authSlice';



const CustomSideBar = () => {
    const [collapsed, setCollapsed] = React.useState<boolean>(false);
    const { userInfo } = useSelector((state: RootState) => state.auth)
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
        <aside className={`h-screen bg-gray-200 text-black flex flex-col transition-[width] ease-in-out duration-300 ${collapsed ? 'w-20' : 'w-80'}`}>

            {/* Header */}
            <div className="h-24 flex items-center justify-between pl-6 overflow-hidden border-b border-gray-300">
                {!collapsed ? (
                    <>
                        <AppLogo />

                        <button onClick={() => setCollapsed(true)} className="p-2 rounded-md">
                            <X />
                        </button>
                    </>
                ) : (
                    <button onClick={() => setCollapsed(false)} className="flex justify-center items-center h-8 w-8 rounded-lg! bg-[#1C1F2E]">
                        <span className="h-2.5 w-2.5 rounded-full bg-theme" />
                    </button>
                )}
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-3 space-y-6 mt-8">
                {HEAD_SIDE_BAR.map((item) => (
                    <Link key={item.label} to={item.path} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 no-underline hover:bg-gray-300 hover:text-gray-900 transition-colors duration-200">
                        <FontAwesomeIcon icon={item.icon} className="w-5 text-gray-500" />
                        {!collapsed && <span className="text-md font-medium text-black">{item.label}</span>}
                    </Link>
                ))}
                <button onClick={handleLogout} className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 no-underline hover:bg-gray-300 hover:text-gray-900 transition-colors duration-200 cursor-pointer">
                    <FontAwesomeIcon icon={faSignOut} className="w-5 text-gray-500" />
                    {!collapsed && <span className="text-md font-medium text-black">Logout</span>}
                </button>
            </nav>

            {/* Footer */}
            {userInfo && (
                <div className={`${collapsed ? 'border-none' : 'border-t border-gray-300'}  p-4`}>

                    <div className='flex items-center gap-3'>
                        <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center font-bold">
                            {userInfo.email.slice(0, 1).toUpperCase()}
                        </div>

                        {!collapsed && (
                            <div>
                                <p className="text-sm text-gray-400">{userInfo?.email}</p>
                            </div>
                        )}
                    </div>

                </div>
            )}
        </aside>
    )
}

export default CustomSideBar
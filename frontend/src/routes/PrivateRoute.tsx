import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute:React.FC = () => {
    const { userInfo } = useSelector((state: RootState) => state.auth)
    
    if(!userInfo) {
        return <Navigate to="/login" replace/>
    }

    if(!userInfo.isProfileCompleted) {
        return <Navigate to="/account-setup" replace/>
    }

    return <Outlet/>
}

export default PrivateRoute

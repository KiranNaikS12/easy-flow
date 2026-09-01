import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute:React.FC = () => {
    const { userInfo } = useSelector((state: RootState) => state.auth)
    return userInfo ? <Outlet/> : <Navigate to="/login" replace/>
}

export default PrivateRoute

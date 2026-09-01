import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute:React.FC = () => {
    const { userInfo } = useSelector((state: RootState) => state.auth)
    return userInfo ?  <Navigate to="/home" replace/> : <Outlet/>
}

export default PublicRoute

import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'

const Navbar = () => {
    const {aToken,setAToken} = useContext(AdminContext)
    const {dToken,setDToken} = useContext(DoctorContext)
    const navigate = useNavigate()

    const logout = () => {
        navigate('/')
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
        dToken && setDToken('')
        dToken && localStorage.removeItem('dToken')
    }
  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
        <div className='flex items-center gap-2 text-xs'>
        <div className="flex items-center">
            <span onClick={()=>navigate('/')} className="ml-2 text-4xl font-bold text-navy-800 cursor-pointer" style={{ color: '#000080' }}>
            MediEase
            </span>
        </div>
            <p className='border px-2.5 py-0.5 rounded-full border-gray-600'>{aToken ?'Admin':'Doctor'}</p>
        </div>
        <button onClick={logout} className='bg-primary text-white text-sm px-10 py-2 rounded-full'>LogOut</button>
    </div>
  )
}

export default Navbar
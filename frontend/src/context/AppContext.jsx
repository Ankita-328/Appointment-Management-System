import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import {toast} from'react-toastify'

export const AppContext=createContext()

const AppContextProvider = (props) => {
    const currencySymbol = '$'
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [doctors,setDoctors] = useState([])
    const [token1,setToken1] = useState(localStorage.getItem('token1')?localStorage.getItem('token1'):false)
    const [userData,setUserData] = useState(false)

    const getDoctorsData = async() => {
        try{
            const {data} =await axios.get(backendUrl+'/api/doctor/list')
            if(data.success){
                setDoctors(data.doctors)
            }else{
                toast.error(data.message)
            }
        }
        catch(error){
            console.log(error)
            toast.error(error.message)
        }
    }
    const loadUserProfileData = async() => {
        try {
            const {data} = await axios.get(backendUrl+'/api/user/get-profile',{headers:{token1}})
            if(data.success){
                setUserData(data.userData)
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    const value = {
        doctors,getDoctorsData,currencySymbol,token1,setToken1,backendUrl,userData,setUserData,loadUserProfileData
    }
    useEffect(()=>{
        getDoctorsData()
    },[])
    useEffect(()=>{
        if(token1){
            loadUserProfileData()
        }
        else{
            setUserData(false)
        }
    },[token1])
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
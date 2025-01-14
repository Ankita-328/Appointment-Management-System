import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AdminContext = createContext()

const AdminContextProvider = (props) => {
    const [aToken,setAToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'');
    
    //if in localstorage atoken is preaent that means admin is logged in so in local storage we have atoken and in ui the login pg is removed as specified in app.jsx
    //while when atoken is not present in localstorage login pg is visible as specified in a app.jsx
    const [doctors,setDoctors] = useState([])
    const [appointments,setAppointments] = useState([])
    const [dashData,setDashData] = useState(false)

    const backendUrl = import.meta.env.VITE_BACKEND_URL 

    const getAllDoctors = async () => {
        try{
            const {data} = await axios.post(backendUrl+'/api/admin/all-doctors',{},{headers:{aToken}})
            if(data.success){
                setDoctors(data.doctors)
                console.log(data.doctors)
            }else{
                toast.error(data.message)
            }
        }
        catch(error){
            toast.error(error.message)
        }
    }
    const changeAvailability = async (docId) => {
        try{
            const {data} = await axios.post(backendUrl + '/api/admin/change-availability',{docId},{headers:{aToken}})
            if(data.success){
                toast.success(data.message)
                getAllDoctors()
            }else{
                toast.error(data.message)
            }
        }
        catch(error){
            toast.error(error.message)
        }
    }
    const getAllAppointments = async() => {
        console.log("getAllAppointments is being called");
        try {
            const {data} = await axios.get(backendUrl+'/api/admin/appointments',{headers:{aToken}})
            
            if(data.success){
                setAppointments(data.appointments)
                console.log(data.appointments);
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    const cancelAppointment = async (appointmentId) =>{
        try {
            const {data} = await axios.post(backendUrl+'/api/admin/cancel-appointment',{appointmentId},{headers:{aToken}})
            if(data.success){
                toast.success(data.message)
                getAllAppointments()
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    const getDashData = async () => {
        try {
            const {data} = await axios.get(backendUrl+'/api/admin/dashboard',{headers:{aToken}})
            if(data.success){
                setDashData(data.dashData)
                console.log(data.dashData);
                
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    const value = {//so that we can access state in any component
        aToken,setAToken,
        backendUrl,doctors,
        getAllDoctors,changeAvailability,
        appointments,setAppointments,
        getAllAppointments,
        cancelAppointment,
        dashData,setDashData,getDashData
    }
    return (
        <AdminContext.Provider value = {value}>
            {props.children}
        </AdminContext.Provider>
    )
}
export default AdminContextProvider
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

 

const UseAxiosSecure = () => {
    const { logOut } = useContext(AuthContext)
    const Navigate = useNavigate()
    const axiosSecure = axios.create({
        baseURL: 'https://bistro-boss-server-lemon-theta.vercel.app'
    });
    useEffect(() => {
        axiosSecure.interceptors.request.use( (config)=> {
            const token = localStorage.getItem('access-token')
            if (token) {
                config.headers.Authorization =`bearer ${token}`
            }
            return config;
          });
          axiosSecure.interceptors.response.use((response) => response,
            async (error)=> {
                if (error.response && (error.response.status=== 401 || error.response.status===403)) {
                    logOut()
                    Navigate('/')
             }
            return Promise.reject(error);
          });
    }, [logOut, Navigate, axiosSecure])
    
    return [axiosSecure]
};

export default UseAxiosSecure;
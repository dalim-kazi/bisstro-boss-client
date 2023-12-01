import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../provider/AuthProvider";
import UseAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";
 
 
const UseAdmin = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure]=UseAxiosSecure()
    const {data:isAdmin=[] ,isLoading:adminLoading} =useQuery({
        queryKey: ['isAdmin',user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            return res.data.admin
        }
    })
    return [isAdmin,adminLoading]
     
};

export default UseAdmin;
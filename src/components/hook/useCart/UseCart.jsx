import { useContext } from 'react';
import {useQuery } from 'react-query'
import { AuthContext } from '../../../provider/AuthProvider';
import UseAxiosSecure from '../UseAxiosSecure/UseAxiosSecure';
const UseCart = () => {
    const [axiosSecure]=UseAxiosSecure()
    const {user,loading}=useContext(AuthContext)
    const {refetch,data:cart=[],isLoading } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
           
            return res.data
        }
        
    })
    return [cart,refetch,isLoading] 
};

export default UseCart;
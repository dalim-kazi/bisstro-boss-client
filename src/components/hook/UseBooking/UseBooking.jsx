import { useContext } from "react";
import UseAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";
import { AuthContext } from "../../../provider/AuthProvider";
import { useQuery } from "react-query";


const UseBooking = () => {
    const [axiosSecure] = UseAxiosSecure()
    const {user}=useContext(AuthContext)
    const { data:bookings=[] } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
          const res = await axiosSecure.get(`/booking?email=${user?.email}`)
          return res.data
        }
    })
    return  [bookings]
};

export default UseBooking;
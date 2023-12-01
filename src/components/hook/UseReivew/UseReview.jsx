
import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../provider/AuthProvider";
import UseAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";

const UseReview = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure]=UseAxiosSecure()
    const { data: reviews=[], } = useQuery({
        queryKey: [ 'reviews',user?.email],
        queryFn: async () => {
            const res =await axiosSecure.get(`/reviews?email=${user?.email}`)
            console.log(res.data)
            return res.data
        }
    })
    
    return  [reviews]
};

export default UseReview;
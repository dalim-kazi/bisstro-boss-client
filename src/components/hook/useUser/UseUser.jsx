import { useQuery } from "react-query";
import UseAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";

 

const UseUser = () => {
    const [axiosSecure]=UseAxiosSecure()
    const {data:users=[],refetch} = useQuery(['allUser'], async () => {
        const res = await axiosSecure.get('/allUser')
        return res.data
    })

    return  [users,refetch]
    
};

export default UseUser;
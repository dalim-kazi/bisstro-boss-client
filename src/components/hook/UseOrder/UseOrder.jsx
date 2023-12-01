 
import UseAxiosSecure from '../UseAxiosSecure/UseAxiosSecure';
import { useQuery } from 'react-query';

const UseOrder = () => {
    const [axiosSecure] = UseAxiosSecure()
    const { data: allBooking = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats')
            return res.data
        }
    })
    return [allBooking]
};

export default UseOrder;
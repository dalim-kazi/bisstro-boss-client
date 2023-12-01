 
import { useQuery } from "react-query";

const UseMenu = () => {
    const {data:menus=[],isLoading,refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('https://bistro-boss-server-lemon-theta.vercel.app/menu')
             return res.json()
        }
    })
    return [menus,isLoading,refetch]
}
export default UseMenu;
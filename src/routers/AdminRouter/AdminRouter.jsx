import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../../components/hook/useAdmin/UseAdmin";

 
const AdminRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin,adminLoading]=UseAdmin()
    let location = useLocation();
    if (loading || adminLoading) {
        return <div className="mx-auto"><span className="loading loading-spinner loading-md mt-20"></span></div>
    }
    if (user && isAdmin) {
        return children
    }

    return  <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRouter;
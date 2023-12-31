import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

 

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    let location = useLocation();
    if (loading) {
        return <div className="mx-auto"><span className="loading loading-spinner loading-md mt-20"></span></div>
    }
    if (user) {
        return children
    }

    return  <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRouter;

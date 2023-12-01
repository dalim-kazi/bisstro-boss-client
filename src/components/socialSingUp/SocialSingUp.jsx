import { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

 
const SocialSingUp = () => {
    const { googleSingUp } = useContext(AuthContext)
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleGoogleSingUp = () => {
        googleSingUp()
            .then((data) => {
                const UserDetails = data.user
                const googleUser = { name: UserDetails.displayName, email: UserDetails.email, photoURL: UserDetails.photoURL }
                fetch('https://bistro-boss-server-lemon-theta.vercel.app/user', {
                    method: "POST",
                    headers: {
                      "content-type":"application/json"
                    },
                    body:JSON.stringify(googleUser)
                  })
                    .then(res => res.json())
                    .then(() => {
                       
                    })
                    navigate(from, { replace: true });
        })
    }
    return (
        <div className="-mt-5"> 
               <div className="divider"></div>
               <div className="text-center -mt-3">
                <button onClick={handleGoogleSingUp} className="mx-5"><FaGoogle></FaGoogle></button>
                <button className="mx-5"><FaFacebook></FaFacebook></button>
                <button className="mx-5"><FaGithub></FaGithub></button>
            </div>
        </div>
    );
};

export default SocialSingUp;
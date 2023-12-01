import { useContext, useEffect, useState } from 'react';
import loginCoverImg from '../../assets/others/authentication.png'
import loginImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialSingUp from '../../components/socialSingUp/SocialSingUp';
const Login = () => {
  const [disabled, setDisabled] = useState(true)
  const { singIn } = useContext(AuthContext)
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        loadCaptchaEnginge(6); 
    }, [])
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
      singIn(email, password)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Successful your account login',
            showConfirmButton: false,
            timer: 2000
          })
          navigate(from, { replace: true });
        })
        .catch((error) => {
          const errorCode = error.massage;
          console.log(errorCode)
          Swal.fire({
            icon: 'error',
            title: `${errorCode}`,
            text: 'Something went wrong!',
          })
        });
    }
    const handleCaptcha = (e) => {
        const user_captcha_value = e.target.value
        if (validateCaptcha(user_captcha_value)) {
             setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }
    return (
      <>
        <Helmet>
          <title>bistro-boss | login</title>
        </Helmet>
       <div className="hero min-h-screen w-full italic" style={{ backgroundImage: `url(${loginCoverImg})` }}>
  <div className="hero-content flex-col lg:flex-row">
 <div className="text-center lg:text-left">
       <img src={loginImg} alt="" />
    </div>
        <div className="card  w-full max-w-sm -mt-32 shadow-xl" >
         <form onSubmit={handleSubmit}>
         <div className="card-body">
                    <h1 className='font-bold text-center text-2xl'>Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
            </div>
            <div className="form-control -mt-3">
            <label className="label">
            < LoadCanvasTemplate />                  
          </label>
          <input onBlurCapture={handleCaptcha} type="captcha" placeholder="type the captcha above" className="input input-bordered" />
        </div>
        <div className="form-control mt-3">
        <input disabled={disabled} type="submit" className="btn btn-outline border-0 border-b-4 bg-white border-orange-400 text-orange-400" value="Login" />
        </div>
      </div>                 
       </form>
              <p className="text-center py-2 -mt-6">Create a new account<small className="text-lg  text-orange-400 underline hover:underline-offset-4"> <Link to={'/singUp'}>Registration</Link></small></p>
              <SocialSingUp></SocialSingUp>
    </div>
  </div>
</div>
      </>
    );
};

export default Login;
import { useForm } from "react-hook-form";
import loginCoverImg from '../../assets/others/authentication.png'
import loginImg from '../../assets/others/authentication2.png'
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialSingUp from "../../components/socialSingUp/SocialSingUp";
const SingUp = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const { createUser,ProfileUpdate } = useContext(AuthContext)
  const imgKey = import.meta.env.VITE_imgbb_key
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const onSubmit = data => {
    const image = data.file[0]
   
    const FormImage = new FormData()
    FormImage.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${imgKey}`
    fetch(url, {
      method: "POST",
      body:FormImage
    })
      .then(res => res.json())
      .then(imgData => {
        const imgURL = imgData.data.url 
        createUser(data.email, data.password)
        .then(()=> {
          ProfileUpdate(data.name,imgURL)
            .then(() => {
              const userDetails ={name:data.name ,email:data.email,photoURL:imgURL}
              fetch('https://bistro-boss-server-lemon-theta.vercel.app/user', {
                method: "POST",
                headers: {
                  "content-type":"application/json"
                },
                body:JSON.stringify(userDetails)
              })
                .then(res => res.json())
                .then(data => {
                  if (data.acknowledged) {
                    reset()
                    Swal.fire({
                      // position: 'top-center',
                      icon: 'success',
                      title: 'Create successful your account',
                      showConfirmButton: false,
                      timer: 2000
                    })
                  }
                  navigate(from, { replace: true });
              })
            })
            
        })
      .catch(error => {
        const errorCode = error.massage 
        Swal.fire({
          icon: 'error',
          title: `${errorCode}`,
          text: 'Something went wrong!',
        })
   })
     })
        
    
    };
    return (
        <>
            <Helmet>
                <title>bistro-boss | singUp</title>
            </Helmet>
        <div className="hero min-h-screen w-full italic" style={{ backgroundImage: `url(${loginCoverImg})` }}>
        <div className="hero-content flex-col lg:flex-row">
       <div className="text-center lg:text-left">
             <img src={loginImg} alt="" />
          </div>
              <div className="card  w-full max-w-sm -mt-32 shadow-xl" >
               <form onSubmit={handleSubmit(onSubmit)}>
               <div className="card-body">
                <h1 className='font-bold text-center text-2xl'>Registration Now</h1>
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text"  {...register("name", { required: true })} name='name' placeholder="enter your name" className="input input-bordered" />
                {errors.name?.type === 'required' && <p className="text-red-600" role="alert">Required your name</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"  {...register("email", { required: true })} placeholder="enter your email" className="input input-bordered" />
               {errors.email?.type === 'required' && <p className="text-red-600" role="alert">Required your email</p>}
              </div>
              <div className="form-control">
                <label className="label">
                <span className="label-text">password</span>
                </label>
                 <input type="password"  {...register("password", {
                  required: true,
                     minLength: 8,
                     maxLength: 20,
                    //  pattern:/ ^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]) $/
                 })} placeholder="enter your password" className="input input-bordered" />
                    {errors.password?.type === 'required' && <p className="text-red-600" role="alert">Required your password</p>}
                    {errors.password?.type === 'minLength' && <p className="text-red-600" role="alert">Password must be 8 characters</p>}
                    {errors.password?.type === 'maxLength' && <p className="text-red-600" role="alert">Password must be less than 20 characters</p>}
                    {/* {errors.password?.type === 'pattern' && <p className="text-red-600" role="alert">Enter password must be 1 uppercase  one special one digits one lowercase letters</p>} */}
                  </div>
                  <div className="form-control">
                <input type="file"  {...register("file", { required: true })}   className="file-input file-input-bordered file-input-xs w-full max-w-xs" />
               {errors.file?.type === 'required' && <p className="text-red-600" role="alert">Required your photo</p>}
              </div>
              <div className="form-control mt-3">
              <input  type="submit" className="btn btn-outline border-0 border-b-4 bg-white border-orange-400 text-orange-400" value="Registration" />
              </div>
            </div>                 
              </form>
              <p className="text-center py-2 -mt-6">Already have an account<small className="text-lg  text-orange-400 underline hover:underline-offset-4"> <Link to={'/login'}>Login</Link></small></p>
              <SocialSingUp></SocialSingUp>
          </div>
        </div>
      </div>
        </>
    );
};

export default SingUp;
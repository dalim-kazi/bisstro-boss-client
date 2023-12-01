import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import profile from '../../assets/others/profile.png'
import UseCart from "../../components/hook/useCart/UseCart";
import UseAdmin from "../../components/hook/useAdmin/UseAdmin";
const Navbar = () => {
  const { logOut, user } = useContext(AuthContext)
  const [isAdmin]=UseAdmin()
  const [cart] = UseCart()
  const total = cart?.reduce((sum, item) => item.price + sum, 0).toFixed(2)
  let navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {navigate('/')})
  }
    const navOPtion = <>
    <li><NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Home
      </NavLink></li>
      <li><NavLink
  to="/menu"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
 Menu
</NavLink></li>
<li><NavLink
  to="/order"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Order
      </NavLink></li> 
     
      {
        user ? <>
         {
        isAdmin?<><li><NavLink
        to="/dashboard/adminHome"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Dashboard
      </NavLink></li></>:<><li><NavLink
  to="/dashboard/userHome"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
 Dashboard
</NavLink></li></>
       }
        </> : <> <li><NavLink
    to="/login"
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "active" : ""
    }
  >
    Login
        </NavLink></li></>
  }
    
  </>
  const profileOption = <>
  {
    user ?<><button onClick={handleLogOut} className="btn btn-ghost">logOut</button></>:<> </>
  }
  </>
   
    return (
        <div className="navbar fixed bg-opacity-60 z-10 text-white bg-black max-w-screen-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-black rounded-box w-52">
        {navOPtion}
      </ul>
    </div>
    <a className="btn btn-ghost text-lime-400 uppercase text-xl underline hover:underline-offset-4 italic">Bistro boss</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-2 text-xl">
       {navOPtion}
    </ul>
  </div>
        <div className="navbar-end">
        <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator me-5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{ cart?.length}+</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-black shadow">
        <div className="card-body">
          
                  <span className="text-info text-lg">Total Price : {total}</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block"><Link to={'/dashboard/myCard'}>View cart</Link></button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
         {
                  user?.photoURL? <><img src={user?.photoURL} alt="" /></>:<><img src={profile} alt="" /></>
         }
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-black rounded-box w-52">
        <div className="mx-auto">
        <img className="w-20 rounded-full" src={user?.photoURL} alt="" />  
                <p className="text-xl mt-5">{user?.displayName}</p>
                <p className="text-md mt-2">{user?.email}</p>
              </div>
              {profileOption}
      </ul>
    </div>
  </div>
  
  </div>
</div>
    );
};

export default Navbar;
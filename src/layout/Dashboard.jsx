import { Link, Outlet } from "react-router-dom";
import { FaHome, FaShoppingCart, FaUsers, FaUtensils, FaAlignJustify, FaBook, } from 'react-icons/fa';
import { MdOutlineWallet,MdBookmarkBorder } from "react-icons/md";
import { FiMenu} from "react-icons/fi";
import UseCart from "../components/hook/useCart/UseCart";
import UseAdmin from "../components/hook/useAdmin/UseAdmin";
const Dashboard = () => {
  const [cart] = UseCart()
  const [isAdmin] = UseAdmin()
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
        <label htmlFor="my-drawer-2" className="btn btn-md text-lg text-yellow-600 w-20 drawer-button lg:hidden"><FiMenu></FiMenu></label>
     <Outlet></Outlet>
  </div> 
        <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-yellow-600 text-black font-medium">
            {/* Sidebar content here */}
            {
              isAdmin ? <>
                 <li><Link to={'/dashboard/adminHome'}><FaHome></FaHome> ADMIN HOME</Link> </li>
                <li><Link to={'/dashboard/allUser'}><FaUsers></FaUsers> ALL USER</Link> </li>
                <li><Link to={'/dashboard/addItem'}><FaUtensils></FaUtensils> ADD ITEM</Link> </li>
                <li><Link to={'/dashboard/manageItem'}><FaAlignJustify></FaAlignJustify> MANAGE ITEM</Link> </li>
                <li><Link to={'/dashboard/manageBooking'}><FaBook></FaBook> MANAGE BOOKING</Link> </li>
                <li><Link to={'/dashboard/myCard'}><FaShoppingCart></FaShoppingCart> My Card <span className="badge badge-sm indicator-item">{cart.length}+</span></Link></li>
              </> : <>
              <li><Link to={'/dashboard/userHome'}><FaHome></FaHome> USER HOME</Link></li>
              
             <li><Link><MdOutlineWallet></MdOutlineWallet> PAYMENT HISTORY</Link></li>            
                  <li><Link to={'/dashboard/myCard'}><FaShoppingCart></FaShoppingCart> My Card <span className="badge badge-sm indicator-item">{cart.length}+</span></Link></li>
                  <li><Link to={'/dashboard/addReview'}><MdOutlineWallet></MdOutlineWallet>ADD REVIEW</Link></li> 
                  <li><Link to={'/dashboard/myBooking'}><MdOutlineWallet></MdOutlineWallet>MY BOOKING</Link></li> 
              </>
            }
      <div className="divider"></div>
      <li><Link to={'/'}><FaHome></FaHome> HOME</Link></li>
        <li><Link to={'/menu'}><FiMenu></FiMenu>OUR MENU</Link></li>
        <li><Link to={'/order'}><MdBookmarkBorder></MdBookmarkBorder> OUR ORDER</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;

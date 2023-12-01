import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom";
import UseCart from "../hook/useCart/UseCart";
const FoodCard = ({ items }) => {
  const location =useLocation()
  const Navigate =useNavigate()
  const { image, price, recipe, name,_id,category} = items
  const { user } = useContext(AuthContext)
  const[,refetch]=UseCart()
  const handleAddToCard = () => {
    if (user) {
      const cardItems ={menu_Id:_id, name,price,image,category,email:user.email,displayName:user.displayName}
      fetch('https://bistro-boss-server-lemon-theta.vercel.app/carts', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        
        body:JSON.stringify(cardItems)
      })
        .then(res => res.json())
        .then(data => {
          if (data.acknowledged) {
            refetch()
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Order successful',
              showConfirmButton: false,
              timer: 1500
            })
          }
      })
    }
    else {
      Swal.fire({
        title: 'please login to order the food',

        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Please login'
      }).then((result) => {
        if (result.isConfirmed) {
          Navigate('/login',{state:{from:location}})
        }
      })
    }
  }
    return (
        <div className="card card-compact  bg-base-100 shadow-md">
            <figure><img className="w-full" src={image} alt="" /></figure>
            <p className="absolute right-0 bg-black p-1 px-3 rounded m-2 text-white font-semibold">${ price}</p>
  <div className="card-body">
                <h2 className="card-title">{ name}</h2>
    <p>{ recipe}</p>
    <div className="card-actions justify-center mt-3">
      <button  onClick={()=>handleAddToCard(items)} className="btn btn-outline border-0 border-b-4 bg-slate-100 border-orange-400 text-orange-400">ADD TO CARD</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;
import { Helmet } from "react-helmet";
import UseCart from "../../components/hook/useCart/UseCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTittle from "../../components/SectionTittle/SectionTittle";
import { Link } from "react-router-dom";

 

const MyCard = () => {
    const [cart,refetch,isLoading] = UseCart()
    const total = cart?.reduce((sum, item) => item.price + sum, 0).toFixed(2)
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://bistro-boss-server-lemon-theta.vercel.app/carts/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your order has been deleted.',
                                'success'
                              )
                          
                       }
                   })
            }
          })
  }
  if (isLoading) {
    return <div className="flex justify-center"><span className="loading loading-spinner text-warning"></span></div>
  }
    return (
        <div className="w-full md:ms-10">
         <Helmet>
            <title>Bistro Boss | My card</title>
        </Helmet>
        <SectionTittle Heading={"---What's Now---"} subHeading={"ADD AN  ITEM"}></SectionTittle>
            <div>
            <div className="flex justify-evenly gap-10  uppercase font-semibold  mb-5 text-orange-400">
                <p>Total Items : {cart?.length}</p>  
              <p>Total Price :  ${total} </p>
            </div>
            <div className="overflow-x-auto">
      <table className="table">
       {/* head */}
     <thead className="bg-orange-400 text-white">
      <tr>
        <th>
          #
        </th>
        <th>Food</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>action</th>
       <th>payment</th>
      </tr>
    </thead>
    <tbody className="font-bold">
      {/* row 1 */}
      {
            cart?.map((item,index) => <tr
            key={item._id} >
                <th> 
                    {index +1}
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="" />
                  </div>
                </div>
              </div>
            </td>
            <td>
             <p>{item.name}</p>
            </td>
                <td>${item.price}</td>
            <th>
              <button onClick={()=>handleDelete(item._id)} disabled={item.role === 'complete'} className="btn btn-md hover:bg-orange-400  text-white bg-red-500"><FaTrash></FaTrash></button>
              </th>
              <th>
                <>
                  {
                    item.role === 'complete' ?<Link to={'/dashboard/myBooking'}><button   className="btn btn-xs hover:bg-orange-400  text-white bg-green-500">Complete</button></Link>:<Link to={`/dashboard/payment/${item._id}`}><button  className="btn btn-xs  hover:bg-orange-400  text-white bg-red-500">pay</button></Link>
                  }
                </>
            </th>
          </tr>)                    
      }
    </tbody>
  </table>
</div>
           </div>
        </div>
    );
};

export default MyCard;
import { Helmet } from "react-helmet";
import { FaTrash, FaUserTie } from "react-icons/fa";
import Swal from "sweetalert2";
import UseUser from "../../components/hook/useUser/UseUser";
import SectionTittle from "../../components/SectionTittle/SectionTittle";

 
const AllUser = () => {
  const [users,refetch]=UseUser()
    const handleAdmin = (user) => {
        fetch(`https://bistro-boss-server-lemon-theta.vercel.app/user/admin/${user._id}`, {
            method:'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                if (data.modifiedCount>0) {
                    Swal.fire(
                        'Successful',
                         `${user.name} is an admin now`,
                        'success'
                      )
             }
        })
    }
    const handleDelete = (id) => {
        fetch(`https://bistro-boss-server-lemon-theta.vercel.app/userDelete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then((data) => {
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
    return (
        <>
            <Helmet>
                <title>bistro-boss | allUsers</title>
        </Helmet>
        <SectionTittle Heading={"---What's Now---"} subHeading={"ADD AN USERS"}></SectionTittle>
        
            <div className="overflow-x-auto">
   <table className="table ms-5">
    {/* head */}
    <thead className="bg-orange-400 text-white">
      <tr>
        <th>
           #
        </th>
        <th>Photo</th>
        <th>Name</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
             users?.map((user,index) => <tr
             key={user._id}>
                <th>
                  {index +1}
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.photoURL} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                      {user.name} 
                  <br/>
                     <span className="badge badge-ghost badge-sm -mt-5">{user.email}</span>
                </td>
                 <td>
                     {
                         user.role ==='admin' ? 'admin':<><button onClick={()=>handleAdmin(user)} className="btn btn-md hover:bg-orange-400  text-white bg-green-500"><FaUserTie></FaUserTie> </button></>
                     }
                </td>
                <th>
                <button onClick={()=>handleDelete(user._id)} className="btn btn-md hover:bg-orange-400  text-white bg-red-500"><FaTrash></FaTrash></button>
                </th>
              </tr>)                
       }
    </tbody>
  </table>
</div>
        </>
    );
};

export default AllUser;
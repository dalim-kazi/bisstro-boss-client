import { Helmet } from "react-helmet";
import SectionTittle from "../../components/SectionTittle/SectionTittle";
import UseMenu from "../../components/hook/useMenu/UseMenu";
import { BiEdit} from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Swal from "sweetalert2";
import UseAxiosSecure from "../../components/hook/UseAxiosSecure/UseAxiosSecure";
const ManageItem = () => {
    const [menus, , refetch] = UseMenu()
    const [axiosSecure] = UseAxiosSecure()
    
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
                axiosSecure.delete(`/menuItem/${id}`)
                    .then(data => {
                        if (data.data.deleteCount>0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your menu item has been deleted.',
                                'success'
                                  )
                     }
                })
            }
          })
    }

    return (
        <div>
            <Helmet>
                <title>bistro boss | manageItem</title>
            </Helmet>
            <div>
                  <SectionTittle Heading={'----Hurry Up----'} subHeading={'MANAGE ALL ITEM'}></SectionTittle>
            </div>
            <div>
            <div className="overflow-x-auto ms-5">
  <table className="table">
    {/* head */}
    <thead className="bg-orange-400 text-white">
      <tr>
        <th>
           #
        </th>
        <th>Item Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Edit Item</th>
        <th>Edit Item</th>
      </tr>
    </thead>
    <tbody>
                      
       {
            menus?.map((menu,index)=>  <tr key={menu._id}>
                 <th>
             {index +1}
        </th>
            <td>
                <div className="flex items-center space-x-3">
                 <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={menu.image} />
                         </div>
                        </div>
                            </div>
                            </td>
                             <td>
                    <p>{ menu.name}</p>
                         </td>
                <td>${menu.price}</td>
                <td><button className="btn btn-square btn-outline bg-orange-400 hover:bg-orange-600 text-white">
                <BiEdit></BiEdit>
                 </button></td>
             <th>
             <button onClick={()=>handleDelete(menu._id)} className="btn btn-square btn-outline bg-red-400 hover:bg-red-600 text-white">
             <RiDeleteBin5Line></RiDeleteBin5Line>
                 </button>
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

export default ManageItem;
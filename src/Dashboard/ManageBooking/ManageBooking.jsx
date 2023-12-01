import { Helmet } from "react-helmet";
import SectionTittle from "../../components/SectionTittle/SectionTittle";
import UseOrder from "../../components/hook/UseOrder/UseOrder";

 

const ManageBooking = () => {
    const [allBooking] = UseOrder()
    
    return (
        <div>
        <SectionTittle Heading={'---booking---'} subHeading={'BOOKING MANAGE'}></SectionTittle>
        <Helmet><title>bistro boss | manageBooking</title></Helmet>
            <div className="overflow-x-auto md:ms-5">
  <table className="table">
    {/* head */}
    <thead className="bg-orange-500 text-white">
      <tr>
        <th>
           #
        </th>
        <th>Photo</th>
        <th>Item Name</th>
        <th>Order Details</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
       
        {
        allBooking?.map((item,index)=><tr key={item._id}>
            <th>
               {index + 1}
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.menuImage} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>
              {item.category}
              <br/>
                <span className="badge badge-ghost badge-sm">{item.itemName}</span>
            </td>
            <td><span>{item.displayName}</span> <br /><span>{item.email}</span></td>
            <th>
                <button className="btn btn-ghost btn-xs bg-orange-500">Complete</button>
            </th>
          </tr>
         )                    
        } 
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageBooking;
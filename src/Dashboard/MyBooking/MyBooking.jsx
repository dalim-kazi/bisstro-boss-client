 
import SectionTittle from "../../components/SectionTittle/SectionTittle";
import { Helmet } from "react-helmet";
import UseBooking from "../../components/hook/UseBooking/UseBooking";

const MyBooking = () => {
   const [bookings]=UseBooking()
    
    return (
        <div>
        <SectionTittle Heading={'My Booking'} subHeading={'My Booking Item'}></SectionTittle>
        <Helmet><title>bistro boss | myBooking</title></Helmet>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
       <tr>
          <th>#</th>
          <th>photo</th>
         <th>Item Details</th>
        <th>details</th>
         <th>Price</th>
      </tr>
    </thead>
              <tbody>
                {
                  bookings?.map((item ,index)=> <tr key={item._id}>
                    <th>{index +1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-20 h-20">
                            <img src={item.menuImage} />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td><span>{item.category}</span> <br /><span>{item.itemName}</span></td>
                      <td><span>{item.UserName}</span> <br /><span>{item.email}</span> <br /><span>{item.transactionId}</span></td>
                      <td><span className="text-orange-300 font-semibold text-lg">${item.price}</span></td>
                   </tr>       )
                }           
                            
      </tbody>
      </table>
    </div>
           </div>
        </div>
    );
};

export default MyBooking;
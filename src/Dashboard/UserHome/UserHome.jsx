import SectionTittle from "../../components/SectionTittle/SectionTittle";
import UseBooking from "../../components/hook/UseBooking/UseBooking";
import UseReview from "../../components/hook/UseReivew/UseReview";
import UseCart from "../../components/hook/useCart/UseCart";
 
 
const UserHome = () => {
    const [bookings=[]] = UseBooking()
    const [cart = []] = UseCart()
    const [reviews=[]] = UseReview()
     
    return (
        <>
         <SectionTittle Heading={'---Home---'} subHeading={'USER HOME'}></SectionTittle>
        <div className="md:flex  md:ms-5">
        <div className="stats shadow bg-gradient-to-r from-purple-400 via-purple-400 to-purple-400 rounded-md me-2 mb-5">
        <div className="stat">
        <div className="stat-title text-white text-lg">Total Booking</div>
        <div className="stat-value">{cart?.length}</div>
       <div className="stat-desc">21% more than last month</div>
         </div>
            </div>
            <div className="stats shadow bg-gradient-to-r from-orange-400 via-orange-300 to-orange-200 me-2 rounded-md mb-5">
  
       <div className="stat">
      <div className="stat-title text-white text-lg">Total Payment</div>
                    <div className="stat-value">{bookings?.length}</div>
     <div className="stat-desc">21% more than last month</div>
        </div>
  
             </div>
    <div className="stats shadow bg-gradient-to-r from-rose-400 via-rose-300 to-rose-200 me-2 rounded-md mb-5">
  
        <div className="stat">
       <div className="stat-title text-white text-lg">Review</div>
                    <div className="stat-value">{reviews?.length}</div>
      <div className="stat-desc">21% more than last month</div>
      </div>
  
        </div>
            </div> 
        </>
    );
};

export default UserHome;
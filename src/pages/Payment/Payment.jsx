import { Elements } from "@stripe/react-stripe-js";
import CheekOut from "./CheekOut";
import { loadStripe } from "@stripe/stripe-js";
import UseCart from "../../components/hook/useCart/UseCart";

 

const Payment = () => {
    const [cart] = UseCart()
    const total = cart?.reduce((sum, currentValue) => currentValue.price + sum, 0).toFixed(2)
     const price =parseFloat(total)
    const stripePromise =loadStripe(import.meta.env.VITE_PAYMENT_GETAWAY_PK) 
    return (
        <div className="w-96 mx-auto mt-20 bg-white shadow-sm border-2 p-10 rounded-md">
             <Elements stripe={stripePromise}>
               <CheekOut price={price} cart={cart}></CheekOut>
           </Elements> 
        </div>
    );
};

export default Payment;
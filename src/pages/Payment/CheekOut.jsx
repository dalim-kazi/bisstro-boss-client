import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../../components/hook/UseAxiosSecure/UseAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

 
const CheekOut = () => {
  const {_id,price,name,image,category} = useLoaderData()
  const stripe = useStripe();
  const elements = useElements();
  const Navigate =useNavigate()
    const [cardError, setCardError] = useState('')
    const [axiosSecure] = UseAxiosSecure()
    const [clientSecret, setClientSecret] = useState("");
    const { user } = useContext(AuthContext)
  const [processing, setProcessing] = useState(false)
  const [TransactionId,setTransactionId]=useState('')
    useEffect(() => {
        axiosSecure.post('/create-payment-intent',{price})
            .then(res => {
           setClientSecret(res.data.clientSecret)
        })
    },[])
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
          setCardError(error.message)
        }
        else {
            setCardError('')
            console.log('PaymentMethod', paymentMethod);
        }
       setProcessing(true)

       stripe.confirmCardPayment(clientSecret, {
       payment_method: {
       card: card,
        billing_details: {
            email: user?.email || 'unknown',
            name:user?.displayName || 'anonymous'
        },
        },
     })
           .then((result) => {
             setProcessing(false)
               if (result.paymentIntent.status === 'succeeded') {
                   const transactionId = result.paymentIntent.id
                 setTransactionId(transactionId)
                 Swal.fire({
                   icon:'success',
                   title: `Successful your payment`,
                  text:`${transactionId}`,
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                 })
                 axiosSecure.patch(`/carts/${_id}`)
                 .then(()=>{})
                 const paymentDetails = {
                   email: user.email,
                   displayName:user.displayName,
                   itemId: _id,
                   itemName: name,
                   menuImage:image,
                   price,
                   category,
                   transactionId
                 }
                 axiosSecure.post('/payment', paymentDetails)
                   .then(() => {
                     Navigate('/dashboard/myBooking')
                 })
           }
  });
        
    }
    return (
      <>
       <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                  color: '#aab7c4',
                   
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
            />
            <p className="text-red-500 mt-5">{cardError}</p>
      <button className="btn btn-primary btn-xs mt-5" type="submit" disabled={!stripe || !clientSecret ||processing}>
        Pay
      </button>
        </form> 
        <p className="text-green mt-10 text-center">{TransactionId}</p>
      </>
    );
};

export default CheekOut;
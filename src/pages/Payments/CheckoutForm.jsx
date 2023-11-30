import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from './../../hooks/useAuth';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useUserInfo from "../../hooks/useUserInfo";

const CheckoutForm = ({courseInfo}) => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const userInfo = useUserInfo();
    const role = userInfo?.result?.role;
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const axiosSecure = useAxiosSecure();
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const totalPrice = courseInfo?.price;
    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosSecure, totalPrice])


    const handleSubmit = async(event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error');
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }
        // go student payment confirmation
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })



        if (confirmError) {
            console.log('confirm error');
        } else {
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id);

                // save to database
                const payment = {
                    email: user?.email,
                    name: user?.displayName,
                    date: new Date(),
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    courseId: courseInfo?._id,
                    courseName: courseInfo?.courseName,
                    courseImage: courseInfo?.courseImage,
                    instructorName: courseInfo?.instructorName,

                }
                const res = await axiosSecure.post('/payments', payment)
                    .then(res => {
                        if (res.data?.insertedId) {
                            Swal.fire({
                                title: "Successfully Done!",
                                text: "",
                                icon: "success"
                            });
                            navigate(`/${role}-dashboard/profile`)
                        }
                    })
            }
        }



    }

    return (
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
            <button className="btn rounded-md w-full text-white bg-primary hover:bg-primary mt-5 text-center" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
        </form>
    );
};

export default CheckoutForm;
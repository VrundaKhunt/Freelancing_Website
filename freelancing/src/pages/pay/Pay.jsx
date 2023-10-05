import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Pay.scss"
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import newRequest from "../../utils/newRequest.js";
import Checkout from "../../components/checkoutForm/Checkout";

const stripePromise = loadStripe("pk_test_51NtxTgSA0HmFswo6BAxRYUv84bJ8CB78wLkjG4R8HHYreKEKZPlWWqHF1s3RbNSuBsHSlmKY4O90ei28DCp8MAuT008BiYOXQQ")

const Pay = () =>{
    const [clientSecret, setClientSecret] = useState("");

    const {id} = useParams()

    useEffect(()=>{
       const makeRequest = async ()=>{
        try{
            const res = await newRequest.post(`/orders/create-payment-intent/${id}`)

            setClientSecret(res.data.clientSecret)
        }catch(err){
            console.log(err)
        }
       } 
       makeRequest()
    },[])

    const appearance = {
        theme:'stripe',
    };

    const options = {
        clientSecret,
        appearance,
    }

    return(
        <div className="pay">
        {
            clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                <Checkout/>
                </Elements>
            )
        }
        </div>
    )
}

export default Pay
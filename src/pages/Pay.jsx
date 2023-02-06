import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
const KEY =
  "pk_test_51MVJvqSCeseRfKbjiDyiGbYPjCjEEMtYkNkfjm4bLVT5cpEOhGuQOlnP6i5QF7jXO3PrN3aZHBcv1rQB2YNQx78Z006Sa1lRuv";

const Pay = () => {

  const [stripeToken, setStripeToken] = useState(null);


  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "https://e-commerce-dype.onrender.com/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout
        name="Logo Shop"
        image="https://image.pngaaa.com/743/6496743-middle.png"
        billingAddress
        shippingAddress
        description="Your total is $20"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
          }}

        >
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;

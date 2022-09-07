import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { StripeCardElementOptions } from "@stripe/stripe-js";
import axios from "axios";
import React, { useState } from "react";

const CARD_OPTIONS: StripeCardElementOptions = {
  iconStyle: "solid",
  style: {
    base: {
      backgroundColor: "#ffffffff",
      iconColor: "#480CA8",
      color: "#480CA8",
      fontWeight: 500,
      fontFamily: "Arial, sans-serif",
      fontSize: "20px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#bbbbbb" },
    },
    invalid: {
      iconColor: "#480CA8",
      color: "#cc1034",
      fontWeight: 520,
    },
  },
};

export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const async_handler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (stripe === null || elements === null)
      return "Stipe initialization failed";

    const cardElement = elements.getElement(CardElement);
    if (cardElement === null) return "Stripe method failed";

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) return "Failed to create payment";

    const { id } = paymentMethod;
    const response = await axios.post("url", {
      amount: 69420,
      id,
    });

    if (!response.data.success) return "Payment Request Failed";

    return undefined;
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    async_handler(e).then((err) => {
      if (err) {
        setError(err);
        return;
      }

      setSuccess(true);
    });
  };

  return (
    <>
      {!success ? (
        <form className="w-full laptop:w-1/3 p-2 laptop:pt-2 flex flex-col" onSubmit={handleSubmit}>
          <fieldset className="w-full">
            <div className="w-full">
              <CardElement id="card-element" className="w-full" options={CARD_OPTIONS}/>
            </div>
          </fieldset>
          <button className="bg-secondary-1 p-5 laptop:p-3 rounded-b-xl hover:bg-secondary-1/70 transition font-bold">Vreau să ajut!</button>
        </form>
      ) : (
        <div>
           <h2>You just bought a sweet spatula congrats this is the best decision of you're life</h2>
       </div> 
      )}
    </>
  );
}

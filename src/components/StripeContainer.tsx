import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY = "pk_live_51Lelt0DzQ9ITFC6ePgXn1K7p04819XFM02xNHwHHjlqSxak7ZHRqvWCWzveBo98CZqhBZBZ67xJJx6mfbarRleq700pxTd6Zl7";
const stripe = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return <Elements stripe={stripe}>
    <PaymentForm/>
  </Elements>;
}

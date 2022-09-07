import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY = "pk_test_51Lelt0DzQ9ITFC6e8Bh9ys4vsSIdH1RueL6cG5dNZQKgWzYQ3exTZk7gzdXeBpmFPcrhaZ9xmZzFmWsH2anipbpu00lV68C20C";
const stripe = loadStripe(PUBLIC_KEY, {});

export default function StripeContainer() {
  return <Elements stripe={stripe} >
    <PaymentForm/>
  </Elements>;
}

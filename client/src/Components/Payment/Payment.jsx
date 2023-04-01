import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

const baseUrl = "http://localhost:5000"

const Payment = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch(`${baseUrl}/config`).then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch(`${baseUrl}/create-payment-intent`, {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, []);

  // const options = {
  //   mode: 'payment',
  //   amount: 1099,
  //   currency: 'usd',
  //   // Fully customizable with appearance API.
  //   appearance: {/*...*/},
  // };

  const appearance = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#0570de',
      colorBackground: '#ffffff',
      colorText: '#30313d',
      colorDanger: '#df1b41',
      fontFamily: 'Ideal Sans, system-ui, sans-serif',
      spacingUnit: '5px',
      borderRadius: '4px',
    }
  };

  return (
    <React.Fragment>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{clientSecret, appearance}}>
          <CheckoutForm />
        </Elements>
      )}
    </React.Fragment>
  );
}

export default Payment;
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Stripe/CheckoutForm";

const stripePromise = loadStripe(
	"pk_test_51QycdWJNNr2748lUN9ik6NUHukQfupMAiOZ3YHundnUk8zuh9kuwJNJ2yMdWmufpeNJxSqYlW6jlPA1FB1U3nzpA007uYa3Hcg",
);

export default function CheckoutPage({ productId }) {
	const [clientSecret, setClientSecret] = useState("");

	useEffect(() => {
		fetch("http://localhost:5000/create-payment-intent", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ productId }),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.clientSecret) setClientSecret(data.clientSecret);
				else console.error("Erro ao obter clientSecret:", data.error);
			})
			.catch((err) => console.error("Erro no backend:", err));
	}, [productId]);

	const options = { clientSecret };

	return (
		<div className="container">
			<h1 className="title-checkout">Pagamento</h1>
			{clientSecret ? (
				<Elements stripe={stripePromise} options={options}>
					<CheckoutForm />
				</Elements>
			) : (
				<p>Carregando...</p>
			)}
		</div>
	);
}

import {
	useStripe,
	useElements,
	PaymentElement,
} from "@stripe/react-stripe-js";
import "../styles.css";
import { useState } from "react";
import { toast } from "react-toastify";

export default function CheckoutForm() {
	const stripe = useStripe();
	const elements = useElements();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	async function handleSubmit(event) {
		event.preventDefault();

		if (!stripe || !elements) return;

		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: "http://localhost:3000/success",
				payment_method_data: {
					billing_details: {
						name,
						email,
						phone,
					},
				},
			},
		});

		if (error) {
			toast.error(error.message);
		}
	}

	return (
		<form id="payment-form" onSubmit={handleSubmit}>
			<div className="form-layout">
				<div className="info-section">
					<div className="form-group">
						<label htmlFor="name">Nome</label>
						<input
							id="name"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							id="email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="phone">Telefone</label>
						<input
							id="phone"
							type="tel"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>
				</div>

				<div className="payment-section">
					<PaymentElement id="payment-element" />
					<button className="button" type="submit" disabled={!stripe}>
						Pagar
					</button>
				</div>
			</div>
		</form>
	);
}

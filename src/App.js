import { Routes, Route, useParams } from "react-router-dom";
import { Main } from "./components/Main";
import { Home } from "./components/Home";
import { Feedback } from "./components/Feedback";
import { ServicePlan } from "./components/ServicePlan";
import CheckoutPage from "./components/Stripe/CheckoutPage";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PaymentCompleted } from "./components/PaymentCompleted/index";
import { PaymentRefused } from "./components/PaymentRefused/index";

function CheckoutPageWrapper() {
	const { productId } = useParams();
	return <CheckoutPage productId={productId} />;
}

function App() {
	return (
		<>
			<ToastContainer position="top-right" autoClose={3000} theme="light" />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Main />
							<About />
							<Home />
							<Feedback />
							<ServicePlan />
							<Footer />
						</>
					}
				/>
				<Route path="/checkout/:productId" element={<CheckoutPageWrapper />} />
				<Route path="/success" element={<PaymentCompleted />} />
				<Route path="/refused" element={<PaymentRefused />} />
			</Routes>
		</>
	);
}

export default App;

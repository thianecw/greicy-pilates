import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { standardTheme } from "./styles/themes/standard";

import { BrowserRouter } from "react-router-dom";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
	"pk_test_51QycdWJNNr2748lUN9ik6NUHukQfupMAiOZ3YHundnUk8zuh9kuwJNJ2yMdWmufpeNJxSqYlW6jlPA1FB1U3nzpA007uYa3Hcg",
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={standardTheme}>
			<GlobalStyles />
			<BrowserRouter>
				<Elements stripe={stripePromise}>
					<App />
				</Elements>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
);

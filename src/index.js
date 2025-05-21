import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { standardTheme } from "./styles/themes/standard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={standardTheme}>
			<GlobalStyles />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
);

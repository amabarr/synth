import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { App } from "./app";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

import React from "react";
import ReactDOM from "react-dom";

import "aos/dist/aos.css";
import "./assets/styles/base.scss";

import { Layout } from "./components";

ReactDOM.render(
	<React.StrictMode>
		<Layout />
	</React.StrictMode>,
	document.getElementById("root")
);

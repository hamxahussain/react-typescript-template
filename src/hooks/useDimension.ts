import { useState, useEffect } from "react";

//? Clean Info about screen width & height
function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

//? Main hook implementation
export default function Dimension() {
	//? States
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	//? Functions / Methods
	function handleResize() {
		setWindowDimensions(getWindowDimensions());
	}

	//? Life Cycles
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	//? Return Main
	return windowDimensions;
}

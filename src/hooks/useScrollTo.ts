import { useEffect } from "react";

//? Interface
interface Props {
	top?: number;
	left?: number;
	behavior?: "smooth" | "auto";
}

//? Main Hooks implementation
const UseScrollToTop = (props?: Props) => {
	//? Life Cycles
	useEffect(() => {
		window.scrollTo({
			top: props?.top || 0,
			behavior: props?.behavior || "smooth",
			left: props?.left,
		});
	}, []);
};

export default UseScrollToTop;

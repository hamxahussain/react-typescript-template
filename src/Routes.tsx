import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { Home } from "./pages"

export interface IPropsLogged {}
export interface IPropsUnLogged {}

export const LoggedRoutes: React.FC<IPropsLogged> = (): JSX.Element => {
	return (
		<>
			<Switch>
				{/* ================ STATIC ROUTES ================= */}
				<Route path="/" component={Home}/>
				
				{/* ================ REDIRECT ROUTE ================= */}
				<Redirect to="/" />
			</Switch>
		</>
	);
};

export const UnLoggedRoutes: React.FC<IPropsUnLogged> = (): JSX.Element => {
	return (
		<>
			<Switch>
				<Redirect to="/" />
			</Switch>
		</>
	);
};

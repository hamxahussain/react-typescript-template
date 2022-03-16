
//  File Name: Layout
//  Component Created at 16 Mar, 2022 - 12:40:47
//
//  ==========================================================
//  COMPANY: ( XPOTECH )
//
//  Created by XPOTECH developers.
//  Copyright © ( 2022 - Current ) XPOTECH. All rights reserved.
//  ===========================================================


// 3rd Party Imports
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";

// Custom Imports
import { LoggedRoutes, UnLoggedRoutes } from "../../../Routes";
import { Loader, Notify, PopupView } from "./../../../components"

// Interfaces / Types
export interface IProps { }

// Main View
const Layout: React.FC<IProps> = (): JSX.Element => {

  //! States
  const [loggedIn, setLoggedIn] = React.useState<boolean | undefined>()


  //! Life Hooks
  React.useEffect(() => {
    AOS.init({
      delay: 100,
    });
  }, []);

  React.useEffect(() => {
    if (true) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, [])

  //! Main Return
  return (
    <div>
      <BrowserRouter>
          {loggedIn === true ? (
            <React.Fragment>
              <LoggedRoutes />
            </React.Fragment>
          ) : loggedIn === false ? (
            <React.Fragment>
              <UnLoggedRoutes />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Loader />
            </React.Fragment>
          )}
      </BrowserRouter>
      <PopupView />
      <Notify />

      {/* Site Disablity Message ----- UPGRADE */}
      {/* <div style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "black",
				color: "white",
				height: "100vh",
			}}>
				<div style={{
					textAlign:"center",
					padding: "20px 30px",
					maxWidth:400
				}}>
					<h1 style={{color:"red", marginBottom:30}}>We are sorry!</h1>
					<h4 >Please upgrade your hosting!</h4>
					<p style={{color:"grey", textAlign:"start", marginTop:10}}>Now you have no permission to see the site, Pay in oneday other wise We will delete this site permanently and sale it in next 1 day.</p>
					<p style={{color:"grey", textAlign:"start", marginTop:10}}>There is no technology company that will spend 2 month plus on developement, without any advance payment, middle payment (Here we have done almost 99% just need some tesing and resolving and still our developer see nothing?????)</p>
					<p style={{marginTop:10}}>Thank You!</p>
				</div>
			</div> */}
    </div>
  );
};

export default Layout;

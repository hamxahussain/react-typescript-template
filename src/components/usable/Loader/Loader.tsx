
//  File Name: Loader
//  Component Created at 16 Mar, 2022 - 12:42:56
//
//  ==========================================================
//  COMPANY: ( XPOTECH )
//
//  Created by XPOTECH developers.
//  Copyright © ( 2022 - Current ) XPOTECH. All rights reserved.
//  ===========================================================

// 3rd Party Imports
import React from "react"
import {Oval} from "react-loader-spinner"

// Interfaces / Types
export interface IProps {}

// View 01
export const Loader: React.FC<IProps> = (): JSX.Element => {

  return (
    <div className="loader-container">
      <Oval secondaryColor="#7178e0" color="#7178e0"/>
    </div>
  )
}

// View 02
export const LoaderTransparent: React.FC<{}> = (props):JSX.Element=> {

  return (
    <div className="loader-container loader-transparent">
      <Oval secondaryColor="#7178e0" color="#7178e0"/>
    </div>
  )
}

// View 03
export const LoaderInternalLayout: React.FC<{absolute?:boolean, background?:boolean}> = (props): JSX.Element => {

  return (
    <div style={{
        backgroundColor:props.background ? "rgba(255,255,255,0.6)" : "transparent",
        height: "calc(100vh - 250px)",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        position: props.absolute ? 'absolute' : 'unset',
        top:props.absolute ? 0 :'unset'
			}}>
				<Oval secondaryColor="#7178e0" color="#7178e0"/>
    </div>
  )
}



//  File Name: PopupView
//  Component Created at 16 Mar, 2022 - 12:46:31
//
//  ==========================================================
//  COMPANY: ( XPOTECH )
//
//  Created by XPOTECH developers.
//  Copyright © ( 2022 - Current ) XPOTECH. All rights reserved.
//  ===========================================================

// 3rd Party Imports
import React from "react"
import { observer } from "mobx-react"
import { AnimatePresence, motion } from 'framer-motion';

// Custom Imports
import { store } from "../../../store"

// Interfaces / Types
export interface IProps {}

// Main View
const PopupView: React.FC<IProps> = observer((): JSX.Element => {

  return (
    <React.Fragment>
      <AnimatePresence>
        {store.popup.popupView.jsx && (
          <motion.div
            initial={{ opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            onClick={()=>store.popup.popupView.isBackClickable && store.popup.popupView.hide()}
            className="popup__popup-view__back-container"
          />
        )}
      </AnimatePresence>
      {store.popup.popupView.jsx && (
        <div className="popup__popup-view__content-container">{store.popup.popupView.jsx}</div>
      )}
    </React.Fragment>
  )
  
})

// Export View
export default PopupView


//  File Name: Notification
//  Component Created at 16 Mar, 2022 - 12:44:10
//
//  ==========================================================
//  COMPANY: ( XPOTECH )
//
//  Created by XPOTECH developers.
//  Copyright © ( 2022 - Current ) XPOTECH. All rights reserved.
//  ===========================================================

// 3rd Party Imports
import React from "react";
import { BsShieldFillCheck } from "react-icons/bs"
import { IoWarning, IoBulb } from "react-icons/io5"
import { MdDangerous } from "react-icons/md"
import { AiOutlineClose } from "react-icons/ai"
import { observer } from "mobx-react";
import { motion } from "framer-motion";

// Custom Imports
import { notify } from "./notification";

// Variables
const data = {
  info: {
    icon: <IoBulb />,
    name: "Info",
    color: "blue",
  },
  warning: {
    icon: <IoWarning />,
    name: "Warning",
    color: "orange",
  },
  error: {
    icon: <MdDangerous />,
    name: "Error",
    color: "red",
  },
  success: {
    icon: <BsShieldFillCheck />,
    name: "Success",
    color: "green",
  },
};


// Interface / Types
export interface IProps { }

// Sub View 01
const NotifyItem = observer((): any => (
  notify.notifications.map((item, i) => {
    setTimeout(() => notify.remove(item.id), 8000);
    return (
      <motion.div
        initial={{
          x: -300,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
        }}
        className={`notification-page notification-type-${item.type}`}
        key={item.id}
      >
        <div>
          <h4>
            <span>{data[item.type].icon}</span>
            {data[item.type].name}
          </h4>
          <AiOutlineClose
            className="close-icon"
            onClick={() => notify.remove(item.id)}
          />
        </div>
        <p>{item.message}</p>
      </motion.div>
    );
  })
));

// Main View
const Notification: React.FC<IProps> = (): JSX.Element => {
  return (
    <div className="notification">
      <NotifyItem />
    </div>
  );
};


// Export default view
export default Notification

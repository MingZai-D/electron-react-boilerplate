import React from "react";
import { MenuOutlined } from "@ant-design/icons"
import './SelectDriver.scss'
import { useNavigate } from "react-router-dom";
import { RouterKey } from "../../routers";

const SelectDriver = () =>{
  const navigate = useNavigate()
  return (
    <div className="select_driver_page">
      <div className="select_drive_content" 
      onClick={() => {
        navigate(RouterKey.driver_page)
      }}>
        <MenuOutlined className="select_driver_icon"/>
        <div className="select_driver_tip">Please click to Select a Driver</div>
      </div>
    </div>
  )
}

export default SelectDriver
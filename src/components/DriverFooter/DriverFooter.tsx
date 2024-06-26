import React from "react";
import { Button, Layout } from "antd";
import { FacebookOutlined, TwitterOutlined, InstagramOutlined} from "@ant-design/icons"
import './DriverFooter.scss'
import { useDriverConfig } from "../../store/reducer";
const { Footer } = Layout

const DriverFooter = () =>{
  const [driverConfig] = useDriverConfig()
  return (
    <Footer className="driver_footer">
      <div className="driver_footer_left">
        <div className="driver_footer_tip">© 2024 NFC Configuration. All rights reserved.</div>
        <div className="driver_footer_icon">
          <FacebookOutlined style={{marginRight: '10px'}}/>
          <TwitterOutlined style={{marginRight: '10px'}}/>
          <InstagramOutlined />
        </div>
      </div>
      <Button disabled onClick={async () =>{

      }}>Switch to  Dark Mode</Button>
    </Footer>
  )
}

export default DriverFooter
import React from "react";
import { Layout } from "antd";
const { Header } = Layout
import logo from '../../../assets/logo.png'
import './DriverHeader.scss'

interface DriverHeaderProps {
  isProgrammer?: boolean
}

const DriverHeader = ({isProgrammer}: DriverHeaderProps) =>{
  return (
    <Header className="LDE_driver_header">
      <img src={logo} style={{width: '40px', marginRight: '20px'}}/>
      {isProgrammer ? 'LEDVANCE Configurator' : 'LEDVANCE Programmer'}
    </Header>
  )
}

export default DriverHeader
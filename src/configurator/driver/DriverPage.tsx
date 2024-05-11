import React from "react";
import './scss/DriverPage.scss'
import driverImg from '../../../assets/icon.png'
import { Button, Input, Table } from "antd";
import type { TableProps } from 'antd';
import { useNavigate } from "react-router-dom";
import { RouterKey } from "../../routers";
import DriverHeader from "../../components/DriverHeader/DriverHeader";
import { driverList } from "../../store/driver_config";
import { useCreation, useReactive } from "ahooks";

interface DataType {
  key: string;
  name: string;
  driverCode: number
}

const DriverPage = () =>{
  const navigate = useNavigate()
  const defFormData = useCreation(() =>{
    return driverList.map(driver =>({
      ...driver,
      key: driver.name
    }))
  }, [driverList])

  const state = useReactive({
    currentDriver: driverList[0],
    formData: defFormData
  })
  
  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'GTN',
      dataIndex: 'GTN',
      key: 'GTN',
    },
    {
      title: 'DriverCode',
      dataIndex: 'driverCode',
      key: 'driverCode',
    }
  ];
  
  return (
    <div className="driver_page">
      <DriverHeader />
      <div className="driver_content">
        <div className="driver_container">
          <div className="driver_header">LEDVANCE NFC Drivers</div>
          <div className="driver_table">
            <Input.Search 
              onSearch={(v) => {
                state.formData = defFormData.filter(item => item.name.includes(v))
              }} size="large" className="driver_input"/>
            <Table 
              style={{height: 'calc(100% - 60px)', overflowY: 'auto'}}
              columns={columns}
              dataSource={state.formData}
              showHeader={false}
              pagination={false}
              bordered={false}
              onRow={(record) =>{
                return {
                  onClick: () => {
                    state.currentDriver = record as any
                  }
                }
              }}
              rowClassName={(record) => {
                return `driver_table_row ${record.driverCode === state.currentDriver.driverCode ? 'driver_table_row_active' : ''}`
              }}
            />
          </div>
        </div>
        <div className="driver_detail">
          <div className="driver_header">{state.currentDriver.name}</div>
          <div className="driver_info_img">
            {/* <img src={driverImg} width="100%"/> */}
          </div>
          <div className="driver_detail_info">
            <p>{state.currentDriver.name}</p>
            <p>{state.currentDriver.GTN}</p>
            <p>{state.currentDriver.driverCode}</p>
          </div>
        </div>
      </div>
      <div className="driver_btn">
        <div className="driver_btn_wrap">
          <Button className="cancel_btn" 
            onClick={() =>{
              navigate(-1)
            }}
          >Cancel</Button>
          <Button className="confirm_btn" 
          onClick={() =>{
            navigate(RouterKey.driver_detail)
          }}>Select</Button>
        </div>
      </div>
    </div>
  )
}

export default DriverPage
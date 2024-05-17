import React from "react";
import './scss/DriverPage.scss'
import driverImg from '../../../assets/driver_defalut.png'
import { Button, Input, Table } from "antd";
import type { TableProps } from 'antd';
import { useNavigate } from "react-router-dom";
import { RouterKey } from "../../routers";
import DriverHeader from "../../components/DriverHeader/DriverHeader";
import { useCreation, useReactive } from "ahooks";
import { DriverItemType, useDriverList, useNfcVersion } from "../../store/reducer";

interface DataType extends DriverItemType{
  key: string;
}

const DriverPage = () =>{
  const navigate = useNavigate()
  const [driverList, setDriverConfig] = useDriverList()
  const [isProgrammer] = useNfcVersion()
  const defFormData = useCreation(() =>{
    return driverList.map(driver =>({
      ...driver,
      key: driver.driverName
    }))
  }, [driverList])

  const state = useReactive({
    currentDriver: driverList[0],
    formData: defFormData
  })
  
  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'driverName',
      key: 'driverName',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'GTN',
      dataIndex: 'GTN',
      key: 'GTN',
    },
    {
      title: 'Code',
      dataIndex: 'ACCode',
      key: 'driverCode',
    }
  ];
  
  return (
    <div className="driver_page">
      {/* <DriverHeader isProgrammer={isProgrammer}/> */}
      <div className="driver_content">
        <div className="driver_container">
          <div className="driver_header">LEDVANCE NFC Drivers</div>
          <div className="driver_table">
            <Input.Search 
              onSearch={(v) => {
                state.formData = defFormData.filter(item => item.driverName.includes(v))
              }} size="large" className="driver_input" style={{marginBottom: '25px'}}/>
            <Table 
              style={{height: 'calc(100% - 75px)', overflowY: 'auto'}}
              columns={columns}
              dataSource={state.formData}
              // showHeader={false}
              pagination={false}
              bordered={false}
              onRow={(record) =>{
                return {
                  onClick: () => {
                    state.currentDriver = record
                    setDriverConfig(record)
                  }
                }
              }}
              rowClassName={(record) => {
                return `driver_table_row ${record.driverName === state.currentDriver.driverName ? 'driver_table_row_active' : ''}`
              }}
            />
          </div>
        </div>
        <div className="driver_detail">
          <div className="driver_header">{state.currentDriver.driverName}</div>
          <div className="driver_info_img">
            <img src={driverImg} height="100%"/>
          </div>
          <div className="driver_detail_info">
            <p>{state.currentDriver.driverName}</p>
            <p>{state.currentDriver.GTN}</p>
            <p>{state.currentDriver.Code}</p>
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
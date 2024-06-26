import React, { useEffect, useMemo } from "react";
import './scss/DriverDetail.scss'
import { Button, Descriptions, Form, Input, InputNumber, Radio } from "antd";
import { HomeOutlined, FileOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom";
import DriverHeader from "../../components/DriverHeader/DriverHeader";
import { useDriverConfig, useDriverTabs, useNfcVersion } from "../../store/reducer";
import { useReactive, useUpdateEffect } from "ahooks";
import { MappingKeyType } from "../../store/driver_config";
import type { DescriptionsProps } from 'antd';
import { getDriverFormatData } from "../../../nodeMapping/mapping";

interface DriverDetailState {
  currentTabs: MappingKeyType
  currentFormItem: any[]
  formInitState: Record<string, any>
  moduleType: 'DriverConfiguration' | 'Summary'
}

const DriverDetail = () =>{
  const navigate = useNavigate()
  const [driverConfig, setDriverConfig] = useDriverConfig()
  const [isProgrammer] = useNfcVersion()
  const driverTabs = useDriverTabs()
  const [form] = Form.useForm()

  const state = useReactive<DriverDetailState>({
    currentTabs: driverTabs[0],
    currentFormItem: [],
    formInitState: {},
    moduleType: 'DriverConfiguration'
  })

  const deviceInfoItems: DescriptionsProps['items'] = useMemo(() =>{
    return driverConfig.Mappings['Driver information'].map((item, idx) =>{
      return {
        key: idx.toString(),
        label: item.name,
        children: item.value
      }
    })
  }, [driverConfig])

  const configurationItems: DescriptionsProps['items'] = useMemo(() =>{
    return driverConfig.Mappings['CurrentSetting'].map((item, idx)=>{
      return {
        key: idx.toString(),
        label: item.name,
        children: item.value
      }
    })
  }, [driverConfig])

  useEffect(() =>{
    if(state.currentTabs){
      state.currentFormItem = driverConfig.Mappings[state.currentTabs]
      state.formInitState = driverConfig.Mappings[state.currentTabs].reduce((pre: Record<string, any>, cur)=>{
        pre[cur.name] = cur.value
        return pre
      }, {})
    }
  }, [state.currentTabs])

  useUpdateEffect(() =>{
    form.setFieldsValue(state.formInitState)
  }, [state.formInitState])


  const updateDriverConfig = (v:any) =>{
    const newFormItem = state.currentFormItem.map((item:any) =>{
      if(item.name === Object.keys(v)[0]){
        return{
          ...item,
          value: Object.values(v)[0]
        }
      }
      return item
    })

    setDriverConfig({
      ...driverConfig,
      Mappings: {
        ...driverConfig.Mappings,
        [state.currentTabs]: [
          ...newFormItem
        ]
      }
    })
  }

  const exportConfigFile = () =>{
    const driverConfigFile = getDriverFormatData(driverConfig).join(' ')
    window.electron.ipcRenderer.sendFileData('save-file',driverConfigFile)
    window.electron.ipcRenderer.on('save-file', async (res) =>{
      if (res.success && res.data) {
        console.log(res.data, '< --- data')
      }
    })
  }

  return (
    <div className="driver_detail_page">
      {/* <DriverHeader isProgrammer={isProgrammer}/> */}
      <div className="driver_header">
        <div className="driver_icons_wrap">
          <div 
            className={`driver_icons ${state.moduleType === 'DriverConfiguration' ? 'driver_icons_active' : ''}`}
            onClick={() => state.moduleType = 'DriverConfiguration'}
          >
            <HomeOutlined style={{fontSize: '30px'}}/>
            Driver Configuration
          </div>
          <div 
            className={`driver_icons ${state.moduleType === 'Summary' ? 'driver_icons_active' : ''}`}
            onClick={() => state.moduleType = 'Summary'}
          >
            <FileOutlined style={{fontSize: '30px'}}/>
            Summary
          </div>
        </div>
        <div className="driver_btn">
          <Button className="btn" 
          onClick={() =>{
            navigate(-1)
          }}>Restart</Button>
          <Button 
            className="btn"
            onClick={exportConfigFile}
          >Export</Button>
        </div>
      </div>
      <div className="driver_config">
        {state.moduleType === 'DriverConfiguration' ? 
          <>
            <div className="driver_config_header">
              <Form
                layout="inline"
                initialValues={{
                  "Driver AC Code": '',
                  "Description": ''
                }}
                disabled={true}
              >
                <Form.Item
                  name="Driver AC Code"
                  label="Driver AC Code"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="Description"
                  label="Description"
                >
                  <Input />
                </Form.Item>
              </Form>
            </div>
            <div className="driver_config_content">
              <div className="driver_config_left">
                {driverTabs.map(tabs=>{
                  return(
                    <div 
                      className={`driver_radio_item ${state.currentTabs === tabs ? 'driver_radio_item_active' : ''}`}
                      onClick={() =>{
                        state.currentTabs = tabs
                      }}
                      key={tabs}
                    >
                      <Radio checked={state.currentTabs === tabs}>{tabs}</Radio>
                    </div>
                  )
                })}
              </div>
              <div className="driver_config_right">
                <div className="driver_config_right_header">Fixed Current</div>
                <div className="driver_config_right_form">
                  <Form
                    name="global_state"
                    layout="inline"
                    labelCol={{span: 10}}
                    wrapperCol={{span: 10}}
                    labelAlign="left"
                    style={{ width: '100%' }}
                    form={form}
                    onValuesChange={updateDriverConfig}
                  >
                    {
                      state.currentFormItem.map((item:any) =>(
                        <Form.Item
                          name={item?.name}
                          label={item?.name}
                          rules={[{ required: true }]}
                          key={item.name}
                        >
                          {item.type === 'Boolean' ? 
                          <Radio.Group value={item.value}>
                            <Radio value={true}>true</Radio>
                            <Radio value={false}>false</Radio>
                            </Radio.Group> : 
                            (item.type === 'number' ? 
                              <InputNumber min={item.min} max={item.max} disabled={item.disabled} suffix={item.unit}/> : 
                              <Input disabled={item.disabled}/>
                            )
                          }
                        </Form.Item>  
                      ))
                    }
                  </Form>
                </div>
              </div>
            </div>
          </> :
          <div className="driver_summary">
            <div className="driver_summary_content">
              <Descriptions 
                title="Device Information" 
                column={1}
                colon={false}
                items={deviceInfoItems}
                contentStyle={{paddingBottom: '5px'}}
                labelStyle={{paddingLeft: '20px'}}
                style={{marginBottom: '20px'}}
              />
              <Descriptions 
                title="Configuration Summary" 
                column={1}
                colon={false}
                items={configurationItems}
                contentStyle={{paddingBottom: '5px'}}
                labelStyle={{paddingLeft: '20px'}}
              />
            </div>
          </div>
        }
      </div>
    </div>  
  )
}

export default DriverDetail
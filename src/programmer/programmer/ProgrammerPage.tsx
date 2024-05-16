import React, { useEffect, useMemo } from "react";
import DriverHeader from "../../components/DriverHeader/DriverHeader";
import './ProgrammerPage.scss'
import picMenu from "../../../assets/pic_menu.png"
import { Button, Descriptions, Upload } from 'antd'
import type { DescriptionsProps } from 'antd';
import { DownloadOutlined } from "@ant-design/icons"
import { useReactive } from "ahooks";
import { getDriverProgrammingInfo } from "../../utils";
import { writeNfcData } from "../../../nodeMapping/mapping";

const { Dragger } = Upload

const ProgrammerPage = () =>{
  const state = useReactive({
    configUploadText: '',
    fileName: '',
    continueLoop: true,
    fileReady: false,
    startProgramming: false,
    fileData: '',
    driverType: '',
    success: 0,
    unSuccess: 0,
    delay: 5000,
    configurationInfo: getDriverProgrammingInfo({type: 'waiting'}),
    timerId: undefined as NodeJS.Timeout | undefined
  })


  useEffect(() =>{
    state.configUploadText = state.fileReady ? 'Click to choose another configuration file' : 'Choose a configuration file to start programming'
  }, [state.fileReady])

  const items: DescriptionsProps['items'] = useMemo(() => {
    return [
      {
        key: '1',
        label: 'Configuration',
        children: state.fileName,
      },
      {
        key: '2',
        label: 'Driver Type',
        children: '',
      },
      {
        key: '3',
        label: 'Successfully Programmed',
        children: state.success,
      },
      {
        key: '4',
        label: 'Unsuccessfully Programmed',
        children: state.unSuccess,
      },
    ]
  }, [state.configurationInfo, state.success, state.unSuccess, state.fileName])

  const programmingFn = () =>{
    if (state.startProgramming) {
      state.startProgramming = false
      state.continueLoop = true
      if(state.timerId) clearTimeout(state.timerId)
      state.configurationInfo = getDriverProgrammingInfo({ type: 'waiting' })
    } else {
      if (state.fileData) {
        state.startProgramming = true
        state.continueLoop = false
        loopProgram(state.fileData)
      }
    }
  }

  const loopProgram = async (fileData: string) =>{
    if(state.continueLoop) return 
    const res = await writeNfcData(fileData)
    console.log(res, '<--- write nfc')
    if(res.success){
      state.success += 1
      state.configurationInfo = getDriverProgrammingInfo({ type: 'success' })
    }else{
      state.unSuccess += 1
      state.configurationInfo = getDriverProgrammingInfo({ type: 'failed' })
    }
    state.timerId = setTimeout(() =>{
      state.configurationInfo = getDriverProgrammingInfo({ type : 'programming'})
      loopProgram(fileData).then()
    }, state.delay)
  }
  return (
    <div className="configuration_page">
      <DriverHeader isProgrammer={true} />
      <div className="configuration_content">
        <div className="configuration_upload_wrap">
          <div className="configuration_head">Menu</div>
          <div className="configuration_upload_content">
            <div>
              <Dragger
                accept=".config"
                disabled={state.startProgramming}
                showUploadList={false}
                beforeUpload={(file)=>{
                  state.fileName = file.name
                  window.electron.ipcRenderer.sendFilePath('upload-file', file.path)
                  window.electron.ipcRenderer.on('upload-file', async (res) =>{
                    if (res.success && res.data) {
                      console.log(res.data, '< --- fileData')
                      state.fileData = res.data
                      state.fileReady = true
                    }
                  })
                  return false
                }}
              >
                <img src={picMenu}/>
                <p className="configuration_upload_text">{state.configUploadText}</p>
              </Dragger>
            </div>
            {state.fileReady && 
            <Button 
              className="configuration_btn" 
              style={{backgroundColor: state.startProgramming ? '#F67202' : '#4CD964'}}
              onClick={programmingFn}
            >
              {state.startProgramming ? 'Stop Programming' : 'Start Programming'}
            </Button>}
          </div>
        </div>
        <div className="configuration_result_wrap">
          <div className="configuration_head">Driver programming view</div>
          <div className="configuration_result_content">
            <div className="configuration_result_description">
              <Descriptions 
                items={items} 
                column={1} 
                colon={false}
                labelStyle={{width: '60%', color: '#000'}}
                contentStyle={{ width: '40%'}}
              />
              <Button 
                size="large" 
                shape="circle" 
                className="configuration_result_download" 
                icon={<DownloadOutlined />}
                onClick={() =>{
                  
                }}
              />
            </div>
            <div className="configuration_result_status">
              <div className="configuration_result_status_content" style={{background: state.configurationInfo?.color || '#F2F2F2'}}>
                <div>
                  <p style={{fontWeight: 'bold', color: '#333'}}>{state.configurationInfo?.title}</p>
                  <p>{state.configurationInfo?.text}</p>
                  <span>{state.configurationInfo?.subText}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgrammerPage
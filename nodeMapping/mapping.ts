import { DriverConfigType, MappingItem } from '../src/store/driver_config'
import { hex2Int } from '../src/utils'

// const {
//   exec,
// } = window.require('child_process')

export const CloudURL = "https://ledvance365-my.sharepoint.com/personal/j_zheng4_ledvance_com/_layouts/15/onedrive.aspx?login_hint=j%2Ezheng4%40ledvance%2Ecom&view=1"
export const Username = "J.Zheng4@Ledvance.com"
export const Password = "Ledvance@2023"


export const faultDescriptionList = {
  "failed": "Read Fault code failed, please try read the tag again",
  "1": "Electric leakage",
  "2": "Short-Circuit protection",
  "3": "Luminaire temperature is too high, Thermal protection is luanch",
  "4": "Wrong thermistor(detect wrong thermal resistor value at 25℃",
  "5": "Wrong current value, the current value you set is out of range",
  "6": "Overloaded, the driver is under the following condition: ①required power (current × voltage) exceed the maximum power value of driver. ② required voltage exceed the maximum voltage output ability. ③ open-circuit on output loop",
  "7": "Wrong dimming level value, dimming level value set is not in the range",
  "8": "Wrong percentage value on constant lumen function, cause overload issue",
  "9": "Driver is protected, beceause the inner componet temperature  is too high",
  "10": "Used wrong App or Software to read and write the data from driver",
  // "11": "External Supply Undervoltage",
  // "12": "External Supply Overvoltage",
  // "13": "Open circuit on output loop"
}

export const WriteNFCAll = function (writeList:any, Template:any, writeA2:boolean,) {
  const path = window.require('path')
  let exePath = path.resolve('./')

  var comamndparam = ""
  for (var i = 0; i < writeList.length; i++) {
    comamndparam += " "
    comamndparam += writeList[i]
  }

  var command = 'callNFC.exe' + comamndparam

  //command = 'callNFC.exe 0212345678'
  console.log(command)
  // return new Promise(resolve => {
  //   const ls = exec(command, {
  //     cwd: exePath + "\\nodeMapping"
  //   }, writeCallbackfromNFC) //read from 00 to 31
  //   ls.on('close', (code) => {
  //     console.log(code, 'code')
  //     ReadCRC(!writeA2).then(res => {
  //       const CRCres = GenerateCRC(Template)
  //       let msg = code === 0 ? 'Next: Power up the driver to activate your new settings' : 'Write failed'
  //       if (code == 0 && res.code == 0 && res.crc == '00') {
  //         ReadCRC(false).then(res => {
  //           if (res.crc != CRCres && code === 0) msg = 'Write crc operation failed'
  //         })
  //       } else {
  //         if (res.crc != CRCres && code === 0) msg = 'Write crc operation failed'
  //       }
  //       resolve({
  //         status: code,
  //         driverInfo: {
  //           type: Template['Driver type']
  //         },
  //         msg
  //       })
  //     })
  //   })
  // })
}

export const ReadCRC = function (a3 = false) {
  var block = a3 ? "0025" : "0025";
  //var block = "69";
  const path = window.require('path')
  let exePath = path.resolve('./')
  // return new Promise(resolve => {
  //   const lss = exec('callNFC.exe ' + block, {
  //     cwd: exePath + "\\NodeMapping"
  //   }, ReadCRCCallback) //read from 00 to 31
  //   let str = ''
  //   lss.stdout.on('data', (data) => {
  //     str += data
  //   })
  //   lss.on('close', (code) => {
  //     resolve({
  //       code,
  //       crc: str.substring(0, 2)
  //     })
  //   })
  // })

}

export const ReadCRCCallback = function (err:any, stdout:any, stderr:any) {
  if (err !== null || stderr !== "") {
    return
  }
}

export const readConfiguration = (configTags:string[]) => {
  const driverType = hex2Int(configTags[0].slice(4, 12))
  // if (modeList[driverType]) {
  //   return Promise.resolve({
  //     status: 404
  //   })
  // }
  var start = 0;//32 对应的是08 blob，然后顺序往下

  var FFholder6 = "FFFFFF"
  
}

// function executeCommand(command, options) {
//   return new Promise((resolve, reject) => {
//     exec(command, options, (error, stdout, stderr) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve({ stdout, stderr });
//       }
//     });
//   });
// }

export const readNFCAll = async() => {
  window.electron.ipcRenderer.sendExecCommand('run-exec', 'callNFC.exe 000025')
  window.electron.ipcRenderer.on('run-exec', async (res) =>{
    console.log(res, '< --- ress')
    if(res.success){
    
    }
  })
  // const path = window.require('path')
  // let exePath = path.resolve('./')
  // try {
  //   const { stdout} = await executeCommand('callNFC.exe 000025', {
  //     cwd: exePath + "\\nodeMapping"
  //   });
  //   ReadCallbackfromNFC(stdout)
  //   const res = GenerateCRC(Template)
  //   console.log(res, Template, 'crc')
  //     status: 0,
  //     data: JSON.parse(JSON.stringify(Template)),
  //     crcStatus,
  //   })
  // } catch (error) {
  //   return Promise.resolve({
  //     status: -1
  //   })
  // }
}

interface DriverGroup {
  [key: number]: MappingItem[]
}

export const writeNfcData = (driverConfig: DriverConfigType) =>{
  const driverTypeHex = '00' + driverConfig.DriverType
  const driverMapping = Object.values(driverConfig.Mappings).flat()
  const driverGroup:DriverGroup  = {}
  driverMapping.forEach(item =>{
    const idx = Math.floor(hex2Int(item.position) / 4)
    if(!driverGroup[idx]){
      driverGroup[idx] = []
    }
    driverGroup[idx].push(item)
  })
  const mapping = Object.values(driverGroup).map((item: MappingItem[])=>{
    const index = Math.floor(hex2Int(item[0].position) / 4)
    let currentPosition = 0
    let result = '0' + index
    item.forEach(mapping =>{
      const pos = hex2Int(mapping.position) % 4
      const diff = pos - currentPosition
      if(diff > 0){
        result += 'XX'.repeat(diff)
      }
      result += mapping.value
      currentPosition = pos + mapping.length 
    })
    if(currentPosition < 4){
      result += 'XX'.repeat(4 - currentPosition)
    }
    return result
  })
  return [driverTypeHex, ...mapping]
}
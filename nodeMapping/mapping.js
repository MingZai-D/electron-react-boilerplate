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

function ReadCallbackfromNFC(stdout) {
  var tags = stdout.split(' ')
  console.log(tags, 'tags')
  //err 处理 TBD
  Template["Driver type"] = tags[0].substring(0, 8)
  Template["Mapping Format Version"] = tags[1].substring(0, 4)
  Template["Manufacture ID"] = tags[1].substring(4, 8)
  Template["Image Type"] = tags[2].substring(0, 4)
  Template["Rsv0"] = tags[2].substring(4, 8)
  Template.params.PowerSetting.MinCur = tags[3].substring(0, 4)
  Template.params.PowerSetting.MaxCur = tags[3].substring(4, 8)
  Template.params.PowerSetting.MinVol = tags[4].substring(0, 4)
  Template.params.PowerSetting.MaxVol = tags[4].substring(4, 8)
  Template.params.PowerSetting.MinPwr = tags[5].substring(0, 4)
  Template.params.PowerSetting.MaxPwr = tags[5].substring(4, 8)
  Template.params.Others.FeatureDefinition = tags[6].substring(0, 4)
  Template.params.Others.Rsv1 = tags[6].substring(4, 8)
  Template.params.Others.DriverACcode = tags[7].substring(0, 8)
  Template.params.Others.SetCurrent = tags[8].substring(0, 4)
  Template.params.Others.Setpower = tags[8].substring(4, 8)
  Template.params.Others.SetVoltage = tags[9].substring(0, 4)
  Template.params.Others.EmergencyLightingLevelPWM1 = tags[9].substring(4, 6)
  Template.params.Others.EmergencyLightingLevelPWM2 = tags[9].substring(6, 8)
  Template.params.Others.FeatureConfigByBit = tags[10].substring(0, 4)
  Template.params.Others.Rsv2 = tags[10].substring(4, 8)
  Template.params.Others.LuminaireManufacturerGTIN = tags[11].substring(0, 2)
  Template.params.Others.LuminaireIdentificationNumber = tags[11].substring(2, 4)
  Template.params.Others.LuminaireYearOfManufacture = tags[11].substring(4, 6)
  Template.params.Others.LuminaireWeekOfManufacture = tags[11].substring(6, 8)
  Template.params.Others.NominalInputPower = tags[12].substring(0, 4)
  Template.params.Others.PowerAtMinimumDimLevel = tags[12].substring(4, 8)
  Template.params.Others.NominalMinimumACMainsVoltage = tags[13].substring(0, 4)
  Template.params.Others.NominalMaximumACMainsVoltage = tags[13].substring(4, 8)
  Template.params.Others.NominalLightOutput = tags[14].substring(0, 6)
  Template.params.Others.Rsv3 = tags[14].substring(6, 8)
  Template.params.Others.ColorRenderingIndex = tags[15].substring(0, 2)
  Template.params.Others.CCT = tags[15].substring(2, 6)
  Template.params.Others.LightDistributionType = tags[15].substring(6, 8)
  Template.params.Others.LuminaireColor[0] = tags[16].substring(0, 2)
  Template.params.Others.LuminaireColor[1] = tags[16].substring(2, 4)
  Template.params.Others.LuminaireColor[2] = tags[16].substring(4, 6)
  Template.params.Others.LuminaireColor[3] = tags[16].substring(6, 8)
  Template.params.Others.LuminaireColor[4] = tags[17].substring(0, 2)
  Template.params.Others.LuminaireColor[5] = tags[17].substring(2, 4)
  Template.params.Others.LuminaireColor[6] = tags[17].substring(4, 6)
  Template.params.Others.LuminaireColor[7] = tags[17].substring(6, 8)
  Template.params.Others.LuminaireColor[8] = tags[18].substring(0, 2)
  Template.params.Others.LuminaireColor[9] = tags[18].substring(2, 4)
  Template.params.Others.LuminaireColor[10] = tags[18].substring(4, 6)
  Template.params.Others.LuminaireColor[11] = tags[18].substring(6, 8)
  Template.params.Others.LuminaireColor[12] = tags[19].substring(0, 2)
  Template.params.Others.LuminaireColor[13] = tags[19].substring(2, 4)
  Template.params.Others.LuminaireColor[14] = tags[19].substring(4, 6)
  Template.params.Others.LuminaireColor[15] = tags[19].substring(6, 8)
  Template.params.Others.LuminaireIdentification[0] = tags[20].substring(0, 2)
  Template.params.Others.LuminaireIdentification[1] = tags[20].substring(2, 4)
  Template.params.Others.LuminaireIdentification[2] = tags[20].substring(4, 6)
  Template.params.Others.LuminaireIdentification[3] = tags[20].substring(6, 8)
  Template.params.Others.LuminaireIdentification[4] = tags[21].substring(0, 2)
  Template.params.Others.LuminaireIdentification[5] = tags[21].substring(2, 4)
  Template.params.Others.LuminaireIdentification[6] = tags[21].substring(4, 6)
  Template.params.Others.LuminaireIdentification[7] = tags[21].substring(6, 8)
  Template.params.Others.LuminaireIdentification[8] = tags[22].substring(0, 2)
  Template.params.Others.LuminaireIdentification[9] = tags[22].substring(2, 4)
  Template.params.Others.LuminaireIdentification[10] = tags[22].substring(4, 6)
  Template.params.Others.LuminaireIdentification[11] = tags[22].substring(6, 8)
  Template.params.Others.LuminaireIdentification[12] = tags[23].substring(0, 2)
  Template.params.Others.LuminaireIdentification[13] = tags[23].substring(2, 4)
  Template.params.Others.LuminaireIdentification[14] = tags[23].substring(4, 6)
  Template.params.Others.LuminaireIdentification[15] = tags[23].substring(6, 8)
  Template.params.Others.LightSourceType = tags[24].substring(0, 2)
  Template.params.Others.AssetAlarmMask = tags[24].substring(2, 4)
  Template.params.Others.Rsv4 = tags[24].substring(4, 8)
  Template.params.crc = tags[25].substring(0, 2)
  console.log(Template, 'Template', Template.params.crc, 'crc')
}

export const WriteNFCAll = function (writeList, Template, writeA2,) {
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

export const ReadCRCCallback = function (err, stdout, stderr) {
  if (err !== null || stderr !== "") {
    return
  }
}

export const readConfiguration = (configTags) => {
  const driverType = hex2Int(configTags[0].slice(4, 12))
  if (modeList[driverType]) {
    return Promise.resolve({
      status: 404
    })
  }
  var start = 0;//32 对应的是08 blob，然后顺序往下

  var FFholder6 = "FFFFFF"
  

  Template.params.crc = GenerateCRC(Template)
  writeList.push('00' + (start + 25).toString() + Template.params.crc + FFholder6)
  let list = []
  writeList.forEach(function (item) {
    list.push(item.toUpperCase())
  })
  return WriteNFCAll(writeList, Template, "0025")
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

function GenerateCRC(template) {
  var CRCModule = require('./CRC');
  const temp = template ? template : Template
  var crclist = [
    CRCModule.HexStringToInt(temp["Driver type"].substring(0, 2)),
    CRCModule.HexStringToInt(temp["Driver type"].substring(2, 4)),
    CRCModule.HexStringToInt(temp["Driver type"].substring(4, 6)),
    CRCModule.HexStringToInt(temp["Driver type"].substring(6, 8)),
    CRCModule.HexStringToInt(temp["Mapping Format Version"].substring(0, 2)),
    CRCModule.HexStringToInt(temp["Mapping Format Version"].substring(2, 4)),
    CRCModule.HexStringToInt(temp["Manufacture ID"].substring(0, 2)),
    CRCModule.HexStringToInt(temp["Manufacture ID"].substring(2, 4)),
    CRCModule.HexStringToInt(temp["Image Type"].substring(0, 2)),
    CRCModule.HexStringToInt(temp["Image Type"].substring(2, 4)),
    CRCModule.HexStringToInt(temp["Rsv0"].substring(0, 2)),
    CRCModule.HexStringToInt(temp["Rsv0"].substring(2, 4)),
    CRCModule.HexStringToInt(temp.params.PowerSetting.MinCur.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.PowerSetting.MinCur.substring(2, 4)),
    CRCModule.HexStringToInt(temp.params.PowerSetting.MaxCur.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.PowerSetting.MaxCur.substring(2, 4)),
    CRCModule.HexStringToInt(temp.params.PowerSetting.MinVol.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.PowerSetting.MinVol.substring(2, 4)),
    CRCModule.HexStringToInt(temp.params.PowerSetting.MaxVol.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.PowerSetting.MaxVol.substring(2, 4)),
    CRCModule.HexStringToInt(temp.params.PowerSetting.MinPwr.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.PowerSetting.MinPwr.substring(2, 4)),
    CRCModule.HexStringToInt(temp.params.PowerSetting.MaxPwr.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.PowerSetting.MaxPwr.substring(2, 4)),
    CRCModule.HexStringToInt(temp.params.Others.FeatureDefinition.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.FeatureDefinition.substring(2, 4)),
    CRCModule.HexStringToInt(temp.params.Others.Rsv1.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.Rsv1.substring(2, 4)),
    CRCModule.HexStringToInt(temp.params.Others.DriverACcode.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.DriverACcode.substring(2, 4)),
    CRCModule.HexStringToInt(temp.params.Others.DriverACcode.substring(4, 6)),
    CRCModule.HexStringToInt(temp.params.Others.DriverACcode.substring(6, 8)),
    CRCModule.HexStringToInt(temp.params.Others.SetCurrent.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.SetCurrent.substring(2, 4)),
    CRCModule.HexStringToInt(temp.params.Others.Setpower.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.Setpower.substring(2, 4)),
    CRCModule.HexStringToInt(temp.params.Others.SetVoltage.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.SetVoltage.substring(2, 4)),
    CRCModule.HexStringToInt(temp.params.Others.EmergencyLightingLevelPWM1.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.EmergencyLightingLevelPWM2.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.FeatureConfigByBit.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.FeatureConfigByBit.substring(2, 4)),
    CRCModule.HexStringToInt(temp.params.Others.Rsv2.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.Rsv2.substring(2, 4)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireManufacturerGTIN.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireIdentificationNumber.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireYearOfManufacture.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireWeekOfManufacture.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.NominalInputPower.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.NominalInputPower.substring(2, 4)),
    CRCModule.HexStringToInt(temp.params.Others.PowerAtMinimumDimLevel.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.PowerAtMinimumDimLevel.substring(2, 4)),
    CRCModule.HexStringToInt(temp.params.Others.NominalMinimumACMainsVoltage.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.NominalMinimumACMainsVoltage.substring(2, 4)),
    CRCModule.HexStringToInt(temp.params.Others.NominalMaximumACMainsVoltage.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.NominalMaximumACMainsVoltage.substring(2, 4)),
    CRCModule.HexStringToInt(temp.params.Others.NominalLightOutput.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.NominalLightOutput.substring(2, 4)),
    CRCModule.HexStringToInt(temp.params.Others.NominalLightOutput.substring(4, 6)),
    CRCModule.HexStringToInt(temp.params.Others.Rsv3.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.ColorRenderingIndex.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.CCT.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.CCT.substring(2, 4)),
    CRCModule.HexStringToInt(temp.params.Others.LightDistributionType.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireColor[0].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireColor[1].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireColor[2].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireColor[3].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireColor[4].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireColor[5].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireColor[6].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireColor[7].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireColor[8].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireColor[9].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireColor[10].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireColor[11].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireColor[12].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireColor[13].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireColor[14].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireColor[15].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireIdentification[0].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireIdentification[1].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireIdentification[2].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireIdentification[3].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireIdentification[4].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireIdentification[5].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireIdentification[6].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireIdentification[7].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireIdentification[8].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireIdentification[9].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireIdentification[10].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireIdentification[11].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireIdentification[12].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireIdentification[13].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireIdentification[14].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LuminaireIdentification[15].substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.LightSourceType.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.AssetAlarmMask.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.Rsv4.substring(0, 2)),
    CRCModule.HexStringToInt(temp.params.Others.Rsv4.substring(2, 4))
  ]
  console.log(crclist, 'crclist')
  //var crc8 = new CRCModule.CRC8(0x8c, 0xff)
  //var checksum = crc8.checksum(crclist)
  var checksum = CRCModule.nfc_crc8(crclist, crclist.length)
  var crc_value = checksum.toString(16).toUpperCase()
  if (crc_value.length == 1) {
    crc_value = "0" + crc_value
  }
  crc_value = crc_value.substring(0, 2)
  return crc_value
}
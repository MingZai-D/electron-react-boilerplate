import { difference, max, min, range } from 'lodash'
import { DriverConfigType, MappingItem } from '../src/store/driver_config'
import { hex2Int } from '../src/utils'
import { ReadFileType } from '../src/main/preload'

export const CloudURL = "https://ledvance365-my.sharepoint.com/personal/j_zheng4_ledvance_com/_layouts/15/onedrive.aspx?login_hint=j%2Ezheng4%40ledvance%2Ecom&view=1"
export const Username = "J.Zheng4@Ledvance.com"
export const Password = "Ledvance@2023"

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


interface DriverGroup {
  [key: number]: MappingItem[]
}

export const getDriverFormatData = (driverConfig: DriverConfigType) =>{
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
      result += String(mapping.value).padStart(mapping.length * 2, '0')
      currentPosition = pos + mapping.length 
    })
    if(currentPosition < 4){
      result += 'XX'.repeat(4 - currentPosition)
    }
    return result
  })
  const programData = [driverTypeHex, ...mapping]
  return makeContinuous(programData)
}

const makeContinuous = (data:string[])=>{
  // 提取前两位数字并转换为整数
  const numbers = data.map(item => parseInt(item.slice(0, 2)));
  
  // 找到数组中的最小和最大值
  const minNum = min(numbers) || 0;
  const maxNum = max(numbers) || 0;
  
  // 创建一个包含所有连续数的数组
  const completeArray = range(minNum, maxNum + 1);
  
  // 找到缺失的数
  const missingNumbers = difference(completeArray, numbers);
  
  // 将缺失的数转换为所需的格式并添加到原始数组中
  missingNumbers.forEach(num => {
    let newItem = (num < 10 ? '0' : '') + num + 'XXXXXXXX';
    data.push(newItem);
  });

  // 对数组进行排序
  data.sort();

  return data;
}
type WriteStatus = 0 | 1 | 2 | 404
interface WriteNfcResult extends ReadFileType{
  status: WriteStatus
}
type WriteNfcDataType = (driverData: string) => Promise<WriteNfcResult>
export const writeNfcData:WriteNfcDataType = async (driverData) =>{
  const command = `CallNFC_EU.exe ${driverData}`
  return new Promise((resolve)=>{
    window.electron.ipcRenderer.sendExecCommand('run-exec', command)
    window.electron.ipcRenderer.on('run-exec', (res) =>{
      resolve({
        ...res,
        status: 0
      })
    })
  })
}